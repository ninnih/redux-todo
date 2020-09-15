import React from 'react';
import './App.css';
import Form from './components/Form/Form'
import List from'./components/List/List'
import Tools from'./components/Tools/Tools'


function App() {
  return (
    <section>
      <Form />
      <List />
      <Tools />
    </section>
  );
}

export default App;
