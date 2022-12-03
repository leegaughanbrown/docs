---
layout: ~/layouts/MainLayout.astro
title: Animations
description: An intro to the OxyProps Animations properties and classes syntax.
i18nReady: true
---

OxyProps includes a set of animations available as CSS properties or utility classes.

> ⚠️ WARNING : This page contains high motion elements as it demonstrates the framework aniamtion props and classes

## The Props

This is the list of available animation props and their values.

```css
  --o-animation-fade-in
  --o-animation-fade-in-bloom
  --o-animation-fade-out
  --o-animation-fade-out-bloom
  --o-animation-scale-up
  --o-animation-scale-down
  --o-animation-slide-out-up
  --o-animation-slide-out-down
  --o-animation-slide-out-right
  --o-animation-slide-out-left
  --o-animation-slide-in-up
  --o-animation-slide-in-down
  --o-animation-slide-in-right
  --o-animation-slide-in-left
  --o-animation-shake-x
  --o-animation-shake-y
  --o-animation-spin
  --o-animation-ping
  --o-animation-blink
  --o-animation-float
  --o-animation-bounce
  --o-animation-pulse
```

## The Classes

### Modifiers
```css
o-forwards
o-reverse
```
### Blink

<img class="o-blink" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-blink
o-blink-active
o-blink-hover
```
### Bounce

<img class="o-bounce" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-bounce
o-bounce-active
o-bounce-hover
```
### Fade In

<img class="o-fade-in" style="opacity:0;animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-fade-in
o-fade-in-active
o-fade-in-hover
```
### Fade In Bloom

<img class="o-fade-in-bloom" style="opacity:0;animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-fade-in-bloom
o-fade-in-bloom-active
o-fade-in-bloom-hover
```
### Fade Out

<img class="o-fade-out" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-fade-out
o-fade-out-active
o-fade-out-hover
```
### Fade Out Bloom

<img class="o-fade-out-bloom" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-fade-out-bloom
o-fade-out-bloom-active
o-fade-out-bloom-hover
```
### Float

<img class="o-float" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-float
o-float-active
o-float-hover
```
### Ping

<img class="o-ping" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-ping
o-ping-active
o-ping-hover
```
### Pulse

<img class="o-pulse" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-pulse
o-pulse-active
o-pulse-hover
```
### Scale Down

<img class="o-scale-down" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-scale-down
o-scale-down-active
o-scale-down-hover
```
### Scale Up

<img class="o-scale-up" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-scale-up
o-scale-up-active
o-scale-up-hover
```
### Shake X

<img class="o-shake-x" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-shake-x
o-shake-x-active
o-shake-x-hover
```
### Shake Y

<img class="o-shake-y" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-shake-y
o-shake-y-active
o-shake-y-hover
```
### Slide In Down

<img class="o-slide-in-down" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-in-down
o-slide-in-down-active
o-slide-in-down-hover
```
### Slide In Left

<img class="o-slide-in-left" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-in-left
o-slide-in-left-active
o-slide-in-left-hover
```
### Slide In Right

<img class="o-slide-in-right" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-in-right
o-slide-in-right-active
o-slide-in-right-hover
```
### Slide In Up

<img class="o-slide-in-up" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-in-up
o-slide-in-up-active
o-slide-in-up-hover
```
### Slide Out Down

<img class="o-slide-out-down" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-out-down
o-slide-out-down-active
o-slide-out-down-hover
```
### Slide Out Left

<img class="o-slide-out-left" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-out-left
o-slide-out-left-active
o-slide-out-left-hover
```
### Slide Out Right

<img class="o-slide-out-right" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-out-right
o-slide-out-right-active
o-slide-out-right-hover
```
### Slide Out Up

<img class="o-slide-out-up" style="animation-iteration-count: infinite;" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-slide-out-up
o-slide-out-up-active
o-slide-out-up-hover
```
### Spin

<img class="o-spin" src="https://doodleipsum.com/150x150/avatar-2?i=b403f32a10b2a7473c695c3cc705a8ea">

```css
o-spin
o-spin-active
o-spin-hove
```
