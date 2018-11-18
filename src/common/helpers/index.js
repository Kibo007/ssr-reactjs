export const saveStateToSessionStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    return err;
  }
  return undefined;
};

export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      debugger;
      return undefined;
    }
    debugger;
    return JSON.parse(serializedState);
  } catch (err) {
    debugger;
    return undefined;
  }
};
