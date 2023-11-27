const Todo: React.FC = () => {
  const todos = [{key: Math.random() * 1000, label: 'Cozinhar'}]
  const handleRemoveTodo = (key: number) => {
    
  }
  return (
    <div>
      <h1>Lista de afazeres</h1>
      <ul>
        {todos?.map(todo => (
          <li key={todo.key}>{todo.label} | <a onClick={() => handleRemoveTodo(todo.key)}>X</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
