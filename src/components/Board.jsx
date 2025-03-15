import { useEffect, useState } from "react";

const Board = () => {
    const [squares, setSquares] = useState(null);

    const buildPattern = () => {
        let boxes = [];
        for (let b = 1; b <= 8; b++) {
            if (b % 2 === 0) {
                for (let i = 1; i <= 8; i++) {
                    let color = i % 2 === 0 ? "white" : "black";
                    boxes.push(color);
                }
            } else {
                for (let i = 1; i <= 8; i++) {
                    let color = i % 2 === 0 ? "black" : "white";
                    boxes.push(color);
                }
            }
        }

        return boxes;
    };

    useEffect(() => {
        setSquares(buildPattern());
    }, []);

    return (
        <>
            {(squares || []).map((square) => (
                <div key={Math.random()} className={`${square}`}></div>
            ))}
        </>
    );
};

export default Board;
