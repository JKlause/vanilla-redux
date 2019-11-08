import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = action => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  reducer: PropTypes.function,
  initialState: PropTypes.string,
  children: PropTypes.node
}

export const useStoreState = () => useContext(StoreContext).state;
export const useDispatch = () => useContext(StoreContext).dispatch;

