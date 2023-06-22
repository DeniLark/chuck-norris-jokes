import {
  Box,
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

import { fetchJokeAction } from "../store/slices/appSlice"

import ButtonLoading from "./ButtonLoading"
import JokeCard from "./JokeCard"
import AppAlert from "./AppAlert"

interface IProps {
  drawerWidth: number
}

function AppMain({ drawerWidth }: IProps) {
  const dispatch = useAppDispatch()
  const currentCategory = useAppSelector(
    (state) => state.app.currentCategory
  )

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
        handlerClick={() =>
          dispatch(fetchJokeAction(currentCategory))
        }
        isLoad={isLoad}
      >
        Get joke
      </ButtonLoading>

      <AppAlert />

      <Divider sx={{ my: 2 }} />
      {!jokes.length && <Typography>No jokes</Typography>}
      <TransitionGroup>
        {jokes.map(({ id, text, category }) => (
          <Collapse key={id}>
            <JokeCard
              category={category}
              text={text}
              id={id}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  )
}

export default AppMain
