import React from "react";
import Board from "./components/Board";

const App = () => {
    return (
        <div className="surface">
            <div id="board" className="board">
              <Board />
            </div>
        </div>
    );
};

export default App;
