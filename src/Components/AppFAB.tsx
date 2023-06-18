import { useState, useEffect } from "react"

import { Fab, Zoom } from "@mui/material"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

import { scrollForFABTop } from "../constants"

function AppFAB() {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => setScroll(window.scrollY)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Zoom in={scroll >= scrollForFABTop}>
      <Fab
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  )
}

export default AppFAB
