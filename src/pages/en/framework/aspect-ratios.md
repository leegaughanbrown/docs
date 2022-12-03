---
layout: ~/layouts/MainLayout.astro
title: Aspect Ratios
description: An intro to the OxyProps Aspect Ratios properties and classes syntax.
i18nReady: true
---

## The Props

```css
  --o-ratio-square
  --o-ratio-portrait
  --o-ratio-landscape
  --o-ratio-golden
  --o-ratio-widescreen
  --o-ratio-ultrawide
```

## The Classes

```css
  o-square
  o-portrait
  o-landscape
  o-golden
  o-widescreen
  o-ultrawide
```
## Preview

<div class="aspect-demos"> 
<div style="aspect-ratio: var(--o-ratio-square)">square</div>
<div style="aspect-ratio: var(--o-ratio-portrait)">portrait</div>
<div style="aspect-ratio: var(--o-ratio-landscape)">landscape</div>
<div style="aspect-ratio: var(--o-ratio-golden)">golden</div>
<div style="aspect-ratio: var(--o-ratio-widescreen)">widescreen</div>
<div style="aspect-ratio: var(--o-ratio-ultrawide)">ultrawide</div>
</div>

