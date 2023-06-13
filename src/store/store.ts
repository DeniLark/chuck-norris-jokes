import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import app from "./slices/appSlice"
import { sagaWatcher } from "./sagas"

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: { app },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    saga,
  ],
})

saga.run(sagaWatcher)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
