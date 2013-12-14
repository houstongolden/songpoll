function playSomeSound(genre) {
	SC.get('/tracks', {
		genres: genre,
		bpm: {
			from: 100
		}
	}, function(tracks) {
		var random = Math.floor(Math.random() * 49);
		SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
	});
}

window.onload = function() {
	SC.initialize({
		client_id: 'e0a60d680d21ee1b0eb120d48f8f3976'
	});

var menuLinks = document.getElementsByClassName('genre');
for (var i = 0; i < menuLinks.length; i++) {
	var menuLink = menuLinks[i];
	menuLink.onclick = function(e) {
		e.preventDefault();
		playSomeSound(menuLink.innerHTML);
	};
  };
};