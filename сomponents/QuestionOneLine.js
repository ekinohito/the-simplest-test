import React, {useContext, useState} from 'react'
import styles from "../styles/Home.module.css";
import {PowerContext} from "./MultiStep";

export default function QuestionOneLine({title, question, onInput, error}) {
    const [text, setText] = useState("")
    const power = useContext(PowerContext) || false
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
        <input disabled={power} onChange={(event) => setText(event.currentTarget.value)}/>
        <button disabled={power || text === ""} onClick={() => (onInput? onInput(text):null)}>Ввести</button>
        <p>{error}</p>
    </div>
}