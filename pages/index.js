import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QuestionOneLine from "../сomponents/QuestionOneLine";
import QuestionChoice from "../сomponents/QuestionChoice";
import data from "../data.json"
import {useState} from "react";
import MultiStep from "../сomponents/MultiStep";
import Result from "../сomponents/Result";

const uniform = (s) =>
    s.toLowerCase().replace("ё", "е")

export default function Home() {
  const [final, setFinal] = useState(null);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const onNameInput = (name) => {
    const variants = data.filter((value) => uniform(value["ФИО"]) === uniform(name.toLowerCase()))
    if (variants.length < 1) {
      if (final) {
        setError(`Ты не найден, записываем тебя как ${final["ФИО"]}`)
      } else {
        setError("Ты не найден, попробуй еще раз")
      }
    } else {
      setError(null)
      setFinal(variants[0])
      setStep((step) => Math.max(step, 2))
    }
  }
  const onQuestionAnswer = (x) => () => {
    setStep((step) => Math.max(x, step))
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Тест на группу</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Добро пожаловать на выезд Art Club BMSTU!
        </h3>

        <p className={styles.description}>
          Этот тест поможет распределить тебя в команду!
        </p>

        <div className={styles.grid}>
          <MultiStep step={step} power={step > 10}>
            <QuestionOneLine title="Первый вопрос" question="Твои ФИО" onInput={onNameInput} error={error}/>
            <QuestionOneLine title="Второй вопрос" question="Твой номер телефона" onInput={onQuestionAnswer(3)}/>
            <QuestionOneLine title="Третий вопрос" question="Номер твоей группы" onInput={onQuestionAnswer(4)}/>
            <QuestionOneLine title="Четвертый вопрос" question="Какой у тебя цвет глаз?" onInput={onQuestionAnswer(5)}/>
            <QuestionChoice title="Пятый вопрос" question="Дружба или соперничество?" onInput={onQuestionAnswer(6)}>
              <span>Дружба</span>
              <span>Соперничество</span>
            </QuestionChoice>
            <QuestionOneLine title="Шестой вопрос" question="Какие 3 предмета ты бы взял с собой на выезд?" onInput={onQuestionAnswer(7)}/>
            <QuestionOneLine title="Седьмой вопрос" question="Опиши себя одним прилагательным" onInput={onQuestionAnswer(8)}/>
            <QuestionChoice title="Восьмой вопрос" question="Какой ты сегодня?" onInput={onQuestionAnswer(9)}>
              <span>Меланхоличный козер</span>
              <span>Дышащий творчеством артклабовец</span>
              <span>А ты?</span>
              <span>Латентный прогульщик</span>
            </QuestionChoice>
            <QuestionChoice title="Девятый вопрос" question="Для тебя страх — это преграда или мотивация?" onInput={onQuestionAnswer(10)}>
              <span>Преграда</span>
              <span>Мотивация</span>
            </QuestionChoice>
            <QuestionOneLine title="Десятый вопрос" question={"Продолжи фразу: \"Мир станет лучше, если...\""} onInput={onQuestionAnswer(11)}/>
            <Result index={final?final["КОМАНДА"]:null}/>
          </MultiStep>

        </div>
      </main>
    </div>
  )
}
