
let createGameBoard = (function() {
    'use strict';
    
    let gameGrid = [];
    const grid = document.getElementById("game-grid");

    const drawGrid = function () {
        let counter = 0;
            for (let i = 0; i < 9; i++) {
                const gridCell = document.createElement("div");
                gridCell.id = "grid-${counter}";
                counter++;
                gameGrid.push(gridCell);
                grid.appendChild(gridCell);
            }
    }
})();


