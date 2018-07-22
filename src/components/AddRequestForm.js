import PropTypes from 'prop-types'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AddRequestForm extends Component {

  initState = {
    startDate: '',
    endDate: ''
  }

  constructor(props) {
    super(props)
    
    this.state = {
      colleagueId: '',
      ...this.initState
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(event) {
    event.preventDefault()
    this.props.onAddRequest({
      ...this.state
    })
    this.setState({
      ...this.initState
    })
  }

  handleChange({target: {name, value}}) {
    this.setState({
      [name]: value
    })
  }

  render() {
    const {colleagueId, startDate, endDate} = this.state
    const {colleagues, vacationRemaining} = this.props

    return (
      <form onSubmit={this.submit} className="form-horizontal">
        {colleagues.length === 0 &&
          <div className="columns">
            <div className="column col-12">
              <div className="empty">
                <div className="empty-icon">
                  <i className="icon icon-3x icon-people"></i>
                </div>
                <p className="empty-title h5">There are no colleagues who could file a request</p>
                <p className="empty-subtitle">Go ahead and <NavLink to="/colleagues">add a new colleague</NavLink>.</p>
              </div>
            </div>
          </div>
        }
        {colleagues.length > 0 &&
          <div className="columns">
            <div className="column col-4 col-sm-12">
              <label className="form-label" htmlFor="colleagueId">Colleague</label>
              <select
                name="colleagueId"
                id="colleagueId"
                value={colleagueId}
                onChange={this.handleChange}
                className="form-select"
                required
              >
                <option value="">Select your name:</option>
                {colleagues.map((colleague) =>
                  <option value={colleague.id} key={colleague.id}>{colleague.name}</option>
                )}
              </select>
            </div>
            <div className="column col-4 col-sm-12">
              <label className="form-label" htmlFor="startDate">Start date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={this.handleChange}
                required
                className="form-input" />
            </div>
            <div className="column col-4 col-sm-12">
              <label className="form-label" htmlFor="endDate">End date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={this.handleChange}
                required
                className="form-input" />
            </div>
            <div className="column col-12">
              <button type="submit" className="btn btn-primary">Add</button>
              {colleagueId &&
                <span className="label label-warning label-rounded">
                  Vacation days left: {vacationRemaining[colleagueId]}
                </span>
              }
            </div>
          </div>
        }
      </form>
    )
  }

}

AddRequestForm.propTypes = {
  colleagues: PropTypes.array.isRequired,
  vacationRemaining: PropTypes.object.isRequired,
  onAddRequest: PropTypes.func.isRequired
}

export default AddRequestForm
