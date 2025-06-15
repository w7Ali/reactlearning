import styles from "./AddTodo.module.css";
const AddTodo = () => {
    return <div className="container">
        <div className={` row ${styles['kg-row']}`}>
            <div className="col-6">
                <input type="text" placeholder="Enter To-Do Here..." name="" id={styles['add-to-do']} />
            </div>
            <div className="col-4">
                <input type="date" name="" id="" />
            </div>
            <div className="col-2">
                <button className={`btn btn-success ${styles['kg-button']}`}>Add</button>
            </div>
        </div>
    </div>

}

export default AddTodo;