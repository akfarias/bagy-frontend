import { BrowserRouter } from "react-router-dom";
import ProjectRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  );
}

export default App;
