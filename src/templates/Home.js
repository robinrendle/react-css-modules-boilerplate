import React from 'react'
import Head from '../components/Head'
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
