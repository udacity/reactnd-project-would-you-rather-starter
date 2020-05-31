const storage = window.localStorage || {
    setItem: () => {},
    getItem: () => {},
    removeItem: () => {}
}

function set (item, val) {
    storage.setItem(item, val)
}

function get(item) {
    return storage.getItem(item)
}

function remove(item) {
    storage.removeItem(item)
}

export const localStorage = {
    get,
    set,
    remove
}
