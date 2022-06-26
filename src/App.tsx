import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AppRoutes from "./components/routes/AppRoutes";
import GlobalState from "./components/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalState>
          <Layout>
            <AppRoutes />
          </Layout>
        </GlobalState>
      </BrowserRouter>
    </div>
  );
}

export default App;
