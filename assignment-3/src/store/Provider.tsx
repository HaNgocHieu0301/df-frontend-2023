import React, { useReducer, ReactNode, useMemo } from 'react'
import Context from './Context'
import reducer, { initState, State, Action } from './reducer'

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    reducer as React.Reducer<State, Action>,
    initState,
  )
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
export default Provider
