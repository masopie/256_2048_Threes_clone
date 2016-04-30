describe("Do the Jasmine tests even work", function(){
  it("works", function(){
    expect(true).toEqual(true);
  });
});

// OK whew

describe("Game", function(){
  var game;
  var gameWithBoard;
  var gameWithComplexBoard;

  beforeEach(function(){
    game = new Game();
    gameWithBoard = new Game("0002000002000000")
  })

  it("exists", function(){
    var game = new Game("0020200000000000");
    expect(game).toEqual(jasmine.any(Game));
  });

  it("has a default board string", function(){
    var game = new Game();
    expect(game.board_string).toEqual("0020200000000000")
  });

  it("has 16 cell values (ie digits)", function(){
    var game = new Game();
    expect(game.board_string.length).toEqual(16)
  });

  // it("turns its board string argument into a specified board", function(){
  //   var
  // })
});
