import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'
import { ListWrapper } from './Contacts.styled'
import { useDispatch } from 'react-redux'
import { deletingChosenContact } from 'redux/contactsSlice/contactsSlice'





export const Contacts = ({ contacts }) => {

const dispatch = useDispatch()

    // refactored. now onDelete click has been transferred from Phonebook component. dispatch is used instead of useState to delete (using filter) chosen contact
 const onDeleteClick = (id) => {
        
     dispatch(deletingChosenContact(id))
 }
  
    
    return (
        <>
            <h2>Contacts</h2>
            <Filter />
            <ListWrapper>
                {contacts.map(({ name, id, number }) => (
                    <li key={id}><p>{name}: {number}</p><button type="button" onClick={() => onDeleteClick(id)}>Delete this bastard</button></li>
         
                ))}
            </ListWrapper>
        </>)
}
        

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            
        })),
    filterFunc: PropTypes.func,
    inputValue: PropTypes.string,
    onDeleteClick: PropTypes.func,
}
