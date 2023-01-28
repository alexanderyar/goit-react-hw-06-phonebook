import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'
import { ListWrapper } from './Contacts.styled'
import { useDispatch, useSelector } from 'react-redux'
import { deletingChosenContact } from 'redux/contactsSlice/contactsSlice'





export const Contacts = () => {

    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.contacts);
    const filterLowered = useSelector(state => state.filter).toLowerCase()

    const filteredContacts = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterLowered)
     )

    // refactored. now onDelete click has been transferred from Phonebook component. dispatch is used instead of useState to delete (using filter) chosen contact
 const onDeleteClick = (id) => {
        console.log(id)
     dispatch(deletingChosenContact(id));
 }
  
    
    return (
        <>
            <h2>Contacts</h2>
            <Filter />
            <ListWrapper>
                {filteredContacts.map(({ name, id, number }) => (
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
