# Actividad 2 Robot 4
```template
basic.showIcon(IconNames.Tortoise)
for (let index = 0; index < 3; index++) {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    914,
    272,
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
}
for (let index = 0; index < 5; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
}
basic.forever(function () {
	
})

```
## ~avatar avatar

Nuestro problema se resuelve utilizando el bloque de entrada, que permite ejecutar una instruccion al oir un sonido fuerte


## Paso 2

Arrastramos el bloque detectar sonido de la seccion entrada.
```block 
input.onSound(DetectedSound.Loud, function () {})
```

## Paso 3
Colocamos el codigo del bloque 'repetir' dentro del bloque 'detectar sonido'.
```block 
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 3; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
    }
})
```