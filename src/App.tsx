import "./App.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div>
      <UserList />
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
