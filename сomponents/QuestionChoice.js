import React, {createContext, useContext, useState} from 'react'
import styles from "../styles/Home.module.css";
import {PowerContext} from "./MultiStep";


export default function QuestionChoice({title, question, children, onInput, error}) {
    const power = useContext(PowerContext) || false
    const [valid, setValid] = useState(false)
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
            {
                children.map((value, index) => <div key={index}>
                    <input disabled={power} name={`${title}${question}`} type="radio" value="index" onClick={() => setValid(true)}/> {value}
                </div>)
            }
        <button disabled={power || !valid} onClick={onInput}>Ввести</button>
        <p>{error}</p>
    </div>
}