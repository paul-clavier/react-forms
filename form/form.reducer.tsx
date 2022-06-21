export const reducer = (state: any, action: { key: any; payload: any }) => {
  switch (action.key) {
    case "name":
      state.name.value = action.payload.newValue;
      state.name.error = action.payload.error;
      return state;
    case "address":
      state.address.value = action.payload.newValue;
      state.address.error = action.payload.error;
      return state;
    case "mobile":
      state.mobile.value = action.payload.newValue;
      state.mobile.error = action.payload.error;
      return state;
    case "email":
      state.email.value = action.payload.newValue;
      state.email.error = action.payload.error;
      return state;
    case "emailUpdates":
      state.emailUpdates.value = action.payload.newValue;
      state.emailUpdates.error = action.payload.error;
      return state;
    default:
      return state;
  }
};
