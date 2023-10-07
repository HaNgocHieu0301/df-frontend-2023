import React, { useContext, useEffect } from 'react';
import { StoreContext, actions } from '../store';

const ChangeThemeToggle = () => {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);
  return (
    <div className="flex flex-row gap-4 items-center dark-mode-toggle">
      <button
        type="button"
        className={`w-11 h-6 border-2 rounded-2xl flex items-center cursor-pointer px-1 ${state.theme}`}
        onClick={() => dispatch(actions.changeTheme(state.theme === 'light' ? 'dark' : 'light'))}
      >
        <div
          className={`w-5 h-5 bg-orange-500 rounded-[50%] transition-transform duration-200 ease-linear ${
            state.theme === 'light' ? 'translate-x-[-5px]' : 'translate-x-[15px]'
          } `}
        />
      </button>
      <span className={state.theme === 'light' ? 'text-black' : 'text-white'}>{`${
        state.theme === 'light' ? 'Light' : 'Dark'
      } Mode`}</span>
    </div>
  );
};

export default ChangeThemeToggle;
