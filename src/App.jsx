import './App.css';
import { Routes, Route } from 'react-router-dom';

// import pages
import { LoginPage } from './pages/Login/Login';
import { ListPage } from './pages/ListPage/ListPage';

function App() {
  return (
    <div className="router">
      <main>
        <Routes>
          <Route
            exact path="/"
            element = { <LoginPage />}
            />
            <Route
            exact path="/list"
            element = {<ListPage/>}
            />
        </Routes>
      </main>
    </div>
  );
}

export default App;
