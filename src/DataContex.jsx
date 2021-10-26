import React, { createContext, useState } from 'react'
  
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState({})

    const setValues = (values) => {
        setData(prevData => ({ ...prevData, ...values }))
    }

    return <DataContext.Provider value={{ data, setValues }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider
