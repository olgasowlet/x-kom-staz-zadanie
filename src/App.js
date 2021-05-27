import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RegistrationForm from './features/RegistrationForm';

function App() {
  return (
    <HashRouter>
      <Route path="/screening-room">
        <div>Sala kinowa</div>
      </Route>
      <Route path="/confirmation">
        <div>Potwierdzenie rejestracji</div>
      </Route>
      <Route path="/">
        <RegistrationForm/>
      </Route>
    </HashRouter>
  );
}

export default App;
