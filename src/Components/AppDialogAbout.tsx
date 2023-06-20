import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
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
    <Dialog open={isOpen} maxWidth="lg">
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
        <DialogContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias atque in delectus ab eum et rerum
          dicta, non dignissimos tempora! Dolore, suscipit
          molestias qui minus magnam labore totam omnis
          explicabo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias atque in delectus ab
          eum et rerum dicta, non dignissimos tempora!
          Dolore, suscipit molestias qui minus magnam labore
          totam omnis explicabo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias atque in
          delectus ab eum et rerum dicta, non dignissimos
          tempora! Dolore, suscipit molestias qui minus
          magnam labore totam omnis explicabo! Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Molestias atque in delectus ab eum et rerum dicta,
          non dignissimos tempora! Dolore, suscipit
          molestias qui minus magnam labore totam omnis
          explicabo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias atque in delectus ab
          eum et rerum dicta, non dignissimos tempora!
          Dolore, suscipit molestias qui minus magnam labore
          totam omnis explicabo! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias atque in
          delectus ab eum et rerum dicta, non dignissimos
          tempora! Dolore, suscipit molestias qui minus
          magnam labore totam omnis explicabo! Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Molestias atque in delectus ab eum et rerum dicta,
          non dignissimos tempora! Dolore, suscipit
          molestias qui minus magnam labore totam omnis
          explicabo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias atque in delectus ab
          eum et rerum dicta, non dignissimos tempora!
          Dolore, suscipit molestias qui minus magnam labore
          totam omnis explicabo! v Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Molestias atque
          in delectus ab eum et rerum dicta, non dignissimos
          tempora! Dolore, suscipit molestias qui minus
          magnam labore totam omnis explicabo!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppDialogAbout
