import './App.scss';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import Header from './components/Header/Header';
import UpcomingEvent from './components/UpcomingEvent/UpcomingEvent';
import { Routes, Route } from "react-router-dom";

import Poll from "./components/Poll/Poll";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<UpcomingEvent />} />
        <Route path="/review" element={<EmployeeForm />} />
      </Routes> 

    </>

  );
}

export default App;
