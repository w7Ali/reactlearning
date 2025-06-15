import "bootstrap/dist/css/bootstrap.min.css"
import FoodItem from "./FoodItem"
import ErrorMessage from "./ErrorMessage"
function App() {
  let food = ['Dal','Chawal','Roti','Ghost','Pickle']

  return (
    <>
      <h1>Healthy Food</h1>

      {food.length > 0 ? (
        <ul className="list-group">
          {food.map(item => (
            <FoodItem key={item} item = {item}/>
          ))}
        </ul>
      ) : (
        <div>I'm hungry</div>
      )}
    </>
  )
}

export default App
