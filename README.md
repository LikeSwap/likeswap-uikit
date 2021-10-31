# LikeSwap UIkit

[![Version](https://img.shields.io/npm/v/@likeswaporg/uikit)](https://www.npmjs.com/package/@likeswaporg/uikit) [![Size](https://img.shields.io/bundlephobia/min/@likeswaporg/uikit)](https://www.npmjs.com/package/@likeswaporg/uikit)

LikeSwap UIkit is a set of React components and hooks used to build pages on LikeSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @likeswaporg/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@likeswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@likeswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

