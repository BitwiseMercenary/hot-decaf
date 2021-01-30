React = require('react')
ReactDOM = require('react-dom')
{div, h1} = ReactDOM
class Rows extends React.Component
  render: ->
    div
      className: 'rows'
      h1
        className: 'title'
        'Rows'
module.exports = React.createFactory Rows
