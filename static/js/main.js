MEMES = [
  "/static/img/20years.gif",
  "/static/img/anondrag.gif",
  "/static/img/backstreet.gif",
  "/static/img/blake.gif",
  "/static/img/boombox.gif",
  "/static/img/burnoutparadise.gif",
  "/static/img/dealwithit.gif",
  "/static/img/eyebrows.gif",
  "/static/img/callan.gif",
  "/static/img/chocolatefrosting.gif",
  "/static/img/curran.jpg",
  "/static/img/flyingtim.gif",
  "/static/img/giosolder.gif",
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
  "/static/img/secretabby.gif",
  "/static/img/smeritymurder.gif",
  "/static/img/thomasmouse.jpg",
  "/static/img/timnewspaper.jpg",
  "/static/img/winkben.jpg",
  "/static/img/wrongdoing.jpg",
  
  // NCSS 2017
  
  "/static/img/alex_ok_hand.gif",
  "/static/img/brownian.gif",
  "/static/img/dabbingintensifies.gif",
  "/static/img/horsejames.gif",
  "/static/img/jameswave.gif",
  "/static/img/nikkicrowd.gif",
  "/static/img/opendoor.gif",
  "/static/img/owendab.gif",
  "/static/img/owenpoint.gif",
  "/static/img/samdance.gif",
  "/static/img/samdoot.gif",
  "/static/img/sandrapoint.gif",
  "/static/img/smerityshuffle.gif",
  "/static/img/snake.gif",
  "/static/img/superdab.gif",
  "/static/img/timrun.gif",
  "/static/img/verysmart.gif",
  "/static/img/vrplanes.gif",
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

      // nothing to see here.
      var codes = [109, 101, 109, 101, 115];
      var pos = 0;

      document.addEventListener('keypress', function(e) {
          console.log(e);
        // grumble grumble KeyboardEvent is such a mess grumble.
        var key = e.keyCode || e.charCode;
        if (key == codes[pos]) {
          pos++;
        } else {
          pos = 0;
        }

        if (pos == codes.length) {
          document.documentElement.classList.add('extraspice');
        }
      });
      return false;
    }
  }).setup();

});
