import { createSlice } from "@reduxjs/toolkit";

// imported redux-persist 

// import { persistReducer } from 'redux-persist'

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// const defaultContacts = [{id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
//             {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
//             {id: "id-3", name: "Eden Clements", number: "645-17-79"},
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" }]
            

// I spent fucking 4 hours trying to figure out WHY persistor returns object and NOT an array.
// conclusion: initialState VALUE should be AN OBJECT WITH AN ARRAY INSIDE!! not just an array itself
const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
       
        addingNewContact(state, action) {
            state.contacts.push(action.payload)
      },
      
      deletingChosenContact(state, action) {
          // console.log(state.contacts)
       state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})





export const { addingNewContact, deletingChosenContact } = contactsSlice.actions;





// Selectors

// export const getContactsValueFromRedux = state => state.contacts