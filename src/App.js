import './styles/App.css';
import Layout from "./components/Layout/Layout";
import RandomBirdButton from "./components/RandomBirdButton";

function App() {
  return (
    <div className="App">
      <Layout>
        <RandomBirdButton />
      </Layout>
    </div>
  );
}

export default App;
