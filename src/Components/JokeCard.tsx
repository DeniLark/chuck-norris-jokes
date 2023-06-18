import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { removeJoke } from "../store/slices/appSlice"
import { useAppDispatch } from "../store/hooks"

interface IProps {
  id: string
  text: string
  category: string
}

function JokeCard({ id, category, text }: IProps) {
  const dispatch = useAppDispatch()

  return (
    <Card
      sx={{
        display: "flex",
        mb: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="caption">
          Category: {category}
        </Typography>
        <Typography>{text}</Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="remove joke"
          onClick={() => dispatch(removeJoke(id))}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default JokeCard
