import { Card, Typography } from "@mui/material"

interface IProps {
  text: string
  category: string
}

function JokeCard({ category, text }: IProps) {
  return (
    <Card sx={{ p: 2, mb: 1 }}>
      {category}
      <Typography>{text}</Typography>
    </Card>
  )
}

export default JokeCard
