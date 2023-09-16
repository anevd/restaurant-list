import * as React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { deleteCardAC } from "../../store/actions/mainActions";

export default function FormPropsTextFields() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [rating, setRating] = React.useState(0);
	const [coordinates, setCoordinates] = useState([]);

	async function handleSubmit(event) {
		try {
			event.preventDefault();
			const newRestaurant = {
				name,
				image,
				location,
				coordinates,
				description,
				rating,
				id: Date.now(),
			};

			const response = await axios.post("http://localhost:4000/add", newRestaurant);

			if (response.status === 200) {
				if (!newRestaurant.image.match(/\.(jpg|jpeg|png|gif)$/)) {
					notification.warning({
						message: "Your image was not found",
						description: "Image has been replaced",
					});
					newRestaurant.image = "https://gas-kvas.com/uploads/posts/2023-02/1676439541_gas-kvas-com-p-risunok-detskoe-kafe-6.jpg";
				} else {
					notification.success({
						message: "Success",
						description: "The restaurant has been successfully added",
					});
				}
				dispatch(deleteCardAC(newRestaurant));

				setName("");
				setImage("");
				setLocation("");
				setDescription("");
				setRating(0);

				navigate("/restaurants");
			} else {
				let errorType = response.status;
				navigate(`/error/${errorType}`);
				throw new Error("error");
			}
		} catch (error) {
			notification.error({
				message: "Error",
				description: error.message,
			});
		}
	}

	function getCoordinates(e) {
		setCoordinates(e.get("coords"));
	}

	return (
		<section className={styles.formPage}>
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
							<h5 className={styles.form__mapTitle}>Indicate the location on the map</h5>
							<YMaps
								query={{
									apikey: "91faaa4b-1f58-467f-89c9-88b86ae97107",
									lang: "ru_RU",
								}}>
								<div className={styles.map}>
									<div className={styles.map__content}>
										<Map onClick={(e) => getCoordinates(e)} id="map" modules={["geocode"]} className={styles.form__map} defaultState={{ center: [55.755696, 37.617306], zoom: 12 }}>
											<SearchControl options={{ float: "right", provider: "yandex#search", placeholderContent: "Find a restaurant" }} />
										</Map>
									</div>
								</div>
							</YMaps>
							<TextField
								required
								label="Description"
								className={styles.form__item}
								value={description}
								onChange={(event) => {
									setDescription(event.target.value);
								}}
								inputProps={{ maxLength: 230 }}
							/>
							<Typography variant="h5">Rating</Typography>
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
		</section>
	);
}
