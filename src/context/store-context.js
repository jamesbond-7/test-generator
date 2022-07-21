import React, { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const actionTypes = {
  SET_TASK_NAME: "SET_TASK_NAME",
  SET_STEP_ONE: "SET_STEP_ONE",
  SET_STEP_TWO: "SET_STEP_TWO",
  SET_OPEN_TAB: "SET_OPEN_TAB",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TASK_NAME:
      return {
        ...state,
        taskName: action.payload,
      };

    case actionTypes.SET_OPEN_TAB:
      return {
        ...state,
        openTab: action.payload,
      };

    case actionTypes.SET_STEP_ONE:
      return {
        ...state,
        step1: {
          serviceName: action.payload.serviceName,
          operationName: action.payload.operationName,
        },
      };

    case actionTypes.SET_STEP_TWO:
      return {
        ...state,
        step2: {
          headers: action.payload.headers,
          endPointUrl: action.payload.endPointUrl,
          requestBody: action.payload.requestBody,
        },
      };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const initialState = {
    openTab: 0,
    taskName: "",
    step1: {
      serviceName: "",
      operationName: "",
    },
    step2: {
      headers: "",
      endPointUrl: "",
      requestBody: "",
    },
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
