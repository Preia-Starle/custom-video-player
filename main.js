class MyPlayer {
    playerElement = "";
    constructor(divId, width, height) {
        this.divId = divId;
        this.width = width;
        this.height = height;
    };
    load(url) {
        this.divId.innerHTML = `<video id="playerElement" src=${url} width=${this.width} height=${this.height}>`;
        this.playerElement = document.getElementById("playerElement");
    };
    play() {
        if (this.playerElement) {
            return this.playerElement.play();
        }
        else {
            return console.log("no video to play");
        }
    };
    pause() {
        if (this.playerElement) {
            return this.playerElement.pause();
        }
        else {
            return console.log("no video to pause");
        }
    };
    resize(width, height) {
        this.playerElement.setAttribute("width", width);
        this.playerElement.setAttribute("height", height);
    };
    getHeight() {
        console.log(this.playerElement.height);
        return this.playerElement.height;
    };
    getWidth() {
        console.log(this.playerElement.width);
        return this.playerElement.width;
    };
    toggleAutoplay(autoplay) {
        autoplay = this.playerElement.autoplay ? false : true;
        console.log(autoplay);
        this.playerElement.load();
        return this.playerElement.autoplay = autoplay;
    }
    setVolume(volume) {
        this.playerElement.volume = volume / 100;
        console.log("after" + this.playerElement.volume);
    }
    getVolume() {
        console.log(this.playerElement.volume);
        return Math.round(this.playerElement.volume * 100);
    }
    toggleMute(mute) {
        mute = this.playerElement.muted ? false : true;
        console.log(mute);
        return this.playerElement.muted = mute;
    }
    getMute() {
        console.log(this.playerElement.muted);
        return this.playerElement.muted;
    }
    getDuration() {
        console.log(this.playerElement.duration);
        return this.playerElement.duration;
    }
    setFullscreen(fullscreen) {
        fullscreen = this.playerElement.fulscreen ? false : true;
        console.log(fullscreen);
        return this.playerElement.requestFullscreen()
    }
    getPlaybackState() {
        if (this.playerElement.paused) {
            console.log("video is paused");
            return "paused";
        }
    }
    getViewability(entries) {
        entries.forEach((entry) => {
            let viewabilityRatio = (Math.floor(entry.intersectionRatio * 100));
            document.getElementById("player-viewability").innerHTML = viewabilityRatio + "%";
        })
    }
}


window.addEventListener("DOMContentLoaded", (event) => {
    url = "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load(url);
    loadPlayerInfo();
    loadPlayerControls();

    function loadPlayerInfo() {
        player.playerElement.onloadedmetadata = () => {
            document.getElementById("width-value").innerHTML = player.getWidth() + " " + "px";
            document.getElementById("height-value").innerHTML = player.getHeight() + " " + "px";
            document.getElementById("duration").innerHTML = player.getDuration() + " " + "sec";
            document.getElementById("mute-state").innerHTML = player.getMute();
            document.getElementById("playback-state").innerHTML = player.getPlaybackState();
            let options = {
                root: null,
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            }
            let observer = new IntersectionObserver(player.getViewability, options);
            let target = this.playerElement;
            observer.observe(target);
        }
    }

    function loadPlayerControls() {
        document.getElementById("play-button").addEventListener("click", (event) => {
            player.play();
        });
        document.getElementById("pause-button").addEventListener("click", (event) => {
            player.pause();
            document.getElementById("playback-state").innerHTML = player.getPlaybackState();
        });
        document.getElementById("resize-button").addEventListener("click", (event) => {
            let newWidth = document.getElementById("width-input").value;
            let newHeight = document.getElementById("height-input").value;
            player.resize(newWidth, newHeight);
            document.getElementById("width-value").innerHTML = player.getWidth() + " " + "px";
            document.getElementById("height-value").innerHTML = player.getHeight() + " " + "px";
        });
        document.getElementById("autoplay-toggle").addEventListener("click", (event) => {
            player.toggleAutoplay();
        });
        document.getElementById("volume-slider").addEventListener("change", (event) => {
            player.setVolume(document.getElementById("volume-slider").value);
            document.getElementById("current-volume").innerHTML = player.getVolume();
        });
        document.getElementById("mute-toggle").addEventListener("click", (event) => {
            player.toggleMute();
            document.getElementById("mute-state").innerHTML = player.getMute();
        });
        document.getElementById("set-fullscreen").addEventListener("click", (event) => {
            player.setFullscreen();
        });
        player.playerElement.addEventListener("playing", (event) => {
            console.log("video is playing");
            document.getElementById("playback-state").innerHTML = "playing";
        });
        player.playerElement.addEventListener("ended", (event) => {
            console.log("video ended");
            document.getElementById("playback-state").innerHTML = "ended";
        });
    }
});