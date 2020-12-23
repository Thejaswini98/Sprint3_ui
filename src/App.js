import HeaderComponent from './components/Layout/Header'
import FooterComponent from './components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DashboardComponent from './components/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddPatient from "./components/patients/AddPatient"
import store from './store';
import { Provider } from 'react-redux';
import GetPatient from "./components/patients/GetPatient";
import DeletePatient from "./components/patients/DeletePatient"

function App() {
  return (
    <Provider store={store}>
        <Router>
          <HeaderComponent />
          <Route exact path="/" component={DashboardComponent}/>
          <Route exact path="/dashboard" component={DashboardComponent}/>
          <Route exact path="/addPatient" component={AddPatient}/>
          <Route exact path="/getPatient" component={GetPatient}/>
          <Route exact path="/deletePatient" component={DeletePatient}/>
          <FooterComponent />
        </Router>
    </Provider>
  );
}

export default App;