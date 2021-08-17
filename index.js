const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length
const locations = document.getElementsByClassName('location-item')
const progressBar = document.getElementById("progress-bar")

document.getElementById('carousel-button-prev').addEventListener("click", moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener("click", moveToNextSlide)


function moveToPrevSlide() {
    counter = 0;
    newWidth = "";
    console.log("Move to previous slide")
    slides[slidePosition].classList.remove("carousel-item-visible")
    locations[slidePosition].classList.remove("location-item-visible")
    if (slidePosition == 0) {
        slidePosition = totalSlides -1;
    }
    else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    locations[slidePosition].classList.add("location-item-visible")
}

function moveToNextSlide() {
    counter = 0;
    newWidth = "";
    console.log("Move to next slide")
    slides[slidePosition].classList.remove("carousel-item-visible")
    locations[slidePosition].classList.remove("location-item-visible")
    if (slidePosition == totalSlides -1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    locations[slidePosition].classList.add("location-item-visible")
}


/* Advanced Task: Move automatically to the next slide after a certain time */
// DONE:
//let autoChange = setInterval(function(){moveToNextSlide()},5000);    FIRST USED OUTSIDE, BUT LATER MOVED INSIDE increaseProgressBar() to sync img Change with progress bar
increaseProgressBar();


/* Advanced Task: Add bar that indicates time before slides switch automatically */

let counter = 0;
let newWidth = "";

function increaseProgressBar() {
    console.log("started progressbar");
    let interval = setInterval(function() {
        counter++;
        newWidth = counter + "%";
        if (counter < 100) {
            drawProgress();
        }
        else {
            console.log("progress finished");
            // clearInterval(interval);  -> ACTIVATE FOR ONE-TIME-INTERVAL
            counter = 0;
            drawProgress()
            moveToNextSlide()
        }
    }, 50);


    function drawProgress() {
//        console.log(`new Width ${counter}`)
        progressBar.style.width = newWidth;
    }
}

/* Advanced Task: RESET automatic change when Buttons were pressed
SOLUTION for progress bar:
    moved those 2 lines out of function scope:
        let counter = 0;
        let newWidth = "";

    Added those 2 lines to the "move..."-functions:
        counter = 0;
        newWidth = "";

*/