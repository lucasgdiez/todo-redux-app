import React from 'react';
import { Todo } from './components/Todo'
 
function App() {

  return (
    <div className="App">
      <Todo onClick={() => console.log('clicked')} completed={false}  text='Hello'/>
    </div>
  );
}

export default App;
