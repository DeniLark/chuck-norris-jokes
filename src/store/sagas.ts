import { put, takeEvery, call } from "redux-saga/effects"
import Action from "./actionTypes"
import {
  setJoke,
  setLoadTrue,
  setLoadFalse,
} from "../store/slices/appSlice"

export function* sagaWatcher() {
  yield takeEvery(Action.FETCH_JOKE, sagaWorkerFetchJoke)
}

interface IFetchJoke {
  value: string
}

function* sagaWorkerFetchJoke() {
  try {
    yield put(setLoadTrue())
    const json: IFetchJoke = yield call(fetchJoke)
    yield put(setJoke(json.value))
    yield put(setLoadFalse())
  } catch (err) {
    // console.log(err)
  }
}

async function fetchJoke() {
  const response = await fetch(
    "https://api.chucknorris.io/jokes/random"
  )
  return await response.json()
}
