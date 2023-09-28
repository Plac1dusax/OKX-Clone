"use client"

import React, { useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiFillMinusCircle } from "react-icons/ai"
import styles from "../styles/componentStyles/question.module.css"

export default function Question(props) {
  const { question, answer, answerList } = props

  const [questionOpen, setQuestionOpen] = useState(false)

  function handleQuestionClick() {
    setQuestionOpen(!questionOpen)
  }

  return (
    <div className={styles["question-wrapper"]}>
      <div onClick={handleQuestionClick} className={styles["question-header"]}>
        {question}
        {questionOpen ? <AiFillMinusCircle /> : <AiOutlinePlusCircle />}
      </div>
      {questionOpen ? (
        <div className={styles["answer"]}>
          <div>{answer}</div>
          <ul className={styles["answer-list"]}>
            {answerList &&
              answerList.map((listItem) => {
                return listItem
              })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
