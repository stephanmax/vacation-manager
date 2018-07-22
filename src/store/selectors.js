import { createSelector } from 'reselect'

const calculateVacationRemaining = (colleagues, requests, colleagueId) => {
  const vacationEntitlement = colleagues.filter(colleague => colleague.id === colleagueId)[0].vacationEntitlement
  const vacationTaken = requests
    .filter(request => request.colleagueId === colleagueId)
    .reduce((sumVacationDays, request) => request.days + sumVacationDays, 0)
  return vacationEntitlement - vacationTaken
}

const getColleagues = (state) => state.colleagues
const getRequests = (state) => state.requests

export const getVisibleRequests = createSelector(
  [getRequests],
  requests => requests.filter(request => request.state !== 'rejected')
)

export const getPendingRequests = createSelector(
  [getRequests],
  requests => requests.filter(request => request.state === 'pending')
)

export const getApprovedRequests = createSelector(
  [getRequests],
  requests => requests.filter(request => request.state === 'approved')
)

export const getVacationRemaining = createSelector(
  [getColleagues, getApprovedRequests],
  (colleagues, requests) => colleagues.reduce((colleagueMap, colleague) => ({
    [colleague.id]: calculateVacationRemaining(colleagues, requests, colleague.id),
    ...colleagueMap
  }), {})
)

export const getColleagueNames = createSelector(
  [getColleagues],
  colleagues => colleagues.reduce((colleagueMap, colleague) => ({
    [colleague.id]: colleague.name,
    ...colleagueMap
  }), {})
)
