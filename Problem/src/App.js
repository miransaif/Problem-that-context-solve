import React, { useState } from "react";

const GrandChild = ({ anything }) => {
  return (
    <div>
      <Child two_anything={anything} />
      <h3>GRand child</h3>
    </div>
  );
};

const Child = ({ two_anything }) => {
  return (
    <div>
      <h2>Child : {two_anything}</h2>
    </div>
  );
};

const App = () => {
  const [masla] = useState("amazon");
  return (
    <div>
      <h1>Hello WOrld</h1>

      <GrandChild anything={masla} />
    </div>
  );
};

export default App;
