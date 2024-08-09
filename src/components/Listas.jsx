import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { CloudQueue, Deck } from '@mui/icons-material'

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button>
            <ListItemIcon>
                <CloudQueue />
            </ListItemIcon>
            <ListItemText primary='My first item' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Deck />
            </ListItemIcon>
            <ListItemText primary='My second item' />
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Listas
