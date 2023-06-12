import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { CssBaseline } from "@mui/material"
import store from "./store/store"
import { Provider } from "react-redux"

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
)
