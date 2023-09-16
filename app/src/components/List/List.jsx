import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./list.module.css";
import { getListThunk } from "../../store/actions/mainActions";
import Card from "../Card/Card";

function List() {
	const dispatch = useDispatch();
	const { list } = useSelector((store) => store.mainStore);
	useEffect(() => {
		dispatch(getListThunk());
	}, []);

	return (
		<section className={styles.list}>
			<div className="container">
				<h2 className={styles.list__title}>List of restaurants</h2>
				<div className={styles.list__content}>
					{list &&
						list.map((el, index) => (
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
