import { all } from 'redux-saga/effects'
import {
  watchAsyncIncrement,
  watchAsyncDecrement,
} from 'redux/counter/saga'

export default function* rootSaga() {
  yield all([
    watchAsyncIncrement(),
    watchAsyncDecrement(),
  ])
}
