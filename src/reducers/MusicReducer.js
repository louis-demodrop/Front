export const musicActions = {
    SET_FILE_TO_UPLOAD: "SET_FILE_TO_UPLOAD",
    SET_USER_MUSIC_LIST: "SET_USER_MUSIC_LIST",
    ADD_USER_MUSIC: "ADD_USER_MUSIC",
    SET_MUSIC_FEED: "SET_MUSIC_FEED",
    ADD_MUSIC_FEED: "ADD_MUSIC_FEED"
}

export const MusicReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILE_TO_UPLOAD":
            return { ...state, fileToUpload: action.file }
        case "SET_USER_MUSIC_LIST":
            return { ...state, userMusicList: action.userMusicList }
        case "ADD_USER_MUSIC":
            return { ...state, userMusicList: [...state.userMusicList, action.musicName] }
        case "SET_MUSIC_FEED":
            return { ...state, musicFeed: action.musicFeed }
        case "ADD_MUSIC_FEED":
            return { ...state, musicFeed: [...state.musicFeed, ...action.browsed] }
        default:
            return state
    }
}