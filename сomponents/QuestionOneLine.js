import React, {useState} from 'react'
import styles from "../styles/Home.module.css";

export default function QuestionOneLine({title, question, onInput}) {
    const [text, setText] = useState("")
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
        <input onChange={(event) => setText(event.currentTarget.value)}/>
        <button onClick={() => (onInput? onInput(text):null)}>Ввести</button>
    </div>
}