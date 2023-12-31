import React, { useContext, useState } from "react";
import { globalContext } from "../../contexts/globalContext";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./editCard.module.css";
import stylesCard from "../Card/card.module.css";

function Editcard() {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(globalContext);
	const { id } = useParams();
	const currentCard = state.list.find((el) => el.id === +id);
	const [newImage, setNewImage] = useState(currentCard.image);
	const [newName, setNewName] = useState(currentCard.name);
	const [newLocation, setNewLocation] = useState(currentCard.location);
	const [newDescription, setNewDescription] = useState(currentCard.description);
	const [newRating, setNewRating] = useState(currentCard.rating);

	function handleSubmit(event) {
		event.preventDefault();
		dispatch({
			type: "EDIT_CARD",
			payload: {
				image: newImage,
				name: newName,
				location: newLocation,
				description: newDescription,
				rating: newRating,
				id: +id,
			},
		});
		navigate("/restaurant-list");
	}
	return (
		<div className={styles.editCard}>
			<div className="container">
				<h2 className={styles.editCard__title}>Edit a restaurant card</h2>
				<div className={styles.editCard__content}>
					<Card className={stylesCard.card}>
						<CardMedia sx={{ height: 140 }} image={currentCard.image} title={currentCard.name} component="img" />
						<CardContent>
							<Typography variant="h5" component="div">
								{currentCard.name}
							</Typography>
							<Typography gutterBottom variant="body1">
								{currentCard.location}
							</Typography>
							<Typography gutterBottom variant="body2" color="text.secondary">
								{currentCard.description}
							</Typography>
							<Rating name="read-only" value={currentCard.rating} readOnly />
						</CardContent>
					</Card>
					<form className={styles.editCard__form} onSubmit={handleSubmit}>
						<TextField
							required
							label="Image"
							className={styles.editCard__formItem}
							value={newImage}
							onChange={(event) => {
								setNewImage(event.target.value);
							}}
						/>
						<TextField
							required
							label="Name"
							className={styles.editCard__formItem}
							value={newName}
							onChange={(event) => {
								setNewName(event.target.value);
							}}
						/>
						<TextField
							required
							label="Location"
							className={styles.editCard__formItem}
							value={newLocation}
							onChange={(event) => {
								setNewLocation(event.target.value);
							}}
						/>
						<TextField
							required
							label="Description"
							className={styles.editCard__formItem}
							value={newDescription}
							onChange={(event) => {
								setNewDescription(event.target.value);
							}}
						/>
						<Rating
							name="simple-controlled"
							value={newRating}
							size="large"
							className={styles.editCard__stars}
							onChange={(event, newValue) => {
								setNewRating(newValue);
							}}
						/>
						<Button variant="contained" type="submit" color="success">
							Edit a restaurant
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Editcard;
