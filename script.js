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

    const getStamp = () => {
        return stamp;
    }
    return { addStamp, getStamp };
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

    const winnerDiv = document.querySelector("#winner")
    // winnerDiv.textContent= "the winner is :"

    const checkWinner = () => {
        let winner;
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            let num = 0;

            if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
                board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                winner = row[j].getStamp()
                winnerDiv.textContent = winner + " yay"
                return

            }
            for (let j = 0; j < row.length; j++) {
                if ((row[j].getStamp() === row[j + 1].getStamp()) && (row[j].getStamp() === row[j + 2].getStamp())) {
                    winner = row[j].getStamp()
                    winnerDiv.textContent = winner + " yay"
                    return
                }
                if (row[j].getStamp() === board[i + 1][j].getStamp() && board[i + 1][j].getStamp() === board[i + 2][j].getStamp()) {
                    winner = row[j].getStamp()
                    winnerDiv.textContent = winner + " yay"
                    return
                }
            }
        }
        return;
    }
    board.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            div.addEventListener("click", () => {

                if (div.textContent) return;
                div.textContent = game.getActivePlayer().stamp
                cell.addStamp(game.getActivePlayer().stamp)

                game.playRound();
                checkWinner();
                turn.textContent = game.getActivePlayer().stamp;
            })
            container.appendChild(div)
        })
    });
}
displayController()
