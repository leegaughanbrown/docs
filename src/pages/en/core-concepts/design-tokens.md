---
layout: ~/layouts/MainLayout.astro
title: Design tokens
description: What are design tokens and why use them?
i18nReady: true
---
Design tokens are design choices that ensure consistent, unified and cohesive user experiences accross your website.

## What are Design Tokens?

Design tokens are all the values needed to construct and maintain your design system:
- spacing,
- color,
- typography,
- object styles,
- animations,
- etc.

stored as data with a human readable name.

They can represent anything defined by design: a `color` as a `rgb()` value, an `opacity` as a number, an `animation ease` as Bezier coordinates. They are used in place of hard-coded values in order to ensure flexibility, maintainability and unity across your website.

Design tokens are directly integrated in OxyProps and are available as CSS custom properties or utility classes. They cover the various options of dimensions and scales, color schemes, component states, and more.

## Different types of design tokens

There are multiple levels of design tokens from the most generic to the most specific.

### Global design tokens

Global design tokens are the primitive values in the design system, represented by context-agnostic names. OxyProps color palettes, animations, typography, and sizes values are all recorded as global design tokens.

They can be directly used, and are inherited by all other token types.

In this example, the `hsl()` function with the parameters defining the base indigo color is stored in a human readable [css custom property](/en/core-concepts/css-custom-properties/) as a global design token.

```css
html {
    --o-indigo-5: hsl(239deg, 84%, 67%);
}
```

They are very handy to store complex data and make it available in an easy way:

```css
html {
    --o-shadow-6:0 -1px 2px 0 hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 2%)),
                 0 3px 2px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 3%)),
                 0 7px 5px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 3%)),
                 0 12px 10px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 4%)),
                 0 22px 18px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 5%)),
                 0 41px 33px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 6%)),
                 0 100px 80px -2px hsl(var(--o-shadow-color)/calc(var(--o-shadow-strength) + 7%));
}
```

### Alias design tokens

Alias design tokens relate to a specific context.

Aliases are created to communicate the intended purpose of a token, and are effective when a value with a single intent will appear in multiple places.

In the OxyProps color system, logical colors are good examples of alias design tokens.

In this example, `--o-surface-1` intent is to define the background color of an element with the lowest elevation. The page background for example.

```css
html {
    --o-surface-1: var(--o-slate-0);
}
@media (prefers-color-scheme: dark) {
    html {
        --o-surface-1: var(--o-slate-10);
    }
}
```
 The developer can use the prop `--o-surface-1` for setting the background color. The prop value, the actual color, will adjust automatically based on the user preference for light or dark mode.

### Component-specific design tokens

Component-specific tokens are an exhaustive representation of every value associated with a component. They often inherit from alias tokens, but are named in a way that allows developpers to be as specific as possible in applying design tokens in a component (in a custom class for example).

In the example, the `--o-btn-border-color` is a component specific design token. It is set to the `--o-links` alias design token which, itself, can be set to a global token like `--o-lime-3` depending on the context.

```css
html {
    --o-btn-border-color: var(--o-links);
}
```
