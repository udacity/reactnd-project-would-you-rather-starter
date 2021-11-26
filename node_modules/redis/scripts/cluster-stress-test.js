import { createCluster } from 'redis';
import { strict as assert } from 'assert';
import { promises as fs } from 'fs';

const cluster = createCluster({
    rootNodes: [{
        socket: {
            host: 'redis-14416.ned.shahar.demo.redislabs.com',
            port: 14416
        }
    }],
    defaults: {
        password: 'osscluster'
    }
});

cluster.on('error', err => console.error('Redis Cluster Error', err));

try {
    await cluster.connect();

    await Promise.all([
        ...cluster.getMasters().map(({ client }) => client.flushAll()),
        fs.writeFile('./error.log', '')
    ]);

    await promiseConcurrency(setAndGet, { end: 500000, concurrency: 1000 });
} finally {
    await cluster.disconnect();
}

async function setAndGet(i) {
    const str = i.toString();

    await cluster.set(str, str);

    assert.equal(
        await cluster.get(str),
        str
    );
}

function promiseConcurrency(fn, { start = 0, end, concurrency }) {
    return new Promise(resolve => {
        let num = start,
            inProgress = 0;

        function run() {
            ++inProgress;

            const i = num++;
            if (i % 1000 === 0) {
                console.log('!!!', i);
            }

            fn(i)
                .finally(() => --inProgress)
                .then(() => {
                    if (num < end) {
                        run();
                    } else if (inProgress === 0) {
                        resolve();
                    }
                })
                .catch(err => fs.appendFile('./error.log', `${i.toString()} - ${err.toString()}\n\n-------\n\n`));
        }

        for (let i = 0; i < concurrency; i++) {
            run();
        }
    });
}
