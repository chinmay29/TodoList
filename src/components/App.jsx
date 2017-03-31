
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './css/taskList.css';

const App = () => (
  <div>
    <AddTodo />
    <div className={styles.taskLists}>
      <Footer />
      <VisibleTodoList />
    </div>
  </div>
)

export default App
