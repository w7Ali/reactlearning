import styles from "./ButtonComponent.module.css"
const ButtonComponent = () => {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.btnContainer}>
            { buttonNames.map(item =>
                <button key={item} className={styles.button}>{item}</button>)
            }
        </div>
    )
}

export default ButtonComponent;