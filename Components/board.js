const board = document.getElementById("board");

function Board() {
  const squares = [
    {
        row : ["", "black", "", "black", "", "black", "", "black"],
    },
    {
        row : ["black", "", "black", "", "black", "", "black", ""],
    },
    {
        row : ["", "black", "", "black", "", "black", "", "black"],
    },
    {
        row : ["black", "", "black", "", "black", "", "black", ""],
    },
    {
        row : ["", "black", "", "black", "", "black", "", "black"],
    },
    {
        row : ["black", "", "black", "", "black", "", "black", ""],
    },
    {
        row : ["", "black", "", "black", "", "black", "", "black"],
    },
    {
        row : ["black", "", "black", "", "black", "", "black", ""],
    }
  ];

  return (
    <>
      {squares.map((square) => square.row.map(box =>{
        return <div className={`square ${box}`}></div>
      }))}
    </>
  );
}

const root = ReactDOM.createRoot(board).render(<Board />);
