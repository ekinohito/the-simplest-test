import React from 'react'
import styles from "../styles/Home.module.css";

export default function Result({index}) {
    return <div className={styles.card}>
        <h2>Поздравляем!</h2>
        <h2>Тебя ждет {index} команда</h2>
    </div>
}