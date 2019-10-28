import * as PIXI from 'pixi.js';
import * as Colyseus from "colyseus.js";

const loader = PIXI.Loader.shared;

let app = new PIXI.Application({
    width: 1290,
    height: 720,
    antialias: true,
    transparent: false,
    resolution: 1,
});

var client = new Colyseus.Client('ws://localhost:8081');
client.joinOrCreate('standard', {}).then(room => {
    console.log("joined room: ", room.name)
}).catch(e => {
    console.log("join error", e)
});


document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x56BB56;

const cardSuites = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K"]
const cardTextures = ["img/cardBack.png", "img/cardJoker.png"];


cardSuites.forEach(suite => {
    cardNumbers.forEach(num => {
        cardTextures.push("img/card" + suite + num + ".png");
    })
})

const main = () => {
    let testSprite = new PIXI.Sprite(loader.resources[cardTextures[0]].texture)
    app.stage.addChild(testSprite);
}

loader.add(cardTextures).load(main);
