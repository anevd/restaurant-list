import { useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

function useLocalStorage(initialValue, key) {
	const [state, dispatch] = useReducer(reducer, initialValue, () => {
		const storage = localStorage.getItem(key);
		if (storage !== null) {
			try {
				return JSON.parse(storage);
			} catch {
				return initialValue;
			}
		}
		return initialValue;
	});
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);
	return [state, dispatch];
}

export { useLocalStorage };
