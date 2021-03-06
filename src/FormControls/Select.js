/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { PropTypes, Component } from 'react'

export class Select extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    return <input type="checkbox" className={ this.props.className } name={ this.props.name } value={ this.props.value } />
  }
}

export default Select
