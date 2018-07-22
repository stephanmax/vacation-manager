import deepFreeze from 'deep-freeze'

import { TYPES } from '../../../src/store/actions'
import { colleagues } from '../../../src/store/reducers'

describe('colleagues reducer', () => {

  it(`${TYPES.ADD_COLLEAGUE}`, () => {
    const state = []
    const action = {
      type: TYPES.ADD_COLLEAGUE,
      id: '0',
      name: 'Michael Bluth',
      birthdate: '1967-12-14',
      vacationEntitlement: 15
    }

    deepFreeze(state)
    deepFreeze(action)

    const result = colleagues(state, action)
    expect(result).toEqual([{
      id: '0',
      name: 'Michael Bluth',
      birthdate: '1967-12-14',
      vacationEntitlement: 15
    }])
  })

})
