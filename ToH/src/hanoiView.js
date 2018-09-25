class View {
  constructor(game, $rootEl){
    this.game = game;
    this.rootEl = $rootEl;
    this.setupTowers();
  }
  
  setupTowers(){
    for (var i = 0; i < 3; i++) {
      let tower = $('<div class="tower"><ul></ul></div>');
      this.rootEl.append(tower);
    }
    let $disc1 = $('<li id="disc1" class="disc"></li>');
    let $disc2 = $('<li id="disc2" class="disc"></li>');
    let $disc3 = $('<li id="disc3" class="disc"></li>');
    $('.tower ul').eq(0).append($disc1);
    $('.tower ul').eq(0).append($disc2);
    $('.tower ul').eq(0).append($disc3);
  }
}

module.exports = View;