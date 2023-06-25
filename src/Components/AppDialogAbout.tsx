import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import { closeDialogAboutApp } from "../store/slices/appSlice"

function AppDialogAbout() {
  const isOpen = useAppSelector(
    (state) => state.app.isDialogAboutApp
  )
  const dispatch = useAppDispatch()
  const closeDialog = () => dispatch(closeDialogAboutApp())

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle>
        About app
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText component="div">
          <Typography>
            This app gets fun facts about Chuck Norris from
            API{" "}
            <Link href="https://api.chucknorris.io/">
              https://api.chucknorris.io/
            </Link>
          </Typography>
          <Typography>
            Select the joke category you are interested in
            (on the left)
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>
            <Typography
              component="span"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold!important",
              }}
            >
              Warning:
            </Typography>{" "}
            some jokes are for adult (18+)
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppDialogAbout
