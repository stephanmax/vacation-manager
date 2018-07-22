import storeFactory from '../../../src/store'
import { addRequest } from '../../../src/store/actions'

describe('addRequest', () => {
  let store
  
  beforeAll((() => {
    store = storeFactory()
    store.dispatch(addRequest({
      colleagueId: '0',
      startDate: '2018-09-01',
      endDate: '2018-09-10',
    }))
  }))

  it('should add a new vacation request', () => {
    expect(store.getState().requests.length).toBe(1)
  })

  it('adds an id', () => {
    expect(store.getState().requests[0].id).toBeDefined()
  })

  it('adds an the state "pending"', () => {
    expect(store.getState().requests[0].state).toBe('pending')
  })

  it('correctly calculates the number of days', () => {
    expect(store.getState().requests[0].days).toBe(10)
  })

})
