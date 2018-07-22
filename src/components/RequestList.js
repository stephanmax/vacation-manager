import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import Request from './Request'

const RequestList = ({ colleagueNames, requests, vacationRemaining, onChangeRequestState }) => {

  return (
    <div className="columns">
      {requests.length === 0 &&
        <div className="column col-12">
          <div className="empty">
            <div className="empty-icon">
              <i className="icon icon-3x icon-mail"></i>
            </div>
            <p className="empty-title h5">There are no requests</p>
            <p className="empty-subtitle">Colleagues can <NavLink to="/request">file a new request</NavLink>.</p>
          </div>
        </div>
      }
      {requests.length > 0 &&
        <div className="column col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Days</th>
                <th>Days left</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request =>
                <Request
                  key={request.id}
                  name={colleagueNames[request.colleagueId]}
                  vacationRemaining={vacationRemaining[request.colleagueId]}
                  onApprove={() => onChangeRequestState(request.id, 'approved')}
                  onReject={() => onChangeRequestState(request.id, 'rejected')}
                  {...request} />
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

RequestList.propTypes = {
  colleagueNames: PropTypes.object.isRequired,
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      colleagueId: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      days: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  vacationRemaining: PropTypes.object.isRequired,
  onChangeRequestState: PropTypes.func.isRequired
}

export default RequestList
