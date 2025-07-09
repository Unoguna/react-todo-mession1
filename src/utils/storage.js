const storage = window.localStorage

export const setItem = (key, value) => {
    try {
        storage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}

export const getItem = (key, defaultValue) => {
    try {
        const storagedValue = storage.getItem(key)
        return storagedValue ? JSON.parse(storagedValue) : storagedValue
    } catch (e) {
        console.log(e)
        return null
    }
}
