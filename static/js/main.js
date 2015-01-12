MEMES = [
  {
    type: "img",
    url: "/static/img/curran.jpg"
  },
  {
    type: "img",
    url: "/static/img/jamespaper.jpg"
  },
  {
    type: "img",
    url: "/static/img/jamesfreelancer.jpg"
  },
  {
    type: "img",
    url: "/static/img/kneecappingnicky.jpg"
  },
  {
    type: "img",
    url: "/static/img/jamesballpit.jpg"
  },
  {
    type: "img",
    url: "/static/img/thomasmouse.jpg"
  },
]

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
      console.log(meme);
      if (meme.type == "img") {
        $(".meme-inner").html("<img src='" + meme.url + "' />");
      }
    },
    setup: function() {
      this.selectMeme();
      $(".another").click(this.selectMeme);
      return false;
    }
  }).setup();

});
