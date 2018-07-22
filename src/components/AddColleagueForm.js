import { Component } from 'react'
import PropTypes from 'prop-types'

class AddColleagueForm extends Component {

  initState = {
    name: '',
    birthdate: '',
    vacationEntitlement: 20
  }

  constructor(props) {
    super(props)
    
    this.state = {...this.initState}

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(event) {
    event.preventDefault()
    this.props.onAddColleague({
      ...this.state
    })
    this.setState({
      ...this.initState
    })
    this.nameInput.focus()
  }

  handleChange({target: {name, type, value}}) {
    this.setState({
      // Convert string `value` to a number if fitting type
      [name]: type === 'number' ? +value : value
    })
  }

  render() {
    const {name, birthdate, vacationEntitlement} = this.state

    return (
      <form onSubmit={this.submit} className="form-horizontal">
        <div className="columns">
          <div className="column col-4 col-sm-12">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              autoFocus
              required
              className="form-input"
              ref={(el) => this.nameInput = el } />
          </div>
          <div className="column col-4 col-sm-12">
            <label className="form-label" htmlFor="name">Date of birth</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={birthdate}
              onChange={this.handleChange}
              required
              className="form-input" />
          </div>
          <div className="column col-4 col-sm-12">
            <label className="form-label" htmlFor="vacationEntitlement">Vacation entitlement</label>
            <input
              type="number"
              id="vacationEntitlement"
              name="vacationEntitlement"
              value={vacationEntitlement}
              onChange={this.handleChange}
              min="0"
              required
              className="form-input" />
          </div>
        </div>
        <div className="columns">
          <div className="column col-12">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    )
  }

}

AddColleagueForm.propTypes = {
  onAddColleague: PropTypes.func.isRequired
}

export default AddColleagueForm
