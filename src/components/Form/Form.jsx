import * as React from "react";
import { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
	const navigate = useNavigate();
	const { dispatch } = useContext(globalContext);
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [rating, setRating] = React.useState(0);

	function handleSubmit(event) {
		event.preventDefault();
		dispatch({
			type: "ADD_CARD",
			payload: {
				name,
				image,
				location,
				description,
				rating,
				id: Date.now(),
			},
		});
		setName("");
		setImage("");
		setLocation("");
		setDescription("");
		setRating(0);
		navigate("/restaurant-list");
	}
	return (
		<div className={styles.formPage}>
			<div className="container">
				<h2 className={styles.formPage__title}>Add a restaurant</h2>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.form__wrapper}>
						<div className={styles.form__content}>
							<TextField
								required
								label="Name"
								className={styles.form__item}
								value={name}
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
							<TextField
								required
								label="Image"
								className={styles.form__item}
								value={image}
								onChange={(event) => {
									setImage(event.target.value);
								}}
							/>
							<TextField
								required
								label="Location"
								className={styles.form__item}
								value={location}
								onChange={(event) => {
									setLocation(event.target.value);
								}}
							/>
							<TextField
								required
								label="Description"
								className={styles.form__item}
								value={description}
								onChange={(event) => {
									setDescription(event.target.value);
								}}
							/>
							<Typography variant="h5" className={styles.form__rating}>
								Rating
							</Typography>
							<Rating
								name="simple-controlled"
								value={rating}
								size="large"
								className={styles.form__stars}
								onChange={(event, newValue) => {
									setRating(newValue);
								}}
							/>
							<Button variant="contained" type="submit" color="success">
								Add a restaurant
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
