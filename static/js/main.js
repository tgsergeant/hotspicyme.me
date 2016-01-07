MEMES = [
  "/static/img/20years.gif",
  "/static/img/backstreet.gif",
  "/static/img/blake.gif",
  "/static/img/burnoutparadise.gif",
  "/static/img/callan.gif",
  "/static/img/chocolatefrosting.gif",
  "/static/img/curran.jpg",
  "/static/img/hammer1.gif",
  "/static/img/hangouts.jpg",
  "/static/img/jamesballpit.jpg",
  "/static/img/jamesfreelancer.jpg",
  "/static/img/jamespaper.jpg",
  "/static/img/jamesunimpressed.jpg",
  "/static/img/kneecappingnicky.jpg",
  "/static/img/nickyreneedance.gif",
  "/static/img/nyan.gif",
  "/static/img/octotim.gif",
  "/static/img/smeritymurder.gif",
  "/static/img/thomasmouse.jpg",
  "/static/img/timnewspaper.jpg",
  "/static/img/winkben.jpg",
  "/static/img/wrongdoing.jpg",
];

var oldMeme = -1;

$(document).ready(function() {
  ({
    selectMeme: function () {
      var meme_count = MEMES.length;
      var i;
      while (true) {
        console.log(oldMeme, i);
        i = Math.floor(Math.random() * meme_count);
        if (i != oldMeme) {
          oldMeme = i;
          break;
        }
      }
      var meme = MEMES[i];
      $(".meme-inner").html("<img class='meme-thing' src='" + meme + "' />").click(this.selectMeme);
      return false;
    },
    setup: function() {
      this.selectMeme();
      $(".another").click(this.selectMeme);
      return false;
    }
  }).setup();

});
