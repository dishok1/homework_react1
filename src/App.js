import NewComponent from "./NewComponent";
import MyClassName from "./MyClassName";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{"WoW!"}</p>
        <NewComponent />
        <MyClassName />
      </header>
    </div>
  );
}

export default App;
