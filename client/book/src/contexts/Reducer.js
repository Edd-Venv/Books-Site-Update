export const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        isLoaded: true,
        summary: action.summary,
        data: action.data,
        display: "show"
      };

    case "DISPLAY":
      return {
        isLoaded: false,
        summary: state.summary,
        data: [],
        display: action.display
      };
    default:
      throw new Error();
  }
};

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
