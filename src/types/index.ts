export interface IGion {
    content: string,
}

export interface IGionState {
    gion: IGion,
}

export interface Action {
    payload: IGion,
    type: string,
}
