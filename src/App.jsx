import React from 'react';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Forms/Input';

const App = () => {
  return (
    <div>
      <Header />
      <section>
        <form>
          <Input />
        </form>
      </section>
    </div>
  );
};

export default App;
