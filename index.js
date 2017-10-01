var currentCount = 0;
var timeoutId;
var songs;

function getCurrentCount() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                setCurrentCount(xhr.responseText);
            }
        }
    }
    xhr.open("GET", config.countEndpointUrl);
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
        var url = song.Youtube + "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;vq=tiny";
        if (song.StartTime && song.StartTime != 0) {
            url = url + "&amp;start=1";
        }
        var iframe = document.getElementById("ytiframe").src = url;
    }
}

function getSongForCount(count) {
	for (var i = 0; i < songs.length; i++) {
		var currSong = songs[i];
		if (currSong.count === count) {
			return currSong;
		}
	}
	return null;
}

function getNumberOfThousands(number) {
    return Math.floor(number/1000)*1000;
}

function setup() {
    getSongsList();
}

function getSongsList() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var resp = JSON.parse(xhr.response);
                if (resp && resp.songs && resp.songs.length > 0) {
                    songs = resp.songs;
                    getCurrentCount();
                    
                    timeoutId = setInterval(getCurrentCount, config.intervalTime);
                }
            }
        }
    }
    xhr.open("GET", config.songList);
    xhr.send();
}

window.onload = setup;