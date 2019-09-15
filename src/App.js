import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './reducers/index';
import { Footer } from './components/Footer';
import { AddTodo } from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const store = createStore(todoApp);
 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
