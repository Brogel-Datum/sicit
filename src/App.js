import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Projections from './pages/projections/Projections';
import Treasury from './pages/treasury/Treasury';
import Income from './pages/income/Income';
import Dashboard from './pages/dashboard/Dashboard';
import BankClosure from './pages/bankClosure/BankClosure';
import Maintenance from './pages/maintenance/Maintenance';
import Collectors from './pages/maintenanceCollectors/MaintenanceCollectors';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <Navbar />
      <Switch>
        <Route type="all" exact path='/projections' component={Projections} />
        <Route type="all" exact path='/treasury' component={Treasury} />
        <Route type="all" exact path='/income' component={Income} />
        <Route type="all" exact path='/' component={Dashboard} />
        <Route type="all" exact path='/bankClosure' component={BankClosure} />
        <Route type="all" exact path='/maintenance' component={Maintenance} />
        <Route type="all" exact path='/collectors' component={Collectors} />
      </Switch>
    </>
  );
}

export default App;
