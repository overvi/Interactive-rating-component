import { createBrowserRouter } from "react-router-dom";
import SelectPage from "../pages/SelectPage";
import ResultsPage from "../pages/ResultsPage";


const MyRouter = () => {
    const router = createBrowserRouter([
      {path : '/' , element : <SelectPage />},
      {path : '/results' , element:  <ResultsPage />}
    ]);
  
    return router;
  }
  
  export default MyRouter