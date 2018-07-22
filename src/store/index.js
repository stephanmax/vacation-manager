import { createStore, combineReducers } from 'redux'

import { colleagues, requests } from './reducers'

const savedState = localStorage.getItem('vacation-manager')
const localState = savedState ? JSON.parse(savedState) : {}

const storeFactory = (initialState) => {
  const store = createStore(
    combineReducers({
      colleagues,
      requests
    }),
    initialState || localState
  )
  
  store.subscribe(() => {
    localStorage.setItem('vacation-manager', JSON.stringify(store.getState()))
  })

  return store
}

export default storeFactory
