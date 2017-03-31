
import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from '../components/css/taskList.css';

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
