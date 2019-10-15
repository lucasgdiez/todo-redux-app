import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './reducers/index';
import { Footer } from './components/Footer';
import { AddTodo } from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const store = createStore(todoApp);
 
const App = ({ match: {params} }) => {
  console.log(params);
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer/>
    </div>
  )
}

export default App;
