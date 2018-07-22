import { Menu } from '../containers'

const ViewTemplate = ({children}) =>
  <div className="container grid-lg">
    <Menu />
    {children}
  </div>

export default ViewTemplate
