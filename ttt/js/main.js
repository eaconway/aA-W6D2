const View = require('./ttt-view.js');// require appropriate file
const Game = require("../solution/game.js");// require appropriate file

$( () => {
  $(".ttt").attr('this', 'bananas');
  const game = new Game();
  const v = new View(game, $('.ttt'));
  console.log('it works');
});
