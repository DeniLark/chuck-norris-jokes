import { IJoke } from "./slices/appSlice"

enum LSKeys {
  SAVED_JOKES = "jokes",
  IS_DIALOG_SHOW = "isDialogShow",
}

export const saveJokes = (jokes: IJoke[]) => {
  localStorage.setItem(
    LSKeys.SAVED_JOKES,
    JSON.stringify(jokes)
  )
}

export const loadJokes = (): IJoke[] => {
  const json = localStorage.getItem(LSKeys.SAVED_JOKES)
  const jokes = json ? JSON.parse(json) : []
  return jokes
}

export const setIsDialogShow = () => {
  localStorage.setItem(
    LSKeys.IS_DIALOG_SHOW,
    JSON.stringify(true)
  )
}

export const getIsDialogShow = (): boolean => {
  const json = localStorage.getItem(LSKeys.IS_DIALOG_SHOW)
  const isDialogShow = json ? JSON.parse(json) : false
  return isDialogShow
}
