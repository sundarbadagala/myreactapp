
import {all} from 'redux-saga/effects'
import {watchMobile} from './mobileSaga'
import {watchUsers} from './usersSaga'
import { watchData } from './dataSaga'
import { watchTodo } from './todoSaga'

export default function* rootSaga(){
    yield all([
      watchMobile(),
      watchUsers(),
      watchData(),
      watchTodo()
    ])
}
