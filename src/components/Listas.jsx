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
            <ListItemText primary='Mi primer elemento' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Deck />
            </ListItemIcon>
            <ListItemText primary='Mi segundo elemento' />
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Listas
