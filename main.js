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
        if(this.playerElement) {
            return this.playerElement.play();
    }
    else {
        return console.log("no video to play");
    }

};
    pause() {
        if(this.playerElement) {
        return this.playerElement.pause();          
    }
    else {
        return console.log("no video to pause");
    }
    };
}


window.addEventListener('DOMContentLoaded', (event) => {
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
    document.getElementById('play-button').addEventListener('click', (event) => {
        player.play();
    });
    document.getElementById('pause-button').addEventListener('click', (event) => {
        player.pause();
    })
});









