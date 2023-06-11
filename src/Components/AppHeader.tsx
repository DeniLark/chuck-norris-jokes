import AppBar from "@mui/material/AppBar"
import { Box, IconButton, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import RefreshIcon from "@mui/icons-material/Refresh"

interface IProps {
  drawerWidth: number
  handleDrawerToggle: () => void
}

function Header({
  drawerWidth,
  handleDrawerToggle,
}: IProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="inherit">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
