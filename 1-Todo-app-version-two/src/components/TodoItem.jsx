import styles from "./TodoItem.module.css"
const TodoItem = ({ item, date }) => {
    return <div className="container">
        <div className={`row ${styles['kg-row']}`}>
            <div className="col-6">
                {item}
            </div>
            <div className="col-4">
                {date}
            </div>
            <div className="col-2">
                <button className={`btn btn-danger ${styles['kg-button']}`}>Delete</button>
            </div>
        </div>
    </div>
}

export default TodoItem;