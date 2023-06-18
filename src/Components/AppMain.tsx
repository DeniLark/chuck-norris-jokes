import {
  Box,
  Card,
  Collapse,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material"
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import { TransitionGroup } from "react-transition-group"

import ButtonLoading from "./ButtonLoading"
import { fetchJokeAction } from "../store/slices/appSlice"

interface IProps {
  drawerWidth: number
}

function AppMain({ drawerWidth }: IProps) {
  const dispatch = useAppDispatch()

  const isLoad = useAppSelector((state) => state.app.isLoad)
  const jokes = useAppSelector((state) => state.app.jokes)

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
      <TransitionGroup>
        {jokes.map(({ id, text }) => (
          <Collapse key={id}>
            <Card sx={{ p: 2, mb: 1 }}>
              <Typography>{text}</Typography>
            </Card>
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  )
}

export default AppMain
