import Header from "./layout/Navbar";
import Outlet from "./Chemin";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
