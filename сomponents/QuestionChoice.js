import React from 'react'
import styles from "../styles/Home.module.css";

export default function QuestionChoice({title, question, children}) {
    return <div className={styles.card}>
        <h2>{title}</h2>
        <p>{question}</p>
        <div>
            {
                children.map((value, index) => <div key={index}>
                    <input name={`${title}${question}`} type="radio" value="index"/> {value}
                </div>)
            }
        </div>
        <button>Ввести</button>
    </div>
}