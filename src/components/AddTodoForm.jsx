import React from 'react'
import styles from './css/todoForm.css';

let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <div className={styles.form}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input className={styles.inputField} ref={node => {
          input = node
        }} />
        <button type="submit" className={styles.addButton}>
          Add Task
        </button>
      </form>
    </div>
  )
}

// const todoForm = {
//   width: 350px,
//   border: 1px solid gray,
//   box-shadow: 1px 1px 3px #888,
//   border-top: 10px solid green,
//   min-height: 250px,
//   padding-: 10px,
//   margin: 10px
// };

export default AddTodoForm
