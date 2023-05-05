import './App.scss';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import Header from './components/Header/Header';
import UpcomingEvent from './components/UpcomingEvent/UpcomingEvent';
import { Routes, Route } from "react-router-dom";

import Poll from "./components/Poll/Poll";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<UpcomingEvent />} />
      </Routes> 

    </>

  );
}

export default App;
