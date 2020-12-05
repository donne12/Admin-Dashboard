import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='Numéro du client' />
        <TextField source='Contenu' />
        <TextField source='Localisation'/>
        <DateField source='Date'/>
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList
