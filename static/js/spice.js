
$(document).ready(function() {
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var startRain = function () {

        // When the image of his holiness loads, show it and animate it.
        var $chilli = $('div.spice');

        // How long in ms to wait until adding another sale box.
        var interval = 800;
        var numSales = 0;

        var pageWidth = $('body').width();
        var maxSales = (pageWidth/100)
        var addSale = function() {
            console.log(maxSales)
            if (numSales >= maxSales) {
                return;
            }
            var xPos = getRandomInt(0, pageWidth);

            // Just copy the hidden box we had at page load time to make a new box.
            var newSale = $chilli.clone().show();


            newSale.css("left", xPos);
            $('body').append(newSale);

            //Only have maxSales sale boxes onscreen at once.
            if (numSales < maxSales) {
                // Add a new sale box later.
                window.setTimeout(addSale, interval);
                numSales++;
            }

        };

        // Set an interval to decrease the interval #inception
        window.setInterval(function() {
            interval = Math.max(10, interval - 10);
        }, 500);

        window.setTimeout(addSale, 2*1000);

        $(".another").click(function() {
            maxSales += 10;
        });

    };

    startRain();

});
