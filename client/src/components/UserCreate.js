import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Créer un utilisateur' {...props}>
      <SimpleForm>
        <TextInput source='id' />
        <TextInput source='Nom'/>
        <TextInput source='Unité'/>
        <TextInput source='E-mail' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
