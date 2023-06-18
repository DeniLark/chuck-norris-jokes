import { IJoke } from "./slices/appSlice"

enum LSKeys {
  SAVED_JOKES = "jokes",
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
