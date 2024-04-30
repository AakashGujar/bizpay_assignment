import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import { AppProvider } from "./Context/Context";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Home />
    </AppProvider>
  );
}

export default App;
