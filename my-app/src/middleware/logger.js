//middleware pattern
const logger = (store) =>(next) =>(action) =>{
    console.group(action.type);
    console.log("Action",action);
    console.log("Prev State",store.getState());
    const returnValue=next(action)
    console.log("New State",store.getState());
    console.groupEnd()
    return returnValue;
}
export default logger