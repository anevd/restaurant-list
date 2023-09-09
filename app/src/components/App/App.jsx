import React, { useReducer } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Form from "../Form/Form";
import List from "../List/List";
import EditCard from "../EditCard/EditCard";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import { globalContext as GlobalContext } from "../../contexts/globalContext";
import { Routes, Route } from "react-router-dom";
import { reducer } from "../../reducers/reducer";

function App() {
	const initialState = {
		list: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<GlobalContext.Provider value={{ state, dispatch }}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Form />} />
					<Route path="/restaurants" element={<List />} />
					<Route path="/edit/:id" element={<EditCard />} />
					<Route path="/error/:errorType" element={<Error />} />
				</Routes>
				<Footer />
			</GlobalContext.Provider>
		</>
	);
}

export default App;
