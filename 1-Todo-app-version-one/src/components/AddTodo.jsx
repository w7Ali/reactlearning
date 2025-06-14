const AddTodo = () => {
    return <div className="container">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter To-Do Here..." name="" id="add-to-do" />
            </div>
            <div className="col-4">
                <input type="date" name="" id="" />
            </div>
            <div className="col-2">
                <button className="btn btn-success kg-button">Add</button>
            </div>
        </div>
    </div>

}

export default AddTodo;