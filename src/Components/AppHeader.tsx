import AppBar from "@mui/material/AppBar"
import {
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { inflectionCategory } from "../utils"
import { useAppSelector } from "../store/hooks"

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
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
