import {
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material"

interface IProps {
  drawerWidth: number
}

function AppMain({ drawerWidth }: IProps) {
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
      <Button variant="contained">Get joke</Button>
      <Divider sx={{ my: 2 }} />
      <Typography>This is going to be a joke</Typography>
    </Box>
  )
}

export default AppMain
