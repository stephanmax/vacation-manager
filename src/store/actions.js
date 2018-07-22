import nanoid from 'nanoid'

const DAY_IN_MS = 24 * 60 * 60 * 1000

export const TYPES = {
  ADD_COLLEAGUE: 'ADD_COLLEAGUE',
  ADD_REQUEST: 'ADD_REQUEST',
  CHANGE_REQUEST_STATE: 'CHANGE_REQUEST_STATE'
}

export const addColleague = (colleague) => ({
  type: TYPES.ADD_COLLEAGUE,
  id: nanoid(),
  ...colleague
})

export const addRequest = (request) => ({
  type: TYPES.ADD_REQUEST,
  id: nanoid(),
  days: (new Date(request.endDate) - new Date(request.startDate)) / DAY_IN_MS + 1,
  state: 'pending',
  ...request
})

export const changeRequestState = (id, state) => ({
  type: TYPES.CHANGE_REQUEST_STATE,
  id,
  state
})
