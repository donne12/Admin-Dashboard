import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Ajouter une commande' {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput multiline source='Numéro du client' />
        <TextInput source='Contenu' />
        <TextInput source='Localisation'/>
        <DateInput label='Date' source='Date'/>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
