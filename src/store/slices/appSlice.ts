import {
  createAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import Action from "../actionTypes"
import {
  loadJokes,
  saveJokes,
  getIsDialogShow,
  setIsDialogShow,
} from "../localStorage"

type Id = string

export interface IJoke {
  id: Id
  text: string
  category: string
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    categories: [
      { title: "all", icon: "list_alt" },
      {
        title: "animal",
        icon: "pets",
      },
      {
        title: "career",
        icon: "work",
      },
      {
        title: "celebrity",
        icon: "star",
      },
      { title: "dev", icon: "computer" },
      {
        title: "explicit",
        icon: "18_up_rating",
      },
      {
        title: "fashion",
        icon: "diamond",
      },
      {
        title: "food",
        icon: "restaurant",
      },
      {
        title: "history",
        icon: "history_edu",
      },
      {
        title: "money",
        icon: "attach_money",
      },
      { title: "movie", icon: "live_tv" },
      {
        title: "music",
        icon: "music_note",
      },
      {
        title: "political",
        icon: "gavel",
      },
      {
        title: "religion",
        icon: "church",
      },
      {
        title: "science",
        icon: "science",
      },
      { title: "sport", icon: "sports" },
      {
        title: "travel",
        icon: "flight",
      },
    ],
    currentCategory: "dev",
    joke: null as IJoke | null,
    isLoad: false,
    jokes: loadJokes(),
    textSnackBar: "",
    isDialogAboutApp: !getIsDialogShow(),
    textAlert: "",
    isMobileDrawerOpen: false,
  },
  reducers: {
    changeCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.currentCategory = action.payload
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
      const index = jokes.findIndex(
        (j) => j.id === action.payload.id
      )
      if (index >= 0) {
        state.textSnackBar = "Joke has been received"
        jokes.splice(index, 1)
      }

      jokes.unshift(action.payload)
      saveJokes(jokes)
    },
    removeJoke: (state, action: PayloadAction<Id>) => {
      const newJokes = state.jokes.filter(
        (j) => j.id !== action.payload
      )
      state.jokes = newJokes
      saveJokes(newJokes)
    },
    openSnackbar: (
      state,
      action: PayloadAction<string>
    ) => {
      state.textSnackBar = action.payload
    },
    closeSnackbar: (state) => {
      state.textSnackBar = ""
    },
    openDialogAboutApp: (state) => {
      state.isDialogAboutApp = true
    },
    closeDialogAboutApp: (state) => {
      state.isDialogAboutApp = false
      setIsDialogShow()
    },
    openAlert: (state, action: PayloadAction<string>) => {
      state.textAlert = action.payload
    },
    closeAlert: (state) => {
      state.textAlert = ""
    },
    toggleMobileDrawer: (state) => {
      state.isMobileDrawerOpen = !state.isMobileDrawerOpen
    },
  },
})

export const fetchJokeAction = createAction<string>(
  Action.FETCH_JOKE
)
export const {
  changeCategory,
  setJoke,
  setLoadTrue,
  setLoadFalse,
  addJoke,
  removeJoke,
  openSnackbar,
  closeSnackbar,
  openDialogAboutApp,
  closeDialogAboutApp,
  openAlert,
  closeAlert,
  toggleMobileDrawer,
} = appSlice.actions
export default appSlice.reducer
