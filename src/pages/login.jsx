import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const { login } = useAuth();
   const navigate = useNavigate();
   const [username, setUsername] = React.useState('admin');
   const [password, setPassword] = React.useState('12345678');
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     await login({ username, password });
     navigate('/dashboard');
   };
 
   return (
     <div>
       <h2>Login</h2>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
         />
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit">Login</button>
       </form>
     </div>
   );
 };
 
 export default Login;