import { Route, Routes } from 'react-router-dom';
import TasksRoute from './routes/TasksRoute';
import WelcomeRoute from './routes/WelcomeRoute';
import LoginRoute from './routes/LoginRoute';
import SignUpRoute from './routes/SignUpRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <WelcomeRoute /> } />
      <Route path="/logIn" element={ <LoginRoute /> } />
      <Route path="/signUp" element={ <SignUpRoute /> } />
      <Route path="/tasks" element={ <TasksRoute /> } />
    </Routes>
  );
}

export default App;
