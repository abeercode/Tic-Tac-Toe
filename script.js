


function Gameboard() {
    bored = []

    let rows = 3;
    let columns = 3

    for (let i = 0; i < rows; i++) {

        bored[i] = [];
        for (let j = 0; j < columns; j++) {
            bored[i].push(cell());
        }
    }

    const createDivs = () => {



    }
    const clearBored = () => {


    }
    const getBored = () => { return bored }
    return { getBored, clearBored }

}

function cell() {

    let stamp = 0;
    const addStamp = (player) => {
        stamp = player;
    }

    const getValue = () => {
        return value;
    }
    return { addStamp, getValue };
}


function gameController() {
    const x = "x";
    const o = "o";
    const bored = Gameboard();

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

    return { getActivePlayer, playRound };

}

function displayController() {
    const game = gameController();
    const bored = document.querySelector(".container")
    const turn = document.querySelector("#turn");

    turn.textContent = game.getActivePlayer().stamp;

}

const gamev = Gameboard()

console.log(gamev.getBored())