import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// import components
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Onboarding from './components/pages/Onboarding';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout';
import Login from './components/pages/Login';

import store from './store/store';                              // import store
import { Provider } from 'react-redux'                          // import Provider to react and redux
import { BrowserRouter, Routes, Route } from 'react-router-dom' // import routing modules for SPA

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
