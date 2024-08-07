import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'


export function addRunning() {
  document.documentElement.classList.add('running')
  state.isRunning = true
  timer.countdown()
}

export function removeRunning() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function add5Minutes() {
  if (state.isRunning != true) {
    timer.updateDisplay(Number(minutes.textContent) + 5)    
  }
}

export function remove5Minutes() {
  if (state.isRunning != true) {
    timer.updateDisplay(Number(minutes.textContent) - 5)    
  }
}

export function setMinutes() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function setSeconds() {
  el.seconds.setAttribute('contenteditable', true)
  el.seconds.focus()
}

export function toggleForestAudio() {
  state.isMute = document.documentElement.classList.toggle("forestAudio-on")
  if(state.isMute) {
    audio.forestBg.play()
    return
  }

  audio.forestBg.pause()
}

export function toggleRainAudio() {
  state.isMute = document.documentElement.classList.toggle("rainAudio-on")
  if(state.isMute) {
    audio.rainBg.play()
    return
  }

  audio.rainBg.pause()
}

export function toggleCoffeshopAudio() {
  state.isMute = document.documentElement.classList.toggle("coffeShopAudio-on")
  if(state.isMute) {
    audio.coffeShopBg.play()
    return
  }

  audio.coffeShopBg.pause()
}

export function toggleFireplaceAudio() {
  state.isMute = document.documentElement.classList.toggle("fireplaceAudio-on")
  if(state.isMute) {
    audio.fireplaceBg.play()
    return
  }

  audio.fireplaceBg.pause()
}