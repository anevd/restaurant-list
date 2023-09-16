import React, { useReducer } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Form from "../Form/Form";
import List from "../List/List";
import EditCard from "../EditCard/EditCard";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Provider store={store}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Form />} />
					<Route path="/restaurants" element={<List />} />
					<Route path="/edit/:id" element={<EditCard />} />
					<Route path="/error/:errorType" element={<Error />} />
				</Routes>
				<Footer />
			</Provider>
		</>
	);
}

export default App;
