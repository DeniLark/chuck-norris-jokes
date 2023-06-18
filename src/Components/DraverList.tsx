import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material"
import {
  useAppSelector,
  useAppDispatch,
} from "../store/hooks"
import { changeCategory } from "../store/slices/appSlice"

function DrawerList() {
  const listItems = useAppSelector(
    (state) => state.app.categories
  )
  const currentCategory = useAppSelector(
    (state) => state.app.currentCategory
  )
  const dispatch = useAppDispatch()

  return (
    <div>
      <List>
        {listItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              selected={item.title === currentCategory}
              onClick={() =>
                dispatch(changeCategory(item.title))
              }
            >
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                sx={{
                  "&:first-letter": {
                    textTransform: "uppercase",
                  },
                }}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default DrawerList
