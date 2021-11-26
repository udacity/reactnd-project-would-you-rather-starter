//middleware pattern
const logger = (store) =>(next) =>(action) =>{
    console.group(action.type);
    console.log("Action",action);
    console.log("Prev State",store.getState());
    const returnedValue=next(action)
    console.log("New State",store.getState());
    console.groupEnd()
    return returnedValue;
}
export default logger