MEMES = [
  {
    type: "img",
    url: "/static/img/curran.jpg"
  },
]

$(document).ready(function() {
  ({
    selectMeme: function () {
      var meme_count = MEMES.length;
      var i = Math.floor(Math.random() * meme_count);
      var meme = MEMES[i];
      console.log(meme);
      if (meme.type == "img") {
        $(".meme-inner").html("<img src='" + meme.url + "' />");
      }
    },
    setup: function() {
      this.selectMeme();
      $(".another").click(this.selectMeme);
    }
  }).setup();

});
