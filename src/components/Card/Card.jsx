import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import styles from "./card.module.css";
import { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import { Link } from "react-router-dom";

function CardItem({ image, name, location, descr, rating, id }) {
	const { dispatch } = useContext(globalContext);
	function deleteCard(id) {
		dispatch({
			type: "DELETE_CARD",
			payload: id,
		});
	}

	return (
		<Card className={styles.card}>
			<CardMedia sx={{ height: 140 }} image={image} title={name} component="img" />
			<CardContent>
				<Typography variant="h5" component="div">
					{name}
				</Typography>
				<Typography gutterBottom variant="body1">
					{location}
				</Typography>
				<Typography gutterBottom variant="body2" color="text.secondary">
					{descr}
				</Typography>
				<Rating name="read-only" value={rating} readOnly />
			</CardContent>
			<CardActions>
				<Link to={`/edit/${id}`}>
					<Button size="small" color="success">
						Edit
					</Button>
				</Link>
				<Button
					size="small"
					onClick={() => {
						deleteCard(id);
					}}
					color="success">
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}

export default CardItem;
