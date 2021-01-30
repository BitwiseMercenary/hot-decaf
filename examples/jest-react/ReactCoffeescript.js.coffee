React = require('react')
ReactDom = require('react-dom-factories')
createReactClass = require('create-react-class')
{div, h1} = ReactDom

Rows = createReactClass
  render: ->
    div
      className: 'col-md-12'
      "data-testid": 'example-div'
      h1
        className: 'title'
        'Rows'

export default Rows
