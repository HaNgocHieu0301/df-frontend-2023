import { createContext, Dispatch } from 'react';
import { State, Action, initState } from './reducer';

type DataContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};
const Context = createContext<DataContextValue>({
  state: initState,
  dispatch: () => ({}),
});
export default Context;
