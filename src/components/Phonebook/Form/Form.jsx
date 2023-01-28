import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled, FormStyled, Input } from './Form.styled';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addingNewContact } from 'redux/contactsSlice/contactsSlice';






// values for Formik 
const initialValues = {
    name: '',
    number: ''
}
   
export const FormikForm = ({ handleSubmit }) => {

    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();
    
     
const updatePhoneBookList = (newContactName) => {
        console.log(newContactName)
        
        // checking if this contact new or exists in the phonebook
        const foundDuplicate = contacts.find(contact => contact.name === newContactName.name)
        if (foundDuplicate) {
            alert(`Open your eyes, ${newContactName.name} is already in your phonebook!`)
        return}
        // adding new contact name
        const contactNew = { ...newContactName, id: nanoid() }
        console.log(contactNew)

        dispatch(addingNewContact(contactNew))
}
    
    
handleSubmit = (values, {resetForm}) => {
        
    console.log(values)
   
         updatePhoneBookList(values)   
        resetForm();
        
}
    
     
  

    return (
        
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
             <FormStyled autoComplete='off'>
            <label htmlFor="name">
                Enter Name
            <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
                </label>

                <label htmlFor="number">
                    Phone number
                    <Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
               </label>
            
            <ButtonStyled type="submit">Submit</ButtonStyled>
        
        </FormStyled>
       </Formik>
    )
}


FormikForm.propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
}