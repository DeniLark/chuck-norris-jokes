import { useState } from "react"

import Box from "@mui/material/Box"

import AppMain from "./Components/AppMain"
import AppDrawer from "./Components/AppDrawer"
import AppHeader from "./Components/AppHeader"

const drawerWidth = 240

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <AppDrawer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <AppMain drawerWidth={drawerWidth} />
    </Box>
  )
}

export default App
