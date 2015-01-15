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
  {
    type: "webm",
    url: "/static/img/ohgodwhat.webm"
  },
  {
    type: "img",
    url: "/static/img/blake.gif"
  },
  {
    type: "img",
    url: "/static/img/callan.gif"
  },
  {
    type: "img",
    url: "/static/img/octotim.gif"
  },
  {
    type: "img",
    url: "/static/img/backstreet.gif"
  },
  {
    type: "img",
    url: "/static/img/nyan.gif"
  },
  {
    type: "img",
    url: "/static/img/chocolatefrosting.gif"
  },
  {
    type: "img",
    url: "/static/img/nickyreneedance.gif"
  },
  {
    type: "img",
    url: "/static/img/smeritymurder.gif"
  },
  {
    type: "img",
    url: "/static/img/hammer1.gif"
  },
  {
    type: "img",
    url: "/static/img/20years.gif"
  },
  {
    type: "img",
    url: "/static/img/wrongdoing.jpg"
  },
  {
    type: "img",
    url: "/static/img/hangouts.jpg"
  },
  {
    type: "img",
    url: "/static/img/burnoutparadise.gif"
  }
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
        $(".meme-inner").html("<img class='meme-thing' src='" + meme.url + "' />").click(this.selectMeme);
      }

      if (meme.type == "webm") {
        $(".meme-inner").html("<video class='meme-thing' src='" + meme.url + "' autoplay loop='true'>your browser doesn't support this sweet mp4 file</video>").click(this.selectMeme);
      }
      return false;
    },
    setup: function() {
      this.selectMeme();
      $(".another").click(this.selectMeme);
      return false;
    }
  }).setup();

});
