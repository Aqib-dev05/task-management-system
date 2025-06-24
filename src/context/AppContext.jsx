/* eslint-disable react-refresh/only-export-components */
// AppContext.js
import React, { createContext,} from 'react';

// Step 1: Create the context
export const AppContext = createContext();

// Step 2: Create the provider with state
export const AppProvider = ({ children }) => {


  return (
    <AppContext.Provider value={""}>
      {children}
    </AppContext.Provider>
  );
};
