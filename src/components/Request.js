import PropTypes from 'prop-types'

const Request = ({ name, state, startDate, endDate, days, vacationRemaining, onApprove, onReject }) => (
  <tr>
    <td><b>{name}</b></td>
    <td>{startDate}</td>
    <td>{endDate}</td>
    <td>{days}</td>
    <td>{vacationRemaining}</td>
    <td>
      {state === 'pending' &&
        <span>
          <button onClick={onApprove} className="btn btn-sm btn-success" title="Approve">
            <i className="icon icon-check"></i>
          </button>
          <button onClick={onReject} className="btn btn-sm btn-error" title="Reject">
            <i className="icon icon-cross"></i>
          </button>
        </span>
      }
      {state === 'approved' &&
        <i className="icon icon-check"></i>
      }
    </td>
  </tr>
)

Request.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  vacationRemaining: PropTypes.number.isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
}

export default Request
