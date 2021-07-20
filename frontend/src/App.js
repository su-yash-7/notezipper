import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <LandingPage />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
