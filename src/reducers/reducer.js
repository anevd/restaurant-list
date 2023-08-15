export function reducer(state, action) {
	switch (action.type) {
		case "ADD_CARD": {
			const newCard = action.payload;
			const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
			if (urlPattern.test(newCard.image) === false) {
				newCard.image = "https://gas-kvas.com/uploads/posts/2023-02/1676439541_gas-kvas-com-p-risunok-detskoe-kafe-6.jpg";
			}
			return { ...state, list: [newCard, ...state.list] };
		}
		case "DELETE_CARD": {
			const deleteCardId = action.payload;
			return { ...state, list: state.list.filter((el) => el.id !== deleteCardId) };
		}
		case "EDIT_CARD": {
			let { image, name, location, description, rating, id } = action.payload;
			return {
				...state,
				list: state.list.map((el) => {
					if (el.id === id) {
						if (image.naturalHeight === 0) {
							el.image = "https://gas-kvas.com/uploads/posts/2023-02/1676439541_gas-kvas-com-p-risunok-detskoe-kafe-6.jpg";
						}
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
