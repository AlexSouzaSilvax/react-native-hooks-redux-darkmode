import { createStore } from 'redux';

const INITIAL_STATE = {  
  darkMode: false
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ALTERAR_DARKMODE':
        return { ...state, darkMode: action.status };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
