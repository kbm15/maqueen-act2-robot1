basic.showIcon(IconNames.Tortoise)
for (let index = 0; index < 3; index++) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 914, 272, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
}
for (let index = 0; index < 5; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
}
basic.forever(function () {
	
})
