function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        //const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index, 1); //remove one item from de list
        setTodos(temp);
    }
    
    return (
        <div className="app">
            <div className="todo-list"></div>
                    {todos.map((todo,i) => 
                    <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
            <TodoForm addTodo={addTodo}/>
        </div>
    );

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)