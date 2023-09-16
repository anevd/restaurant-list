import { mainTypes } from "./actionTypes";
import axios from "axios";

export const getListAC = (restaurants) => ({
	type: mainTypes.GET_LIST,
	payload: restaurants,
});

export const addCardAC = (card) => ({
	type: mainTypes.ADD_CARD,
	payload: card,
});

export const deleteCardAC = (id) => ({
	type: mainTypes.DELETE_CARD,
	payload: id,
});

export const editCardAC = (card) => ({
	type: mainTypes.EDIT_CARD,
	payload: card,
});

export const getListThunk = () => async (dispatch) => {
	await axios.get("http://localhost:4000/restaurants").then((resp) => {
		dispatch(getListAC(resp.data));
	});
};
