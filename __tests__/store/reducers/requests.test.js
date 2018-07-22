import deepFreeze from 'deep-freeze'

import { TYPES } from '../../../src/store/actions'
import { requests } from '../../../src/store/reducers'

describe('requests reducer', () => {

  it(`${TYPES.ADD_REQUEST}`, () => {
    const state = []
    const action = {
      type: TYPES.ADD_REQUEST,
      id: '0',
      colleagueId: '0',
      startDate: '2018-09-01',
      endDate: '2018-09-10',
      days: 10,
      state: 'pending'
    }

    deepFreeze(state)
    deepFreeze(action)

    const result = requests(state, action)
    expect(result).toEqual([{
      id: '0',
      colleagueId: '0',
      startDate: '2018-09-01',
      endDate: '2018-09-10',
      days: 10,
      state: 'pending'
    }])
  })

  it(`${TYPES.CHANGE_REQUEST_STATE}`, () => {
    const state = [{
      id: '0',
      colleagueId: '0',
      startDate: '2018-09-01',
      endDate: '2018-09-10',
      days: 10,
      state: 'pending'
    }]
    const action = {
      type: TYPES.CHANGE_REQUEST_STATE,
      id: '0',
      state: 'rejected'
    }

    deepFreeze(state)
    deepFreeze(action)

    const result = requests(state, action)
    expect(result).toEqual([{
      id: '0',
      colleagueId: '0',
      startDate: '2018-09-01',
      endDate: '2018-09-10',
      days: 10,
      state: 'rejected'
    }])
  })

})
