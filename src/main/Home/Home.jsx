import React, { useState, useRef, useEffect } from 'react';
import Style from '../../styles/Main/Home/Home.module.css';

const Home = () => {
    document.title = 'Todo';
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        const savedTodoList = JSON.parse(localStorage.getItem('todo'));
        if (savedTodoList) {
            setTodoList(savedTodoList);
        }
    }, []);

    const sendForm = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText.length > 0) {
            const newTodoList = [...todoList, inputText];
            setTodoList(newTodoList);
            localStorage.setItem('todo', JSON.stringify(newTodoList));
            inputRef.current.value = '';
        }
    };

    return (
        <main>
            <div className={Style.input}>
                <input ref={inputRef} type="text" placeholder="Введите задачу" />
                <button onClick={sendForm} type="submit">Добавить</button>
            </div>
            <div className={Style.todo_list}>
                {todoList.map((todo, index) => (
                    <div key={index}>
                        <div className={Style.todo_list_block}>
                            <div className={Style.todo_list_block__id}>
                                <p>{index + 1}</p>
                            </div>

                            <div className={Style.todo_list_block__text}>
                                <p>{todo}</p>
                            </div>

                            <div onClick={()=>{
                            const newParams = prompt('Введите новое значение');
                            if(newParams) {
                                if(newParams.length < 3) return false;
                            } else return false;
                            let todoData = newParams;

                            let todoRew = JSON.parse(localStorage.getItem('todo'));
                            todoRew[index] = todoData;

                            window.localStorage.setItem('todo', JSON.stringify(todoRew));
                            window.location.reload();



                            }} className={Style.todo_list_block__rewrite}>
                                <button><img src="./images/pictures/edit.svg" alt="edit" width="16"/></button>
                            </div>

                            
                            <div onClick={()=>{

                            let todoRew = JSON.parse(localStorage.getItem('todo'));
                            let todoData = todoRew[index].text
                            todoRew[index] = todoData;
                            todoRew.splice(index, 1);
                            window.localStorage.setItem('todo', JSON.stringify(todoRew));
                            window.location.reload();

                            }} className={Style.todo_list_block__delete}>
                            <button><img src="./images/pictures/close.svg" alt="delete" width="16"/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;