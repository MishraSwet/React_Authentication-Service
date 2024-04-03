import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/SignUp';
import { Routes,Route } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <>
    <div>App Component</div>
    <Routes>
        <Route
          path='/Login'
          element={<Login/>}
        >
        </Route>
        <Route
          path='/Signup'
          element={<Signup/>}
        >
        </Route>
      </Routes>
      </>
  );
}

export default App;