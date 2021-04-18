import React, { createContext } from 'react';
export const DataContext = createContext();

const DataContextProvider = (props) => {
    const state = { name: "shadin", age: 12 }
    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;