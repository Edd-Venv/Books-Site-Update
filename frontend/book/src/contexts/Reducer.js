export const historyReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { isLoaded: action.isLoaded, data: action.data };
    default:
      throw new Error("History Error");
  }
};

export const bestSellerReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        isLoaded: action.isLoaded,
        data: action.data,
        ContainerVisibilty: action.ContainerVisibilty
      };
    default:
      throw new Error("Best Seller Error");
  }
};

export const sundayReadsReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { isLoaded: action.isLoaded, data: action.data };
    default:
      throw new Error();
  }
};
