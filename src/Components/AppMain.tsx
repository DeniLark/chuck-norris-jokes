import {
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material"
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import { fetchJokeAction } from "../store/slices/appSlice"

interface IProps {
  drawerWidth: number
}

function AppMain({ drawerWidth }: IProps) {
  const dispatch = useAppDispatch()
  const joke =
    useAppSelector((state) => state.app.joke) ||
    "This is going to be a joke"

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Button
        variant="contained"
        onClick={() => dispatch(fetchJokeAction())}
      >
        Get joke
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography>{joke}</Typography>
    </Box>
  )
}

export default AppMain
