import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
function App() {
  return (
    <>
    <Users name="Mike" age="12" isAdmin={true}/>
    </>
  );
}

export default App;
