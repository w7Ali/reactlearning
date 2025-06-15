import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems }) => {
    return (
        <div className={styles['items-container']}>
            {todoItems.map(item => <TodoItem item={item.item} date={item.date} />)}
        </div>
    )
};

export default TodoItems;