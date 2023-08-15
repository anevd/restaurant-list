export function reducer(state, action) {
	switch (action.type) {
		case "ADD_CARD": {
			const newCard = action.payload;
			return { ...state, list: [newCard, ...state.list] };
		}
		case "DELETE_CARD": {
			const deleteCardId = action.payload;
			return { ...state, list: state.list.filter((el) => el.id !== deleteCardId) };
		}
		case "EDIT_CARD": {
			const { image, name, location, description, rating, id } = action.payload;
			return {
				...state,
				list: state.list.map((el) => {
					if (el.id === id) {
						el.image = image;
						el.name = name;
						el.location = location;
						el.description = description;
						el.rating = rating;
					}
					return el;
				}),
			};
		}
		default: {
			return state;
		}
	}
}
