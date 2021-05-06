import { createAction, createReducer } from '@reduxjs/toolkit'

const resource = 'counter'
export const increment = createAction(`${resource}/increment`)
export const decrement = createAction(`${resource}/decrement`)
export const increamentByAmount = createAction<number>(`${resource}/incrementByAmount`)
export const incrementAsync = createAction(`${resource}/incrementAsync`)
export const decrementAsync = createAction(`${resource}/decrementAsync`)

type InitialState = {
  value: number
}

const initialState: InitialState = { value: 0 }

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(increamentByAmount, (state, action) => {
      state.value += action.payload
    })
})
