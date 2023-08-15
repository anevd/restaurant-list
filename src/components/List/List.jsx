import React, { useContext } from "react";
import styles from "./list.module.css";
import { globalContext } from "../../contexts/globalContext";
import Card from "../Card/Card";

function List() {
	const { state } = useContext(globalContext);
	return (
		<div className={styles.list}>
			<div className="container">
				<h2 className={styles.list__title}>List of restaurants</h2>
				<div className={styles.list__content}>
					{state.list.map((el) => (
						<div key={el.id} className="col s12">
							<Card image={el.image} name={el.name} location={el.location} descr={el.description} id={el.id} rating={el.rating} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default List;
