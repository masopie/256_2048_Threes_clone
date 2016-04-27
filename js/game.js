// function Game(newGameData) {
var Game = function(newGameData) {

  //  Whew, been awhile since default obj params. Set board_string property to 0020200000000000
  //  Idea behind using keys here seems to be to keep default props an option while you scale
  var keys = this.keys,
      data = newGameData || {},
      key

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      } else {
        this[key] = keys[key];
      }
    }
  }
};

Game.prototype.keys = {
  board_string: "0020200000000000"
};
