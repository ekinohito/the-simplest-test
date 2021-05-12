import React, {useContext, useState} from 'react'
import styles from "../styles/Home.module.css";
import {PowerContext} from "./MultiStep";
import {Button, Input} from "@material-ui/core";

export default function QuestionOneLine({title, question, onInput, error}) {
    const [text, setText] = useState("")
    const power = useContext(PowerContext) || false
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
        <Input disabled={power} onChange={(event) => setText(event.currentTarget.value)}/>
        <Button disabled={power || text === ""} onClick={() => (onInput? onInput(text):null)}>Ввести</Button>
        <p>{error}</p>
    </div>
}