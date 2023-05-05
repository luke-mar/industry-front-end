import './App.scss';
import UpcomingEvent from './components/UpcomingEvent/UpcomingEvent';
import { Routes, Route } from "react-router-dom";

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
