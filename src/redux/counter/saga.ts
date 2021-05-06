import { takeEvery, put, delay } from 'redux-saga/effects'
import {
  incrementAsync,
  decrementAsync,
  increment,
  decrement,
} from 'redux/counter'

function* incrementAsyncFn() {
  yield delay(1500)
  yield put(increment())
}
export function* watchAsyncIncrement() {
  yield takeEvery(incrementAsync.toString(), incrementAsyncFn)
}


function* decrementAsyncFn() {
  yield delay(1500)
  yield put(decrement())
}
export function* watchAsyncDecrement() {
  yield takeEvery(decrementAsync.toString(), decrementAsyncFn)
}
