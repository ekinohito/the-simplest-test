import React from 'react'

export default function MultiStep({children, step}) {
    return <>
        {children.slice(0, step)}
    </>
}