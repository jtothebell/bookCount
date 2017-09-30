var currentBookCount = 0;
var timeoutId;
var timeoutTime = 30000;
var bookCountEndpoint = "dummyServer.php";

function getCurrentCount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                setCurrentBookCount(xhr.responseText);
            }
        }
    }
    xhr.open("GET", bookCountEndpoint);
    xhr.send();
}

function setCurrentBookCount(bookCount){
    var bookCountInt = parseInt(bookCount);
    var oldBookCount = currentBookCount;

    currentBookCount = bookCountInt;
    document.getElementById("count").textContent = bookCount;

    var oldThousand = getNumberOfThousands(oldBookCount);
    var newThousand = getNumberOfThousands(bookCountInt);
    if (newThousand > oldThousand) {
        playVideo(newThousand);
    }
}

//assume bookCount is rounded to nearest thousand here
function playVideo(bookCount) {
    var song = getSongForBookCount(bookCount);
    if (song != null) {
        var url = song.Youtube + "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1";
        if (song.StartTime && song.StartTime != 0) {
            url = url + "&amp;start=1";
        }
        var iframe = document.getElementById("ytiframe").src = url;
    }
}

function getNumberOfThousands(number) {
    return Math.floor(number/1000)*1000;
}

function setup() {
    getCurrentCount();

    timeoutId = setInterval(getCurrentCount, timeoutTime);
}

window.onload = setup;