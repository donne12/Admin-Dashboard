import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Editer une commande' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='Numéro du client' />
        <TextInput multiline source='Contenu' />
        <TextInput source='Localisation'/>
        <DateInput label='Date' source='Date' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
