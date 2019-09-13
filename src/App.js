import React from 'react';
import { Todo } from './components/Todo';
import { Footer } from './components/Footer';
import { AddTodo } from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
 
function App() {

  return (
    <div className="App">
      <Todo onClick={() => console.log('clicked')} completed={false}  text='Hello'/>
    </div>
  );
}

export default App;
