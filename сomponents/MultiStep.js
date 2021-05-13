import React, {createContext, useState} from 'react'
import {Grid} from "@material-ui/core";

export const PowerContext = createContext(false)
export const ValuesContext = createContext({})

export default function MultiStep({children, step, power}) {
    return <PowerContext.Provider value={power}>
        <ValuesContext.Provider value={useState({})}>
            <Grid container direction="column" spacing="3">
                {children.map((child, index) => <Grid item style={{display: index < step?"block":"none"}}>
                    {child}
                </Grid>)}
            </Grid>
        </ValuesContext.Provider>
    </PowerContext.Provider>
}