import React from 'react'
class Head extends React.Component {
    render() {
        return (
            <head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href="styles.css" />
            </head>
        )
    }
}

export default Head