import styles from "./FoodItem.module.css"
const FoodItem = ({item}) => {
    // return <li className={`${styles.newItem} list-group-item`}>{item}</li>
    return <li className={`${styles.newitem} list-group-item`}>{item}</li>

    return <li className={`${styles['new-item']} list-group-item`}>{item}</li>


}

export default FoodItem;