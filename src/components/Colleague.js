import PropTypes from 'prop-types'

const Colleague = ({ name, birthdate, vacationEntitlement }) => (
  <tr>
    <td><b>{name}</b></td>
    <td>{birthdate}</td>
    <td>{vacationEntitlement} days</td>
  </tr>
)

Colleague.propTypes = {
  name: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  vacationEntitlement: PropTypes.number.isRequired
}

export default Colleague
