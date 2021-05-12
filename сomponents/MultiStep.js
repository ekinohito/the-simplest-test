import React, {createContext, useState} from 'react'

export const PowerContext = createContext(false)
export const ValuesContext = createContext({})

export default function MultiStep({children, step, power}) {
    return <PowerContext.Provider value={power}>
        <ValuesContext.Provider value={useState({})}>
            {children.map((child, index) => <div style={{display: index < step?"block":"none"}}>
                {child}
            </div>)}
        </ValuesContext.Provider>
    </PowerContext.Provider>
}