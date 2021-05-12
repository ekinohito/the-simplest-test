import React, {createContext, useContext} from 'react'
import styles from "../styles/Home.module.css";


export default function QuestionChoice({title, question, children, onInput, error}) {
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
            {
                children.map((value, index) => <div key={index}>
                    <input name={`${title}${question}`} type="radio" value="index"/> {value}
                </div>)
            }
        <button onClick={onInput}>Ввести</button>
        <p>{error}</p>
    </div>
}