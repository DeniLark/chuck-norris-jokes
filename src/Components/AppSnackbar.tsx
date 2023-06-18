import { IconButton, Snackbar } from "@mui/material"
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import CloseIcon from "@mui/icons-material/Close"
import { closeSnackbar } from "../store/slices/appSlice"

function AppSnackbar() {
  const isOpenSnackbar = useAppSelector(
    (state) => state.app.isSnackBar
  )
  const textSnackBar = useAppSelector(
    (state) => state.app.textSnackBar
  )
  const dispatch = useAppDispatch()

  return (
    <Snackbar
      open={isOpenSnackbar}
      message={textSnackBar}
      autoHideDuration={2000}
      onClose={() => dispatch(closeSnackbar())}
      action={
        <IconButton
          color="inherit"
          onClick={() => dispatch(closeSnackbar())}
        >
          <CloseIcon aria-label="close snackbar" />
        </IconButton>
      }
    />
  )
}

export default AppSnackbar
