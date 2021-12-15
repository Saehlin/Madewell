export const SET_VISIBILITY = "SET_VISIBLE";
export const SET_OUTFIT = "SET_OUTFIT";

export const setVisibility = (visibility) => ({
    type: SET_VISIBILITY,
    payload: visibility
});

export const setOutfit = (outfit) => ({
    type: SET_OUTFIT,
    payload: outfit
});