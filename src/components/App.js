import React, { useState } from "react";

const App = () => {
  const [version] = useState(1);

  return (
    <div>
      <h1>{`gil's boilerplate ${version}`}</h1>
    </div>
  );
};

export default App;
