function Hello() {
  let myName = 'Wahid Ali';

  let myfun = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let msg = `Time: ${hours}:${minutes}, Date: ${day}/${month}/${year}`;
    return msg;
  };

  return <h1>Hello my name is {myName}<br />{myfun()}</h1>;
}

export default Hello;
