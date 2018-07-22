import ViewTemplate from './ViewTemplate'
import { Colleagues, NewColleague } from '../containers'

const ViewColleagues = () =>
  <ViewTemplate>
    <NewColleague />
    <Colleagues />
  </ViewTemplate>

export default ViewColleagues
