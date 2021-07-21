import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Route path="/" component={LandingPage} exact />
          <Route path="/mynotes" component={MyNotes} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
