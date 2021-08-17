import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State

const initialState ={
    transaction :[
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book', amount:-40},
        {id:4, text:'Camera', amount:200}
    ]
}

//CreateContext
export const GlobalContext= createContext(initialState);

//Provider component
export const GlobalProvider= ({children}) => {
    const [state,dispatch]=useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}