import { useRef } from 'react';
import Style from '../../styles/Main/Home/Home.module.css';

const Home = () => {
    document.title = 'Todo';
    const inputRef = useRef();

    let todoArray;
    const sendForm = () => {
        if(inputRef) {
            if(inputRef.current.value.length > 3) {
                const check = JSON.parse(localStorage.getItem('todo'));
                if(check !== null) todoArray = check;
                else todoArray = [];
            
                const textLS =
                {
                    text: inputRef.current.value,
                };
        
                todoArray.push(textLS);
                window.localStorage.setItem('todo', JSON.stringify(todoArray));
                JSON.parse(localStorage.getItem('todo'))
            }
        }

        inputRef.current.value = '';
    }

    const parseTodo = JSON.parse(localStorage.getItem('todo'));


    return (
        <main>
        <form>
            <div className={Style.input}>
                <input ref={inputRef} type="text" placeholder="Введите задачу"/>
                <button onClick={sendForm} type="submit">Добавить</button>
            </div>
        </form>
            <div className={Style.todo_list}>
                {parseTodo !== null ? 
                    parseTodo.map((todo, i) => (
                        <div key={i}>                            
                        <div className={Style.todo_list_block}>
                            <div className={Style.todo_list_block__id}>
                                <p>{i + 1}</p>
                            </div>

                            <div className={Style.todo_list_block__text}>
                                <p>{todo.text}</p>
                            </div>

                            <div onClick={()=>{
                            const newParams = prompt('Введите новое значение');
                            if(newParams) {
                                if(newParams.length < 3) return false;
                            } else return false;
                            let todoData = {
                                text: newParams
                            }
                            let todoRew = JSON.parse(localStorage.getItem('todo'));
                            todoRew[i] = todoData;

                            window.localStorage.setItem('todo', JSON.stringify(todoRew));
                            window.location.reload();

                            }} className={Style.todo_list_block__rewrite}>
                                <button><img src="./images/pictures/edit.svg" alt="edit" width="16"/></button>
                            </div>
                            <div onClick={()=>{

                                let todoRew = JSON.parse(localStorage.getItem('todo'));
                                let todoData = {
                                    text: todoRew[i].text
                                }
                                todoRew[i] = todoData;
                                todoRew.splice(i, 1);
                                window.localStorage.setItem('todo', JSON.stringify(todoRew));
                                window.location.reload();

                            }} className={Style.todo_list_block__delete}>
                                <button><img src="./images/pictures/close.svg" alt="delte" width="16"/></button>
                            </div>
                        </div>
                        </div>
                    ))
                : <div className={Style.noRes}><p>У вас нет текущих задач.</p></div>}
                {localStorage.getItem('todo') === '[]' &&
                    <div className={Style.noRes}><p>У вас нет текущих задач.</p></div>
                }
            </div>
        </main>
    );
};

export default Home;