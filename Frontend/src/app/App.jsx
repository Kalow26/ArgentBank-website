import { RouterProvider } from "react-router-dom";
import { Router } from "../routes/Router";
import "../app/index.css"


function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
