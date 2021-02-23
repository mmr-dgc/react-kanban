import './App.css';
import ContentContainer from '../organisms/ContentContainer';
import Navbar from '../organisms/Navbar';

function App() {
  const style = {
    height: "100%",
    background: "linear-gradient(to right, #4568dc, #b06ab3"
  }

  return (
    <div className="App" style={style}>
        <Navbar />
        <ContentContainer />
    </div>
  );
}

export default App;
