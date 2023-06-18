import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

interface IProps {
  text: string
  category: string
}

function JokeCard({ category, text }: IProps) {
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
        <IconButton aria-label="remove joke">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default JokeCard
