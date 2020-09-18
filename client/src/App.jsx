import React from 'react';
import './App.scss';
import Form from './components/Form/Form'
import List from'./components/List/List';
import Tools from'./components/Tools/Tools'

function App() {
  return (
    <section>
      <Form />
      <Tools />
      <List />
    </section>
  );
}

export default App;
