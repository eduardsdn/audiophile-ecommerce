import Header from "./components/Header";
import AppCSS from "./styles/app.module.css";

function App() {
  return (
    <div className={AppCSS.app}>
      <Header></Header>
    </div>
  );
}

export default App;
