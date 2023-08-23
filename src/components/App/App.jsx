import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Form from "../Form/Form";
import List from "../List/List";
import EditCard from "../EditCard/EditCard";
import { globalContext as GlobalContext } from "../../contexts/globalContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import list from "../../json/restaurants";

function App() {
	const initialState = {
		list,
	};
	const [state, dispatch] = useLocalStorage(initialState, "plan");
	return (
		<>
			<GlobalContext.Provider value={{ state, dispatch }}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add-a-restaurant" element={<Form />} />
					<Route path="/restaurant-list" element={<List />} />
					<Route path="/edit/:id" element={<EditCard />} />
				</Routes>
			</GlobalContext.Provider>
		</>
	);
}

export default App;
