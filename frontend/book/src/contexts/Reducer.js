export const Reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "GET":
      return [action.state];
    default:
      return state;
  }
};
