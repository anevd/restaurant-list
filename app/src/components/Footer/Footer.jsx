import React from "react";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__text}>If you have any suggestions or comments about the service, please contact us by mail</div>
				<div className={styles.footer__email}>findrest@gmail.com</div>
			</div>
		</footer>
	);
}

export default Footer;
