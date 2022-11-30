const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('action', action);
    const returnValue = next(action);
    console.log('new state', store.getState());
    console.groupEnd();
    return returnValue;
    
}
export default logger;