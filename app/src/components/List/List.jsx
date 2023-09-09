import React, { useContext, useEffect } from "react";
import styles from "./list.module.css";
import { globalContext } from "../../contexts/globalContext";
import Card from "../Card/Card";

function List() {
	const { state, dispatch } = useContext(globalContext);

	function getRestaurantList(restaurants) {
		dispatch({
			type: "GET_LIST",
			payload: {
				restaurants,
			},
		});
	}
	useEffect(() => {
		fetch("http://localhost:4000/restaurants")
			.then((res) => res.json())
			.then((res) => getRestaurantList(res));
	}, []);

	return (
		<section className={styles.list}>
			<div className="container">
				<h2 className={styles.list__title}>List of restaurants</h2>
				<div className={styles.list__content}>
					{state.list.map((el, index) => (
						<div key={Date.now() + index} className="col s12">
							<Card image={el.image} name={el.name} location={el.location} coordinates={el.coordinates} descr={el.description} id={el.id} rating={el.rating} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default List;
