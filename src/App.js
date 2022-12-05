import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="m-auto mt-3" style={{ maxWidth: 1000 }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
