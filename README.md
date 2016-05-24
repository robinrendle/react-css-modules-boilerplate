# Static React and CSS Modules

A React, Webpack and CSS Modules project that generates static markup. All markup is generated in `/build` from `/src`. If you’re interested in learning more about the inner workings of this project you can check out the tutorial on CSS-Tricks:

📕 [CSS Modules and React](https://css-tricks.com/css-modules-part-3-react/) 📕


## Getting started

Hop into the terminal:

1. `npm install`
2. `npm start`

BrowserSync will then open up a new tab where you can start to make new components and templates as you see fit. 

## Workflow

React is used in this project not to build a complex web app but instead to organise bundles of CSS and JS in order to write maintainable code and create static markup. This is what our directory structure looks like:

```
/src
  /components
    /Button
      Button.js
      styles.css
    /Title
      Title.js
      style.css
```

So in `Button.js` we create a standard React component and we import its styles so that Webpack can generate custom classnames: 

```
import React from 'react'
import btn from './styles.css'

export default class CoolButton extends React.Component {
    render(){
        return (
            <button className={btn.red}>{this.props.text}</button>
        )
    }
}
```

And then we import that React component into one of the templates, such as `src/templates/Home.js`: 

```
import React from 'react'
import CoolButton from '../components/Button/Button'

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is a home page</p>
            <CoolButton text='A super cool button'/>
        </div>
    )
  }
}
```

This way we get to generate custom classnames like CSS Modules but we also get some of the templating benefits of React.

## Issues

This is really just a proof of concept, but if you feel like there’s anything I’ve missed don’t hesitate to make an issue. 
