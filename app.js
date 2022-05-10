require("dotenv").config();

if(!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con API KEY y con TOKEN");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let boardTitle = "New Board Created Using TrelloJS";

trello.addBoard(boardTitle, process.env.TOKEN, function (error, trelloCard) {
    if (error) {
        console.log('Could not add board:', error);
    }
    else {
        console.log('Added board:', trelloCard);
    }
});