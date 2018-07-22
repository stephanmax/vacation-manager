import { connect } from 'react-redux'

import AddColleagueForm from './AddColleagueForm'
import AddRequestForm from './AddRequestForm'
import ColleagueList from './ColleagueList'
import RequestList from './RequestList'
import MainMenu from './ui/MainMenu'

import { addColleague, addRequest, changeRequestState } from '../store/actions'
import { getColleagueNames, getPendingRequests, getVacationRemaining, getVisibleRequests } from '../store/selectors'

export const NewColleague = connect(
  null,
  dispatch => ({
    onAddColleague(colleague) {
      dispatch(addColleague(colleague))
    }
  })
)(AddColleagueForm)

export const Colleagues = connect(
  state => ({
    colleagues: state.colleagues
  })
)(ColleagueList)

export const NewRequest = connect(
  state => ({
    colleagues: state.colleagues,
    vacationRemaining: getVacationRemaining(state)
  }),
  dispatch => ({
    onAddRequest(request) {
      dispatch(addRequest(request))
    }
  })
)(AddRequestForm)

export const Requests = connect(
  state => ({
    colleagueNames: getColleagueNames(state),
    requests: getVisibleRequests(state),
    vacationRemaining: getVacationRemaining(state)
  }),
  dispatch => ({
    onChangeRequestState(id, state) {
      dispatch(changeRequestState(id, state))
    }
  })
)(RequestList)

export const Menu = connect(
  state => ({
    colleagues: state.colleagues,
    requests: getPendingRequests(state)
  })
)(MainMenu)
