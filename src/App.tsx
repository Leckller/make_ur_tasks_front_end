import { Route, Routes } from 'react-router-dom';
import LoginRoute from './routes/LoginRoute';
import TasksRoute from './routes/TasksRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <LoginRoute /> } />
      <Route path="/tasks" element={ <TasksRoute /> } />
    </Routes>
  );
}

export default App;
