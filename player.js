class MyPlayer {
    constructor(divId, height, width) {
        this.divId = divId;
        this.height = height;
        this.width = width;
    }
    load(url) {
        return this.url;
    };
    play() {

    };
    pause() {

    };
    resize(width, height) {
        return this.width 

    };
    getHeight() {
        return this.height;

    };
    getWidth() {
        return this.width;
    };
    setAutoplay(autoplay) {
        if (autoplay) {
            return play();
        }
        else {
            return false;
        }
    };
    setVolume(volume) {

    };
    getVolume() {
        return this.volume;
    };
    setMute(mute) {
        if (mute) {
            return;
        }
        else {
            return setVolume(0);
        }
    };
    getMute() {

    };
    getDuration() {

    };
    setFullscreen(fullscreen) {
        if(fullscreen) {
            return;
        }
        else {
            resize()
        }
    };
    getPlaybackState() {
        if() {
            return ("playing");
        }
        else if() {
            return ("paused");
        }
        else {
            return("ended");
        }
    };
    getViewability() {

    };
};

let player = new MyPlayer(document.getElementById("player"), 600,400);

player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");