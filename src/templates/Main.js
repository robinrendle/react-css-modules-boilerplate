import React from 'react'
import Head from '../components/Head'

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules'/>
        <body>
            {this.props.children}
        </body>
      </html>
    )
  }
}