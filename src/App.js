import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import './app.css';
import SuccessPage from "./pages/SuccessPage";


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<FormPage/>}/>
    <Route exact path="/success" element={<SuccessPage/>}/>
   </Routes>
   
   
   
   </BrowserRouter>
  
   
   
  </>
  );
}

export default App;
