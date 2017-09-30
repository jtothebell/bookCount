var songs = [
	{
		"count": 3000,
		"Name": "True Survivor",
		"Artist": "David Hasselhoff",
		"Youtube": "https://www.youtube.com/embed/ZTidn2dBYbY",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 4000,
		"Name": "Welcome To the Jungle",
		"Artist": "Guns N Roses",
		"Youtube": "https://www.youtube.com/embed/o1tj2zJ2Wvg",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 5000,
		"Name": "Born to Run",
		"Artist": "Bruce Springsteen",
		"Youtube": "https://www.youtube.com/embed/IxuThNgl3YA",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 6000,
		"Name": "Thunderstruck",
		"Artist": "AC/DC",
		"Youtube": "https://www.youtube.com/embed/v2AC41dglnM",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 7000,
		"Name": "Roar",
		"Artist": "Katie Perry",
		"Youtube": "https://www.youtube.com/embed/CevxZvSJLk8",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 8000,
		"Name": "Bohemian Rhapsody",
		"Artist": "Queen",
		"Youtube": "https://www.youtube.com/embed/fJ9rUzIMcZQ",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 9000,
		"Name": "Burning Heart",
		"Artist": "Survivor",
		"Youtube": "https://www.youtube.com/embed/Kc71KZG87X4",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 10000,
		"Name": "Chatty Anthem",
		"Artist": "Laken Quigley",
		"Youtube": "https://www.youtube.com/embed/UDUzql95wrU",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 11000,
		"Name": "Kissed By A Rose",
		"Artist": "Seal",
		"Youtube": "https://www.youtube.com/embed/CWi4Wam_7nI",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 12000,
		"Name": "Kickstart My Heart",
		"Artist": "Motley Crue",
		"Youtube": "https://www.youtube.com/embed/CmXWkMlKFkI",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 13000,
		"Name": "Intergalactic",
		"Artist": "Beastie Boys",
		"Youtube": "https://www.youtube.com/embed/6TgTXYFHlfk",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 14000,
		"Name": "The Distance",
		"Artist": "Cake",
		"Youtube": "https://www.youtube.com/embed/F_HoMkkRHv8",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 15000,
		"Name": "Jump",
		"Artist": "Van Halen",
		"Youtube": "https://www.youtube.com/embed/X9RMdcFQAw",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 16000,
		"Name": "Turbulence",
		"Artist": "Steve Aoki & Laidback Luke ft. Lil Jon",
		"Youtube": "https://www.youtube.com/embed/y3OzHBEcymw",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 17000,
		"Name": "I Won't Back Down",
		"Artist": "Tom Petty and the Heartbreakers",
		"Youtube": "https://www.youtube.com/embed/nvlTJrNJ5lA",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 18000,
		"Name": "My Shot",
		"Artist": "Lin Manuel Miranda",
		"Youtube": "https://www.youtube.com/embed/VK4Wk_8PbcI",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 19000,
		"Name": "Celebration",
		"Artist": "Kool and the Gang",
		"Youtube": "https://www.youtube.com/embed/3GwjfUFyY6M",
		"StartTime": 0,
		"RunTime": 0,
	},
	{
		"count": 20000,
		"Name": "Never Gonna Give You Up",
		"Artist": "Rick Astley",
		"Youtube": "https://www.youtube.com/embed/dQw4w9WgXcQ",
		"StartTime": 0,
		"RunTime": 0,
	}
];


function getSongForCount(count) {
	for (var i = 0; i < songs.length; i++) {
		var currSong = songs[i];
		if (currSong.count === count) {
			return currSong;
		}
	}
	return null;
}