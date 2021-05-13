import React, {useContext, useState} from 'react'
import {PowerContext} from "./MultiStep";
import {Button, Card, Input} from "@material-ui/core";

export default function QuestionOneLine({title, question, onInput, error}) {
    const [text, setText] = useState("")
    const power = useContext(PowerContext) || false
    return <Card style={{padding: "20px"}}>
        <h2>{title}</h2>
        <p>{question}</p>
        <Input disabled={power} onChange={(event) => setText(event.currentTarget.value)}/><b/>
        <Button disabled={power || text === ""} onClick={() => (onInput? onInput(text):null)}>Ввести</Button>
        <p>{error}</p>
    </Card>
}