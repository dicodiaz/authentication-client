import { ApolloProvider } from '@apollo/client';
import { FC, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Login, Register, UserDetail } from './components/';
import { client } from './graphql/queries';
import { isLoggedIn } from './utils/auth';

const App: FC = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/detail');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/detail" element={<UserDetail />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
