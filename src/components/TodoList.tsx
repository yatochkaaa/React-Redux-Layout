import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const TodoList: React.FC = () => {
    const {
        todos,
        page,
        limit,
        error,
        loading
    } = useTypedSelector(state => state.todo);
    const { fetchTodos, setTodoPage } = useActions();

    const pages = [ 1, 2, 3, 4, 5 ];
    
    React.useEffect(() => { 
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>    
            )}
            <div style={{ display: 'flex' }}>
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        key={p}
                        style={{ border: p === page
                            ? '2px solid green'
                            : '1px solid grey', padding: 8
                    }}>{p}</div>    
                )}
            </div>
        </div>
    );
}

export default TodoList;