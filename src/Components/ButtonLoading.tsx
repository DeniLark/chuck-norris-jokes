import {
  Button,
  Box,
  CircularProgress,
} from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"

interface IProps {
  children: string
  isLoad: boolean
  handlerClick: () => void
}

function ButtonLoading({
  children,
  handlerClick,
  isLoad,
}: IProps) {
  return (
    <Button
      disabled={isLoad}
      variant="contained"
      onClick={handlerClick}
    >
      {children}
      <Box sx={{ display: "flex", ml: 1 }}>
        {isLoad ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          <DownloadIcon />
        )}
      </Box>
    </Button>
  )
}

export default ButtonLoading
