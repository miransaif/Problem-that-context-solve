import React from "react";
import MyProvider from "./MyProvider";
import MyContext from "./Context";

const Child = () => {
  return (
    <MyContext.Consumer>
      {(anything) => (
        <div>
          <h2>CHILD: {anything}</h2>
        </div>
      )}
    </MyContext.Consumer>
  );
};

const GrandChild = () => {
  return (
    <div>
      <Child />
      <h3>Grand Child</h3>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello WOrld</h1>
      <MyProvider>
        <GrandChild />
      </MyProvider>
    </div>
  );
};

export default App;
