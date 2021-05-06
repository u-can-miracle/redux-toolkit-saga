import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterReducer } from 'redux/counter'
import sagaMiddleware from 'middlewares/sagaMiddleware'
import rootSaga from 'redux/rootSaga'

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
