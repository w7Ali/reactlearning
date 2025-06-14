import Hello from "./Hello";
import {KgButton} from "./KgButton";
import Random from "./Random";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <KgButton label="hello" />
      <Hello/>
      <Random num="1"/>
      <Random num="2"/>
      <Random num="3"/>
      <Random num="4"/>
      <Random num="5"/>
    </>
  );
}

export default App;
