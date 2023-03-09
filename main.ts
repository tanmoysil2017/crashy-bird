input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
let empty0bstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != empty0bstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
