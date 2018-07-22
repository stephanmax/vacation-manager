import { TYPES } from './actions'

export const colleagues = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_COLLEAGUE:
      return [
        {
          id: action.id,
          name: action.name,
          birthdate: action.birthdate,
          vacationEntitlement: action.vacationEntitlement
        },
        ...state
      ]
      break;
    default:
      return state
  }
}

export const requests = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_REQUEST:
      return [
        {
          id: action.id,
          colleagueId: action.colleagueId,
          startDate: action.startDate,
          endDate: action.endDate,
          days: action.days,
          state: action.state
        },
        ...state
      ]
      break;
    case TYPES.CHANGE_REQUEST_STATE:
      return state.map((request) => request.id === action.id ? {...request, state: action.state} : request)
      break;
    default:
      return state
  }
}
