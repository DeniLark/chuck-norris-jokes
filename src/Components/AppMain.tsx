import {
  Box,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material"
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import ButtonLoading from "./ButtonLoading"
import { fetchJokeAction } from "../store/slices/appSlice"

interface IProps {
  drawerWidth: number
}

function AppMain({ drawerWidth }: IProps) {
  const dispatch = useAppDispatch()
  const joke =
    useAppSelector((state) => state.app.joke) ||
    "This is going to be a joke"
  const isLoad = useAppSelector((state) => state.app.isLoad)

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
      <ButtonLoading
        handlerClick={() => dispatch(fetchJokeAction())}
        isLoad={isLoad}
      >
        Get joke
      </ButtonLoading>
      <Divider sx={{ my: 2 }} />
      <Typography>{joke}</Typography>
    </Box>
  )
}

export default AppMain
