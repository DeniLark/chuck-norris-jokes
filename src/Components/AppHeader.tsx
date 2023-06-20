import AppBar from "@mui/material/AppBar"
import {
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import HelpIcon from "@mui/icons-material/Help"

import { inflectionCategory } from "../utils"
import {
  useAppSelector,
  useAppDispatch,
} from "../store/hooks"
import { openDialogAboutApp } from "../store/slices/appSlice"

interface IProps {
  drawerWidth: number
  handleDrawerToggle: () => void
}

function Header({
  drawerWidth,
  handleDrawerToggle,
}: IProps) {
  const currentCategory = useAppSelector(
    (state) => state.app.currentCategory
  )
  const title = inflectionCategory(currentCategory || "")

  const dispatch = useAppDispatch()

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="span"
          sx={{
            "&:first-letter": {
              textTransform: "uppercase",
            },
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => dispatch(openDialogAboutApp())}
        >
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
