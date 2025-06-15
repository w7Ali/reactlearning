import styles from './App.module.css';
import Display from './components/Display';
import ButtonComponent from './components/ButtonComponent';
function App() {

  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonComponent />
    </div>
  )
}

export default App;
