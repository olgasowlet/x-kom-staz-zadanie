import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RegistrationForm from './features/RegistrationForm';
import ScreeningRoom from './features/ScreeningRoom';

function App() {
  return (
    <HashRouter>
      <Route path="/screening-room">
        <ScreeningRoom />
      </Route>
      <Route path="/confirmation">
        <div>Potwierdzenie rejestracji</div>
      </Route>
      <Route path="/">
        <RegistrationForm />
      </Route>
    </HashRouter>
  );
}

export default App;
