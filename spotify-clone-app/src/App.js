import Login from './Login'
import Player from './Player';
import './App.css';
import {useEffect, useState} from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null)
  const [{user, token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
    
      // setToken(_token)
      spotify.setAccessToken(_token) //gives the access token to the spotify API
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
          
        })
        
      })
    }
    
  }, [])
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ): (
            <Login/>
        )
      }
      {/* <Login/> */}
    </div>
  );
}

export default App;
