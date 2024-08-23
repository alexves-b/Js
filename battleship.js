
var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [{ locations: ["A6", "B6", "C6"], hits: ["", "", ""] },
    { locations: ["C4", "D4", "E4"], hits: ["", "", ""] },
    { locations: ["B0", "B1", "B2"], hits: ["", "", ""] }],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        var locations = ship.locations;
        var index = locations.indexOf(guess);
        if (index >= 0) {
        ship.hits[index] = "hit";
        return true;
        }
        }
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
        if (ship.hits[i] !== "hit") {
        return false;
        }
        }
        return true;
       }
}

var view = {

    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let hit = document.getElementById(location);
        hit.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        let miss = document.getElementById(location);
        miss.setAttribute("class", "miss");
    }
   };

view.displayMiss("G0");
view.displayHit("F4");
view.displayMessage("Пушечный выстрел");


