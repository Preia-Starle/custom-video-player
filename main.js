class MyPlayer {
    playerElement = "";
    constructor(divId, width, height) {
        this.divId = divId;
        this.width = width;
        this.height = height;
    };
    load(url) {
        this.divId.innerHTML = `<video id="playerElement" src=${url} width=${this.width} height=${this.height} controls  />`;
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
        console.log(this.playerElement.volume)
        return this.playerElement.volume * 100;
    }
    toggleMute(mute) {
        mute = this.playerElement.muted ? false : true;
        console.log(mute);
        return this.playerElement.muted = mute;
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
    document.getElementById("width-value").innerHTML = player.getWidth();
    document.getElementById("height-value").innerHTML = player.getHeight();
    document.getElementById("play-button").addEventListener("click", (event) => {
        player.play();
    });
    document.getElementById("pause-button").addEventListener("click", (event) => {
        player.pause();
    });
    document.getElementById("resize-button").addEventListener("click", (event) => {
        let newWidth = document.getElementById("width-input").value;
        let newHeight = document.getElementById("height-input").value;
        player.resize(newWidth, newHeight);
        document.getElementById("width-value").innerHTML = player.getWidth();
        document.getElementById("height-value").innerHTML = player.getHeight();
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
    });
});












