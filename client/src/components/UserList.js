import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='Nom' />
        <TextField source='Unité'/>
        <EmailField source='E-mail'/>
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
};

export default UserList
