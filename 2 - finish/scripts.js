(function() {

	// base variables
	var container = document.getElementById('container');
	var video = document.getElementById('video-background');

	// functions
	function adapt() {
		var container_width = container.offsetWidth;
		var container_height = container.offsetHeight;

		// set the width of the video to 100%
		video.style.height = "auto";
		video.style.width = container_width + "px";

		// if, with the width, the video height is smaller than the container, we set the height to 100% and the width to auto
		// this is to emulate the "cover" value of background-size
		if(video.offsetHeight < container_height) {
			video.style.height = container_height + "px";
			video.style.width = "auto";
		}

		// center the video
		video.style.top = (((video.offsetHeight - container_height) / 2) * -1) + "px";
		video.style.left = (((video.offsetWidth - container_width) / 2) * -1) + "px";
	}

	// events
	window.addEventListener('load', adapt);
	window.addEventListener('resize', adapt);

}());