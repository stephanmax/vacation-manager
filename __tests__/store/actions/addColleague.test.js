import storeFactory from '../../../src/store'
import { addColleague } from '../../../src/store/actions'

describe('addColleague', () => {
  let store
  
  beforeAll((() => {
    store = storeFactory()
    store.dispatch(addColleague({
      name: 'Michael Bluth',
      birthdate: '1967-12-14',
      vacationEntitlement: 15
    }))
  }))

  it('should add a new colleague', () => {
    expect(store.getState().colleagues.length).toBe(1)
  })

  it('adds an id', () => {
    expect(store.getState().colleagues[0].id).toBeDefined()
  })

})
