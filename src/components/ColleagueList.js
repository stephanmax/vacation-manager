import PropTypes from 'prop-types'

import Colleague from './Colleague'

const ColleagueList = ({ colleagues }) => (
  <div className="columns">
    {colleagues.length === 0 &&
      <div className="column col-12">
        <div className="empty">
          <div className="empty-icon">
            <i className="icon icon-3x icon-people"></i>
          </div>
          <p className="empty-title h5">There are no colleagues</p>
          <p className="empty-subtitle">Use the form above to add a colleague.</p>
        </div>
      </div>
    }
    {colleagues.length > 0 &&
      <div className="column col-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Vacation entitlement</th>
            </tr>
          </thead>
          <tbody>
            {colleagues.map(colleague =>
              <Colleague
                key={colleague.id}
                {...colleague} />
            )}
          </tbody>
        </table>
      </div>
    }
  </div>
)

ColleagueList.propTypes = {
  colleagues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      vacationEntitlement: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default ColleagueList
