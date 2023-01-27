import { createSlice } from "@reduxjs/toolkit";

// imported redux-persist 

// import { persistReducer } from 'redux-persist'

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const defaultContacts = [{id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
            {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
            {id: "id-3", name: "Eden Clements", number: "645-17-79"},
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" }]

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: defaultContacts,
    reducers: {
        // this way I return the new array of objects which dooesn't change the original array;
        // filteringContacts(state, action) {
        //     return state.filter(contact => contact.name.toLowerCase().includes(action.payload))
        // },
        addingNewContact(state, action) {
            console.log(typeof state)
            console.log(state)
            console.log(Object.values(state))
             state.push(action.payload)

            // console.log(action.payload)
            // console.log(state)
            // state.push(action.payload)
        },
        deletingChosenContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})





export const { addingNewContact, deletingChosenContact } = contactsSlice.actions;





// Selectors

// export const getContactsValueFromRedux = state => state.contacts