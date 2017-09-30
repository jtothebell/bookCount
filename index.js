var currentCount = 0;
var timeoutId;
var timeoutTime = 30000;
var countEndpoint = "dummyServer.php";

function getCurrentCount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                setCurrentCount(xhr.responseText);
            }
        }
    }
    xhr.open("GET", countEndpoint);
    xhr.send();
}

function setCurrentCount(count){
    var countInt = parseInt(count);
    var oldCount = currentCount;

    currentCount = countInt;
    document.getElementById("count").textContent = count;

    var oldThousand = getNumberOfThousands(oldCount);
    var newThousand = getNumberOfThousands(countInt);
    if (newThousand > oldThousand) {
        playVideo(newThousand);
    }
}

//assume count is rounded to nearest thousand here
function playVideo(count) {
    var song = getSongForCount(count);
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