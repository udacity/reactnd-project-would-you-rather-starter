const storage = window.localStorage || {
    setItem: () => {},
    getItem: () => {}
}

function set (item, val) {
    storage.setItem(item, val)
}

function get(item) {
    return storage.getItem(item)
}

export const localStorage = {
    get,
    set
}
