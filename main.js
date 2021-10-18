class MyPlayer {
    constructor(divId, width, height) {
        this.divId = divId;
        this.width = width;
        this.height = height;
    }
    load(url) {
        this.divId.innerHTML = `<video src=${url} width=${this.width} height=${this.height}/>`
    };
   
};

window.onload = function() {
    const player = new MyPlayer(document.getElementById("player"), 600, 400);
    player.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
};

