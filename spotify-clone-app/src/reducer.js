export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing 
  token: "BQDbvgad78jRooQChzGBy - 42czMbpNTIg6NCKC6kLe6_agnMpnxNTkq1fNOyK7FHog- A3PZITU6ZheWv4qiQCyxMY_AqA6bz0CJfiNNI9VAkGAfrw6rfzgBjFih46JgYlx61U - eepRR80uZZqNSMojmS37GLMNuDHKtCVc78uL2_bUElMxMbzQIXM8DMWYw"
  
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
}

export default reducer;