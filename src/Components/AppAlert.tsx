import { Alert } from "@mui/material"
import {
  useAppSelector,
  useAppDispatch,
} from "../store/hooks"
import {
  openAlert,
  closeAlert,
} from "../store/slices/appSlice"

function AppAlert() {
  const textAlert = useAppSelector(
    (state) => state.app.textAlert
  )

  const dispatch = useAppDispatch()

  if (!textAlert) return null
  else
    return (
      <Alert
        severity="error"
        variant="filled"
        sx={{ mt: 2 }}
        onClose={() => dispatch(closeAlert())}
      >
        {textAlert}
      </Alert>
    )
}

export default AppAlert
