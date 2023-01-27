
import PropTypes from 'prop-types'
// import { useEffect } from 'react'


import { nanoid } from 'nanoid'

import { FormikForm } from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import { PhonebookWrapper } from './Phonebook.styled'
import { useDispatch, useSelector } from 'react-redux'
import { addingNewContact, getContactsValueFromRedux } from 'redux/contactsSlice/contactsSlice'

export const Phonebook = () => {

    // const randomArrayOfNames = [{id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
    //         {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
    //         {id: "id-3", name: "Eden Clements", number: "645-17-79"},
    //         { id: "id-4", name: "Annie Copeland", number: "227-91-26" }]

  
  // !!!
    // fetching default array of contacts from initialState of contactSlice
    // const randomArrayOfNames = useSelector(state => state.contacts);

  const contacts = useSelector(state => state.contacts);

  console.log(contacts)

  const dispatch = useDispatch();
  
 

    
    
    // !!! re-do later
    // const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem('contacts')) ?? randomArrayOfNames})
    

    // used redux instead
    // const [filter, setFilter] = useState('')

    

    //adding componentDidmount, so contacts are copied from the localStorage after reloading automatically

    //this useEffect can be omitted if default value of contacts can is derived from the localstorage as default when creating useState
    // useEffect(() => {
    //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    //     console.log('вызвался юзэффект при mount')
    //     if (parsedContacts)
    //    { setContacts(parsedContacts)}
    // }, [])
    
    
    // !!! replaced with Redux-persist in contactSlice Component;
      // adding to localstorage when "componentDidUpdate"
    // useEffect(() => {
    //     console.log('вызвался юзэффект при апдейте contacts')
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])
    

// !!!!!  
  
  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), [] )
  
  const filtered = Object.filter(contacts, contact => contact.id !== undefined); 
  console.log(filtered);
  

    const updatePhoneBookList = (newContactName) => {
        console.log(newContactName)
        
        // checking if this contact new or exists in the phonebook
        const foundDuplicate = filtered.find(contact => contact.name === newContactName.name)
        if (foundDuplicate) {
            alert(`Open your eyes, ${newContactName.name} is already in your phonebook!`)
        return}
        // adding new contact name
        const contactNew = { ...newContactName, id: nanoid() }
        console.log(contactNew)

        dispatch(addingNewContact(contactNew))
    }


  // used reducer in redux
    // const handleChange = (e) => {
    //     console.log(e.currentTarget.value)
        
    //     setFilter(e.currentTarget.value)
    // }



    // tranferred to the "Contacts" components + redux
    // const onDeleteClick = (id) => {
        
    //     setContacts(prevState => (prevState.filter(contact => contact.id !== id) ))

    // }


    
    // now lowered filter get it's value from redux
  const filterLowered = useSelector(state => state.filter).toLowerCase()
  // console.log(filterLowered)

  // turning object with contacts that persist returns into array (in order to to use with map)

  
 
     const filteredContacts = filtered.filter(contact => 
            contact.name.toLowerCase().includes(filterLowered)
     )
  



    
//    return (
//     <PhonebookWrapper>
//     <FormikForm onSubmit={updatePhoneBookList} />
//     <Contacts contacts={filteredContacts}   onDeleteClick={onDeleteClick} />
//     </PhonebookWrapper>
//     )
    
    
     return (
    <PhonebookWrapper>
    <FormikForm onSubmit={updatePhoneBookList} />
    <Contacts contacts={filteredContacts}    />
    </PhonebookWrapper>
    )
    
}
    


Phonebook.propTypes = {
    newContactName: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
}
