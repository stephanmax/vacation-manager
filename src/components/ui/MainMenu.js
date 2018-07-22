import { NavLink } from 'react-router-dom'

const selectedStyle = {
  color: '#32b643'
}

const MainMenu = ({colleagues, requests}) =>
  <div className="columns">
    <div className="column col-12">
      <h2>Vacation Manager</h2>
    </div>
    <div className="column col-12">
      <nav className="navbar">
        <ul className="navbar-section">
          <NavLink to="/colleagues" className="btn btn-link" activeStyle={selectedStyle}>
            <span className="badge" data-badge={colleagues.length}>
              Colleagues
            </span>
          </NavLink>
          <NavLink to="/request" className="btn btn-link" activeStyle={selectedStyle}>
            Request
          </NavLink>
          <NavLink to="/approval" className="btn btn-link" activeStyle={selectedStyle}>
            <span className="badge" data-badge={requests.length}>
              Approve
            </span>
          </NavLink>
        </ul>
      </nav>
    </div>
  </div>

export default MainMenu
