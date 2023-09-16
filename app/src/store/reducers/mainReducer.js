import { mainTypes } from "../actions/actionTypes";

const initialState = {
	list: [],
};

export function mainReducer(state = initialState, action) {
	switch (action.type) {
		case mainTypes.GET_LIST: {
			const restaurants = action.payload;
			return { ...state, list: restaurants };
		}
		case mainTypes.ADD_CARD: {
			const newCard = action.payload;
			return { ...state, list: [...state.list, newCard] };
		}
		case mainTypes.DELETE_CARD: {
			const id = action.payload;
			return {
				...state,
				list: state.list.filter((el) => {
					return el.id !== id;
				}),
			};
		}
		case mainTypes.EDIT_CARD: {
			let { image, name, location, description, rating, id } = action.payload;
			return {
				...state,
				// list: state.list.map((el) => {
				// 	if (el.id === id) {
				// 		el.image = image;
				// 		el.name = name;
				// 		el.location = location;
				// 		el.description = description;
				// 		el.rating = rating;
				// 	}
				// 	return el;
				// }),
			};
		}
		default: {
			return state;
		}
	}
}
