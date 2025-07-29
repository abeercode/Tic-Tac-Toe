function Gameboard() {
    let board = []

    let rows = 3;
    let columns = 3

    for (let i = 0; i < rows; i++) {

        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(cell());
        }
    }

    const createDivs = () => {



    }
    const clearBoard = () => {


    }
    const getBoard = () => { return board }
    return { getBoard, clearBoard }

}

function cell() {

    let stamp = 0;
    const addStamp = (player) => {
        stamp = player;
    }

    const getValue = () => {
        return stamp;
    }
    return { addStamp, getValue };
}


function gameController() {
    const x = "x";
    const o = "o";
    const board = Gameboard();

    const player = [{ name: x, stamp: "x" }, { name: o, stamp: o }];

    let activePlayer = player[0];

    const switchPlayerTurn = () => {
        if (activePlayer === player[0]) {
            activePlayer = player[1]
        }
        else {
            activePlayer = player[0];
        }
    }

    const getActivePlayer = () => activePlayer;

    const playRound = () => {

        switchPlayerTurn();
    }

    return { getActivePlayer, playRound, getBoard: board.getBoard };

}

function displayController() {
    const game = gameController();
    const container = document.querySelector(".container")
    const turn = document.querySelector("#turn");
    turn.textContent = game.getActivePlayer().stamp;
    const board = game.getBoard();


    board.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            div.addEventListener("click", () => {

                if (div.textContent) return;
                div.textContent = game.getActivePlayer().stamp
                game.playRound();
                turn.textContent = game.getActivePlayer().stamp;
            })
            container.appendChild(div)
        })
    });
}
displayController()
