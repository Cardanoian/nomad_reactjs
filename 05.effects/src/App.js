import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // };

  // const onClick = () => setValue((prev) => prev + 1);

  // useEffect(() => {
  //   console.log("I run only once.");
  // }, []);
  // useEffect(() => {
  //   console.log("I run when 'keyword' changes.");
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("I run when 'counter' changes.");
  // }, [counter]);

  // return (
  //   <div className="App">
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type="text"
  //       placeholder="Search here...."
  //     ></input>
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>Click Me!</button>
  //   </div>
  // );
}

export default App;
