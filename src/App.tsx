import { useState } from "react"

import { Box } from "@mui/material"

import AppMain from "./Components/AppMain"
import AppDrawer from "./Components/AppDrawer"
import AppHeader from "./Components/AppHeader"
import AppSnackbar from "./Components/AppSnackbar"
import AppFAB from "./Components/AppFAB"
import AppDialogAbout from "./Components/AppDialogAbout"
import { drawerWidth } from "./constants"

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

      <AppSnackbar />

      <AppDialogAbout />

      <AppFAB />
    </Box>
  )
}

export default App
