import React, { useContext } from 'react';
import { StoreContext, actions } from '../store';

const ChangeThemeToggle = () => {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <div className="flex_row dark-mode-toggle">
      <button
        type="button"
        className={`toggle-switch ${state.theme}`}
        onClick={() => dispatch(actions.changeTheme(state.theme === 'light' ? 'dark' : 'light'))}
      >
        <div className="slider" />
      </button>
      <span>{`${state.theme === 'light' ? 'Light' : 'Dark'} Mode`}</span>
    </div>
  );
};

export default ChangeThemeToggle;
