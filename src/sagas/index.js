import { takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import getIP from './ipSagas'
import getUA from './uaSagas'

function *index() {
    yield takeLatest('LOAD_DATA_REQUEST', getIP, axios)
    yield takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
    
// SAGAS -> SIDE EFFECTS. O EFEITO COLATERAL DESTA ACTIONS É O GETIP
// O BOTAO NO INFO FEZ O DISPATCH DA ACTION LOAD_DATA_REQUEST, O TAKEEVERY PEGOU E MANDOU PRO GETIP
// GETIP FEZ O YIELD AXIOS GET E MANDOU COM PUT PRO LOADDATASUCCESS, QUE É UM 
// ACTION CREATOR, CRIA UM OBJETO COM O TYPE LOAD_DATA_SUCCESS E A DATA.
}

export default index