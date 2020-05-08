 export const loadDataRequest = () => { //action creator
    return {
        type: 'LOAD_DATA_REQUEST'
   }
}
export const loadDataSuccess = (data) => { //action creator
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
   }
}

export const loadDataUARequest = () => { //action creator
    return {
        type: 'LOAD_DATA_UA_REQUEST'
   }
}
export const loadDataUASuccess = (data) => { //action creator
    return {
        type: 'LOAD_DATA_UA_SUCCESS',
        data
   }
}


