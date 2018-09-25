const game = require("../solution/game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$container = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
  
    // currentTarget on event
    // $square.on('click', fn)
    
      // delegate target.on event, currentTarget fn(target)
    $('.square').on('click', e =>{
      let $square = $(e.currentTarget);
      // debugger;
      if ($square.data('data-checked') === 'true') {
        alert("Can't Do that Son!");
      } else {
        console.log($square.data('data-checked'));
        const mark = this.makeMove($square);
        this.makeMark($square, mark);
        $square.data("data-checked", "true");
        console.log($square.data('data-checked'));
      }
      if (this.game.winner()){
        setTimeout(() => alert(`You won ${this.game.winner()}`), 50);
      }
    });
  }

  makeMark($square, mark){
    $square.append(`<p>${mark}</p>`);
    // $square.data("checked", true);
    let color = 'red';
    if (mark === 'x') color = 'green';
    $square.css({
      'background-color': 'white',
      'color' : color
    });
  }

  makeMove($square) {
    const mark = this.game.currentPlayer;
    this.game.playMove($square.data('pos'));
    return mark;
  }

  setupBoard() {
    const $board = $('<ul></ul>');

    $board.css({
      'display':'flex',
      'flex-wrap':'wrap',
      'flex-direction':'row',
      'width': '100%',
      'height': '100%',
      'list-style': 'none'});

    for (var i = 0; i < 9; i++) {
      const $square = $('<li class="square"></li>');
      $square.data('pos',[Math.floor(i/3),i%3]);
      $square.data('data-checked', 'false');
      $board.append($square);
    }

    const $squares = $board.children();
    this.$container.append($board);
  }
}

module.exports = View;
