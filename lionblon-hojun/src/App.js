import "./App.css";
import Footer from "./compoents/Footer";
import Header from "./compoents/Header";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
