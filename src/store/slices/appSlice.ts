import {
  createAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import Action from "../actionTypes"
import { loadJokes, saveJokes } from "../localStorage"

export interface IJoke {
  id: string
  text: string
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    categories: [
      { title: "all", icon: "list_alt", selected: true },
      {
        title: "animal",
        icon: "pets",
        selected: false,
      },
      {
        title: "career",
        icon: "work",
        selected: false,
      },
      {
        title: "celebrity",
        icon: "star",
        selected: false,
      },
      { title: "dev", icon: "computer", selected: false },
      {
        title: "explicit",
        icon: "18_up_rating",
        selected: false,
      },
      {
        title: "fashion",
        icon: "diamond",
        selected: false,
      },
      {
        title: "food",
        icon: "restaurant",
        selected: false,
      },
      {
        title: "history",
        icon: "history_edu",
        selected: false,
      },
      {
        title: "money",
        icon: "attach_money",
        selected: false,
      },
      { title: "movie", icon: "live_tv", selected: false },
      {
        title: "music",
        icon: "music_note",
        selected: false,
      },
      {
        title: "political",
        icon: "gavel",
        selected: false,
      },
      {
        title: "religion",
        icon: "church",
        selected: false,
      },
      {
        title: "science",
        icon: "science",
        selected: false,
      },
      { title: "sport", icon: "sports", selected: false },
      {
        title: "travel",
        icon: "flight",
        selected: false,
      },
    ],
    joke: null as IJoke | null,
    isLoad: false,
    jokes: loadJokes(),
  },
  reducers: {
    changeCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.categories.map((c) =>
        c.title === action.payload
          ? (c.selected = true)
          : (c.selected = false)
      )
    },
    setJoke: (state, action: PayloadAction<IJoke>) => {
      state.joke = action.payload
    },
    setLoadTrue: (state) => {
      state.isLoad = true
    },
    setLoadFalse: (state) => {
      state.isLoad = false
    },
    addJoke: (state, action: PayloadAction<IJoke>) => {
      let jokes = state.jokes
      jokes.unshift(action.payload)
      saveJokes(jokes)
    },
  },
})

export const fetchJokeAction = createAction(
  Action.FETCH_JOKE
)
export const {
  changeCategory,
  setJoke,
  setLoadTrue,
  setLoadFalse,
  addJoke,
} = appSlice.actions
export default appSlice.reducer
