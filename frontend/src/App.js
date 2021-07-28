import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateNote from './screens/CreateNote';
import SingleNote from './screens/SingleNote';
import { useState } from 'react';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Router>
        <Header setSearch={(s) => setSearch(s)} />
        <main>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/createnote" component={CreateNote} exact />
          <Route path="/note/:id" component={SingleNote} exact />
          <Route
            path="/mynotes"
            component={({ history }) => (
              <MyNotes search={search} history={history} />
            )}
          />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
