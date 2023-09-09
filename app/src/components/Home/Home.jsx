import React from "react";
import styles from "./home.module.css";

function Home() {
	return (
		<section className={styles.home__about}>
			<div className="container">
				<div className={styles.home__content}>
					<img className={styles.home__img} src="https://i.pinimg.com/originals/3f/d0/f7/3fd0f7a036f2b8c8e0bc310787979f2d.jpg" alt="home" />
					<div className={styles.home__descr}>
						<p>
							This is a directory of restaurants with addresses, phone numbers, photos and ratings. Whatever your requirements, among the restaurants you can easily find something
							suitable for you
						</p>
						<p>You can also add to this list a restaurant that you visited and that impressed you or disappointed you.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
