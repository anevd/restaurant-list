import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className={styles.header}>
			<div className="container">
				<div className={styles.header__content}>
					<Link to="/" className={styles.header__home}>
						Restaurant service
					</Link>
					<div className={styles.header__pages}>
						<Link to="/restaurant-list " className={styles.header__item}>
							List of restaurants
						</Link>
						<Link to="/add-a-restaurant" className={styles.header__item}>
							Add a restaurant
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
