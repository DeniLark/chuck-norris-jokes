import {
  RefObject,
  createRef,
  useEffect,
  useState,
} from "react"
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks"
import { toggleMobileDrawer } from "../store/slices/appSlice"
import DrawerList from "./DrawerList"
import "./AppDrawer.scss"

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

  const categoriesRef: RefObject<HTMLDivElement> =
    createRef()
  const isCategoriesHighlighted = useAppSelector(
    (state) => state.app.isCategoriesHighlighted
  )

  useEffect(() => {
    isCategoriesHighlighted
      ? categoriesRef.current?.classList.add(
          "drawer-categories-animated"
        )
      : categoriesRef.current?.classList.remove(
          "drawer-categories-animated"
        )
  }, [isCategoriesHighlighted])

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
        <Box ref={categoriesRef}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="h3" variant="h6">
              Categories
            </Typography>
            {isMobile && (
              <IconButton
                onClick={() =>
                  dispatch(toggleMobileDrawer())
                }
              >
                <ChevronLeftIcon />
              </IconButton>
            )}
          </Box>
          <Divider />
          <DrawerList />
        </Box>
      </Drawer>
    </Box>
  )
}

export default AppDrawer
