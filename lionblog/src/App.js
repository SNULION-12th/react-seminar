import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./routes/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* 추가 👇🏻 */}
      <HomePage />
      {/* 추가 🖕🏻 */}
      <Footer />
    </div>
  );
}

export default App;
