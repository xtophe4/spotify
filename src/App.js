import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./services/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  //Run code base on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //Get Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      //Weekly feed
      spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    } // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

      {/* */}
      {/* */}
      {/* */}
    </div>
  );
}

export default App;
