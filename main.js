var change;
        document.addEventListener("DOMContentLoaded", function() {
            var blue = document.querySelector(".blue");
            var green = document.querySelector(".green");
            var btn = document.querySelector(".btn");

            change = function () {
                if (!blue.classList.contains("slideOutLeft") && !blue.classList.contains(".slideInRight") 
                && !green.classList.contains("slideOutLeft") && !green.classList.contains(".slideInRight") ) {
                    blue.classList.add("slideOutLeft");
                    green.classList.add("slideInRight");
                    console.log("start");
                } else {
                    if(blue.classList.contains("slideOutLeft")) {
                    console.log("blue comes");
                    blue.classList.remove("slideOutLeft");
                    blue.classList.add("slideInRight");
                    green.classList.remove("slideInRight");
                    green.classList.add("slideOutLeft");
                    } else if(blue.classList.contains("slideInRight")) {
                        console.log("green comes");
                        blue.classList.remove("slideInRight");
                        blue.classList.add("slideOutLeft");
                        green.classList.remove("slideOutLeft");
                        green.classList.add("slideInRight");
                    } else {
                        console.log("Something went wrong! :(");
                    }
                }
            }

            setInterval(change, 1000 * 10);

            btn.addEventListener("click", change);

        });