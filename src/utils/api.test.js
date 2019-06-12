import { getInitialData } from './api';
import { } from './api';

describe('getInitialData', () => {
  test('retrieves users', async () => {
    const data = await getInitialData();
    expect(data.users['sarahedo']).toBeDefined();
    expect(Object.values(data.users).length).toBe(3);
  });
});
