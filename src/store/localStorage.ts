export const loadState = () => {
  try {
    const state = localStorage.getItem('list');

    if (state === 'null') {
      return {};
    }

    return JSON.parse(state);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const saveState = (state) => {
  try {
    const localStorageState = JSON.stringify(state.list);
    localStorage.setItem('list', localStorageState);
  } catch (error) {
    console.log(error);
  }
};
