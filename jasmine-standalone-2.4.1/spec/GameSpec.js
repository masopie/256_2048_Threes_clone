describe("Do the Jasmine tests even work", function(){
  it("works", function(){
    expect(true).toEqual(true);
  });
});

// OK whew

describe("Game", function(){
  it("exists", function(){
    var game = new Game("0020200000000000");
    expect(game).toEqual(jasmine.any(Game));
  });

  it("has a default board string", function(){
    var game = new Game();
    expect(game.board_string).toEqual("0020200000000000")
  })
});
