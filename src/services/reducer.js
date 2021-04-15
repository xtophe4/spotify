export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //set token null after developing
  token: "",
  //"BQD0d_xH7s8lGxJMBKSpE2h2k0tAen7mymnDwv90M1ziRN4W9pIgz27GjJY_3BhikE_XdtMBCLEzKuv38mUlHUKdMxGf0G2g6WGjxZXobsREbo1aBPsj66Z-Tc3L1jmqI7wKx4W6OOsQQJc1c5R5bnGYANuNxj-KDW4hAzjsDdiEO08y",
};

const reducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keep the current state
        user: action.user, //update the user state with action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
