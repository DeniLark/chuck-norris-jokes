import { put, takeEvery, call } from "redux-saga/effects"
import Action from "./actionTypes"
import {
  setJoke,
  setLoadTrue,
  setLoadFalse,
  addJoke,
  IJoke,
} from "../store/slices/appSlice"

interface IFetchJoke {
  id: string
  value: string
}

export function* sagaWatcher() {
  yield takeEvery(Action.FETCH_JOKE, sagaWorkerFetchJoke)
}

const fetchToJoke = (fetchJoke: IFetchJoke): IJoke => {
  const { id, value: text } = fetchJoke
  return { id, text }
}

function* sagaWorkerFetchJoke() {
  try {
    yield put(setLoadTrue())
    const json: IFetchJoke = yield call(fetchJoke)
    const j = fetchToJoke(json)
    yield put(setJoke(j))
    yield put(addJoke(j))
    yield put(setLoadFalse())
  } catch (err) {}
}

async function fetchJoke() {
  const response = await fetch(
    "https://api.chucknorris.io/jokes/random"
  )
  return await response.json()
}
