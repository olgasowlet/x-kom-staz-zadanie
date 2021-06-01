import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import RegistrationForm from './features/RegistrationForm';
import ScreeningRoom from './features/ScreeningRoom';
import SummaryView from './features/SummaryView';

function App() {
  return (
    <HashRouter>
      <Route path="/screening-room">
        <ScreeningRoom />
      </Route>
      <Route path="/confirmation">
        <SummaryView />
      </Route>
      <Route path="/">
        <RegistrationForm />
      </Route>
    </HashRouter>
  );
}

export default App;
