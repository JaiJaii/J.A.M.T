
import Login from './Login';
import Main from './main';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setLoggedIn(true);
    setUsername(loggedInUsername);


  }
    return(
      <div>
        {isLoggedIn? (
          <Main username = {username}/>
        ) : (
          <Login onLogin={handleLogin}/>
        )}
      </div>
    )
}
export default App;
