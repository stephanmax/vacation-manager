import storeFactory from '../../../src/store'
import { changeRequestState } from '../../../src/store/actions'

describe('changeRequestState', () => {
  let store
  
  beforeAll((() => {
    store = storeFactory({
      requests: [{
        id: 0,
        colleagueId: '0',
        startDate: '2018-09-01',
        endDate: '2018-09-10',
        days: 10,
        state: 'pending'
      }]
    })
    store.dispatch(changeRequestState(0, 'approved'))
  }))

  it('should correctly change the request state', () => {
    expect(store.getState().requests[0].state).toBe('approved')
  })

})
