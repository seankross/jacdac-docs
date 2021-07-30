import React, { createContext, ReactNode, useRef, useState } from "react"
import { ResonanceAudio } from "resonance-audio"

const VOLUME_GAIN = 0.4

export interface ToneContext {
    playTone: (
        frequency: number,
        duration: number,
        volume: number,
        position?: { dx: number; dy: number; dz: number }
    ) => void
    setVolume: (vol: number) => void
}

export interface WebAudioContextProps {
    onClickActivateAudioContext: () => void
    playTone: (
        frequency: number,
        duration: number,
        volume: number,
        position?: { dx: number; dy: number; dz: number }
    ) => void
    setVolume: (vol: number) => void
    activated: boolean
}

const WebAudioContext = createContext<WebAudioContextProps>({
    onClickActivateAudioContext: () => {},
    playTone: () => {},
    setVolume: () => {},
    activated: false,
})
WebAudioContext.displayName = "WebAudio"

export default WebAudioContext

const ROOM_DIM = 2

let _globalCtx: ToneContext
export function createToneContext(): ToneContext {
    if (_globalCtx) return _globalCtx

    try {
        console.log(`create tone context`)
        const ctx = new (window.AudioContext ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).webkitAudioContext)()

        // play silence sound within onlick to unlock it
        const buffer = ctx.createBuffer(1, 1, 22050)
        const source = ctx.createBufferSource()
        source.buffer = buffer
        source.connect(ctx.destination)
        source.start()

        // output node with volume
        const globalVolume = ctx.createGain()
        globalVolume.connect(ctx.destination)
        globalVolume.gain.value = VOLUME_GAIN

        // resonance
        const resonance = new ResonanceAudio(ctx)
        const roomDimension = {
            width: ROOM_DIM,
            heigth: ROOM_DIM,
            depth: ROOM_DIM,
        }
        const roomMaterials = {
            left: "grass",
            right: "grass",
            up: "grass",
            down: "grass",
            back: "grass",
            front: "grass",
        }
        resonance.roomDimensions(roomDimension, roomMaterials)
        resonance.output.connect(globalVolume)

        const setVolume = (v: number) => {
            if (globalVolume && !isNaN(v)) {
                globalVolume.gain.value = v * VOLUME_GAIN
            }
        }

        const playTone = (
            frequency: number,
            duration: number,
            vol: number,
            position?: { dx: number; dy: number; dz: number }
        ) => {
            if (ctx.state !== "running") {
                console.debug(`playTone on closed context`)
                return
            }
            try {
                const tone = ctx.createOscillator()
                tone.type = "sawtooth"
                tone.frequency.value = frequency // update frequency

                const volume = ctx.createGain()
                volume.gain.value = vol

                // tone -> volume
                tone.connect(volume)

                // volume -> resonance
                const resonanceSource = resonance.createSource()
                resonanceSource.setPosition(
                    position?.dx || 0,
                    position?.dy || 0,
                    position?.dz || 0
                )
                volume.connect(resonanceSource.input)

                tone.start() // start and stop
                tone.stop(ctx.currentTime + duration / 1000)
            } catch (e) {
                console.debug(e)
            }
        }

        console.log(`tone context created`)

        return (_globalCtx = {
            setVolume,
            playTone,
        })
    } catch (e) {
        return undefined
    }
}

export function WebAudioProvider(props: { children: ReactNode }) {
    const { children } = props
    const context = useRef<ToneContext>(createToneContext())
    const [activated, setActivated] = useState(!!context.current)

    // needs to be initiated in onClick on safari mobile
    const onClickActivateAudioContext = () => {
        if (context.current) return

        context.current = createToneContext()
        if (context.current) setActivated(true)
    }
    const setVolume = (volume: number) => context.current?.setVolume(volume)
    const playTone = (
        frequency: number,
        duration: number,
        volume: number,
        position?: { dx: number; dy: number; dz: number }
    ) => context.current?.playTone(frequency, duration, volume, position)

    return (
        <WebAudioContext.Provider
            value={{
                onClickActivateAudioContext,
                setVolume,
                playTone,
                activated,
            }}
        >
            {children}
        </WebAudioContext.Provider>
    )
}
