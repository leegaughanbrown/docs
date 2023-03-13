---
layout: ~/layouts/MainLayout.astro
title: Plugin Settings
description: Set up your OxyProps plugin form the WordPress dashboard.
i18nReady: true
---

Customize your OxyProps plugin to improve the Oxygen developer experience and unlock new features.

In your OxyProps dashboard, you will find 3 main areas: Color Selection, Builder Features, Utility Stylesheets.

## Color Selection

### Defaults

By default, OxyProps applies preset values to your 4 logical colors : Canvas, Brand, Links, Visited.

- **Canvas** is the color swatch used by default for your backgrounds and texts. It is intended to be the neutral color for your site.
- **Brand** is intended to use as your brand color. It is intended to be the Primary color for your site.
- **Links** is the color swatch used by default for your text links and buttons. It is intended to be the Action color for your site.
- **Visited** is the color swatch used by default for your visited links. But use in in any way you want!

> 🎓 Learn more about [OxyProps colors](/en/framework/colors/) in our Framework guide.

### Pick from OxyProps colors

Oxyprops offers a choice of 9 neutral color swatches and 18 named color swatches.

To apply one of the presets to a logical color, simply select it by clicking the radio button next to its name, and click `Save Changes`.

> ☝️ The sample you see on the screen in the dashboard is the reference shade for the color, which is shade 5. The full color swatch includes 11 shades in total. 5 from the reference color to white (4 -> 0) and 5 from the reference color to black (6 -> 10).

When you select a color, the full color swatch with the 11 shades is visible in the Samples area for each of the logical colors.

### Set your custom colors

When you want full control over your design, you can set a reference color for each of the logical colors.

- Click on the square color-picker next to the `Custom` label.
- Choose the exact color you want. Depending on your OS and browser, the color picker may look different, but it should allow you to select a color as a `#hex code`, a `rgb()`, a `hsl()`.
- Make sure you select the radio buton next to the `Custom` label.
- Click the `Save Changes` button.

> ☝️ When you define a custom color, you define the reference shade for the color, which is shade 5. OxyProps will generate the full color swatch with 11 shades in total, by spreading evenly 5 shades from the reference color to "nearly white" ( shades 4 -> 0) and 5 from the reference color to "nearly black" (shades 6 -> 10).

This means that if your reference color has a lightness component close to 50%, the eleven shades will spread evenly from white to black.

If your reference color has a lightness component < 50%, the darker shades will closer to each other than the lighter shades.

If your reference color has a lightness component > 50%, the lighter shades will closer to each other than the darker shades.

You can check the 11 shades for your custom color in the Samples area for each of the logical colors.

### Check various color modes

The dashboard is equipped with a color schemes switcher so you can easily see what your color selection looks like under various color schemes, especially light and dark modes.

## Builder Features

OxyProps includes in-builder features to simplify your life as a developer. Some of them are enabled by default, some are not. Let's have a look.

### OxyProps Context Menu (active by default)

When you are in Oxygen editor, and want to style an element, you have access to countless input fields from the element Primary and Advanced panels.

OxyProps Context Menu equips (nearly) every Oxygen input field with a props panel accessible from a right click in the input fields that suggests relevant framework properties or values for this specific field.

> 🎛 Learn more about [OxyProps context menu](/en/features/context-menu/) in our Features guide.

- No need to remember exactly the framework syntax to use it.
- No need to search on a framework cheatsheet.
- no need to type the full `var()` function around a long property name.

It requires only :
- One right click to open the menu,
- One left click on your choice to populate instantly the input field value and the associated unit.

### OxyProps Elements (active by default)

OxyProps has a limited (for now) library of custom elements:
- A standard light/dark toggle
- A customizable light/dark toggle
- A color schemes switcher

> 🛠 Learn more about [OxyProps elements](/en/features/custom-elements/) in our Features guide.

When active, this option adds to the Oxygen editor Plus menu an OxyProps section to select from OxyProps elements.

### Replace Global Settings (inactive by default)

If you activate this option, OxyProps will replace your current Oxygen global settings with predefined settings from the OxyProps framework library.
- Fonts will be set to `--o-font-sans`,
- Headings text colors will be set to `--o-text-1`,
- Body text color will be set to `--o-text-2`,
- Heading sizes will be set to `--o-font-size-fluid-{X}`,
- etc.

> ⚙️ Learn more about [OxyProps global settings](/en/features/global-settings/) in our Features guide.

As this will erase your previous settings, this is not activated by default. If you want to use it, click the checkbox, click the `Save Changes` button, and then you can open Oxygen and look at your new global settings.

### Global color sets (active by default)

This option will add 3 colors sets to Oxygen gloabl colors:
- `OP Logical Colors` with all logical colors.
- `OP Custom Palette` with all your custom colors.
- `OP Color Palette` with all preset colors.

> 🎨 Learn more about [OxyProps global colors](/en/features/global-colors/) in our Features guide.

You can delete these color sets:
- Uncheck the option in your plugin dashboard,
- Click the `Save Changes` button,
- Open Oxygen editor,
- Navigate to Global Settings -> Global Styles -> Colors,
- Select the Color Set you want to delete,
- Click on the `trash bin` 🗑 button.

> ⚠️ After deleting the color sets, you can activate again the option, and OxyProps will recreate the Color Sets.
>
> BUT : Oxygen will register the colors with new IDs, so if you used them in the past, they will NOT be linked again.

### OxyProps Normalize (active by default)

In addition to global settings, you can activate OxyProps with the Normalize stylesheet.

Normalize is an opinionated stylesheet that uses the framework styles for all HTML elements, and is adaptive to light and dark modes.

> ⚙️ Learn more about [OxyProps normalize](/en/framework/normalize/) in our Framework guide.

Using normalize results in colors that adapt to the users system theme preference automatically.

The brand color is used sparingly, in the HTML elements. The link color is useful for buttons and other custom components you want to have consistent interactive text for.

### Custom Schemes stylesheet (inactive by default)

When you activate this option, OxyProps will create an OxyProps folder in Oxygen Editor stylesheets.

Inside this folder, it will create an OxyPropsTheme stylesheet.

By default, all code in the stylesheet is commented, so it is inactive.

In this stylesheet, you can redefine each of the logical colors for each color scheme with the exact value you want to apply, allowing you to achieve a completely custom design for your website.

> 📃 Learn more about [OxyProps custom stylesheet](/en/features/stylesheets/) in our Framework guide.

## Utility Stylesheets

In order to optimize you page load speed, you may want to have control over which part of the framework you want to load depending on your use case. Why load all gradients or layers classes if you never use them, right ?

In this section, you can select which par of the framework you want loaded in the builder and on your site front-end.

> ☝️ This option is about **utility classes** stylesheets. The framework css custom properties will always be loaded, even if no option is selected here.

### All of them! (active by default)

This option will load all utility classes in a single file and make them available in Oxygen Editor and on your site front-end.

### Pick your own (inactive by default)

Select the categories you want to use, click `Save Changes`and you are good to go!
