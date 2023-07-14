import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import './app.css';


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<FormPage/>}/>
   </Routes>
   
   
   
   </BrowserRouter>
  
   
   
  </>
  );
}

export default App;
