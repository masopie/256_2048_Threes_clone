// Constructor instead of o literal
var Game = function(newGameData) {
// Alternatively: function Game(newGameData) {

  //  Whew, been awhile since default obj params. Set board_string property to 0020200000000000
  //  Idea behind using keys here: keep default props an option while scaling
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

//  Let's make that list of keys scalable with a prototype! (THIS ENABLES DEFAULT STRING WITH CONSTRUCTOR+PROTOTYPE FORMAT)
Game.prototype.keys = {
  board_string: "0020200000000000"
};

// Game.prototype. = function () {
//
// };
