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
    setAutoplay() {
        if(this.playerElement.autoplay) {
            return;
        }
        else {
            this.playerElement.play();
        }
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
    let videoInfoTable = document.getElementById("height-width-info");
    videoInfoTable.innerHTML = `<tr><td>Width:</td><td> ${player.getWidth()} px </td></tr>
                                <tr><td>Height:</td><td> ${player.getHeight()} px </td></tr>`
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
        let videoInfoTable = document.getElementById("height-width-info");
        videoInfoTable.innerHTML = `<tr><td>Width:</td><td> ${player.getWidth()} px </td></tr>
                                    <tr><td>Height:</td><td> ${player.getHeight()} px </td></tr>`
    });
});












