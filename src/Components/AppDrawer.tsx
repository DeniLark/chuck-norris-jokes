import { Box, Drawer } from "@mui/material"
import DrawerList from "./DraverList"
import { useEffect, useState } from "react"
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import { toggleMobileDrawer } from "../store/slices/appSlice"

interface IProps {
  drawerWidth: number
}

function AppDrawer({ drawerWidth }: IProps) {
  const mobileOpen = useAppSelector(
    (state) => state.app.isMobileDrawerOpen
  )
  const dispatch = useAppDispatch()

  const [isMobile, setIsMobile] = useState<boolean | null>(
    null
  )

  const toggleIsMobile = (w: Window) => {
    if (w.innerWidth < 600) setIsMobile(true)
    else setIsMobile(false)
  }

  const handleResizeWindow = (event: Event) => {
    toggleIsMobile(event.target as Window)
  }

  useEffect(() => {
    toggleIsMobile(window)
    window.addEventListener("resize", handleResizeWindow)
    return () =>
      window.removeEventListener(
        "resize",
        handleResizeWindow
      )
  }, [])

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="categories of jokes"
    >
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        ModalProps={
          isMobile
            ? {
                keepMounted: true,
              }
            : undefined
        }
        open={isMobile ? mobileOpen : true}
        onClose={
          isMobile
            ? () => dispatch(toggleMobileDrawer())
            : undefined
        }
      >
        <DrawerList />
      </Drawer>
    </Box>
  )
}

export default AppDrawer
