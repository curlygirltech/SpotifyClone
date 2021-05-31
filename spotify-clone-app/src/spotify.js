//when you click the login it will take you here, we let the spotify API handle authentication
//this link will take you to spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

//thern reroute the user back to us
const redirectUri = "http://localhost:3000/";

const clientId = "dc140a2f590a4eddb7e148d7776db08f";

//what the user can do while in your app. a shortcut to crud functionality
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  
];
export const getTokenFromUrl = () => {
  return window.location.hash //will g0 to hash in url and pulls access token out
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
  
      return initial;
    }, {})
}
  
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
