import { Box } from "@mui/material"

import AppMain from "./Components/AppMain"
import AppDrawer from "./Components/AppDrawer"
import AppHeader from "./Components/AppHeader"
import AppSnackbar from "./Components/AppSnackbar"
import AppFAB from "./Components/AppFAB"
import AppDialogAbout from "./Components/AppDialogAbout"
import { drawerWidth } from "./constants"

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader drawerWidth={drawerWidth} />
      <AppDrawer drawerWidth={drawerWidth} />
      <AppMain drawerWidth={drawerWidth} />

      <AppSnackbar />

      <AppDialogAbout />

      <AppFAB />
    </Box>
  )
}

export default App
