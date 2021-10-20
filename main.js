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
        console.log(this.height);
        return this.height;
    };
    getWidth() {
        console.log(this.width);
        return this.width;
    };
}


window.addEventListener('DOMContentLoaded', (event) => {
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
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
    });
    document.getElementById("get-height").addEventListener("click", (event) => {
        let heightOutput = document.getElementById("height-output");
        heightOutput.innerHTML = `<td>${player.getHeight()}</td>`
    })
    document.getElementById("get-width").addEventListener("click", (event) => {
        let widthOutput = document.getElementById("width-output");
        widthOutput.innerHTML = `<td>${player.getWidth()}</td>`
    })

});












