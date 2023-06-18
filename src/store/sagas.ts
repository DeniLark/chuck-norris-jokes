import { put, takeEvery, call } from "redux-saga/effects"
import Action from "./actionTypes"
import {
  setJoke,
  setLoadTrue,
  setLoadFalse,
  addJoke,
  IJoke,
} from "../store/slices/appSlice"
import { PayloadAction } from "@reduxjs/toolkit"

interface IFetchJoke {
  id: string
  value: string
  categories: string[]
}

export function* sagaWatcher() {
  yield takeEvery(Action.FETCH_JOKE, sagaWorkerFetchJoke)
}

const fetchToJoke = (fetchJoke: IFetchJoke): IJoke => {
  const { id, value: text, categories } = fetchJoke
  const category = categories.length ? categories[0] : "all"
  return { id, text, category }
}

function* sagaWorkerFetchJoke(
  action: PayloadAction<string>
) {
  try {
    yield put(setLoadTrue())
    const json: IFetchJoke = yield call(
      fetchJoke.bind(null, action.payload)
    )
    const j = fetchToJoke(json)
    yield put(setJoke(j))
    yield put(addJoke(j))
    yield put(setLoadFalse())
  } catch (err) {}
}

async function fetchJoke(category: string = "all") {
  const baseUrl = "https://api.chucknorris.io/jokes/random"
  const url =
    category === "all"
      ? baseUrl
      : `${baseUrl}?category=${category}`
  const response = await fetch(url)
  return await response.json()
}
