import React, {createContext} from 'react'

export const PowerContext = createContext(false)

export default function MultiStep({children, step, power}) {
    return <PowerContext.Provider value={power}>
        {children.slice(0, step)}
    </PowerContext.Provider>
}