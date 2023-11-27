import { useRecoilValue, useSetRecoilState } from "recoil";
import { Todo as ITodo, todoListState } from "../../store/todo";
import Button from "../../components/Button";

function getInputById(id: string) {
  return document.getElementById(id) as HTMLInputElement;
}
function clearInput(input) {
  input.value = "";
}

const Todo: React.FC = () => {
  const todos = useRecoilValue(todoListState);
  const setTodos = useSetRecoilState(todoListState);

  const handleAddTodo = () => {
    const inputTitle = getInputById('title');
    const todo: ITodo = {
      key: Math.random() * 1000,
      label: inputTitle?.value || ''
    }

    setTodos(_todos => [..._todos, todo]);

    clearInput(inputTitle);
  }

  const handleRemoveTodo = (key: number) => {
    const todoRemoved = todos.filter(_todo => _todo.key !== key);

    setTodos(todoRemoved);
  }

  return (
    <div>
      <h1>Lista de afazeres</h1>
      <div>
        <input id="title" /><Button onClick={handleAddTodo}>Adicionar</Button>
      </div>
      <ul>
        {todos?.map(todo => (
          <li key={todo.key}>{todo.label} | <a onClick={() => handleRemoveTodo(todo.key)}>X</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
