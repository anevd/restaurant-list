import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styles from "./card.module.css";
import { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function CardItem({ image, name, location, coordinates, descr, rating, id }) {
	const { dispatch } = useContext(globalContext);
	const navigate = useNavigate();
	async function deleteCard(id) {
		const response = await fetch(`http://localhost:4000/restaurants/${id}`, {
			method: "DELETE",
		});

		if (response.status === 200) {
			dispatch({
				type: "DELETE_CARD",
				payload: {
					id,
				},
			});
		} else {
			let errorType = response.status;
			navigate(`/error/${errorType}`);
		}
	}
	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};

	const defaultState = {
		center: coordinates,
		zoom: 13,
	};

	return (
		<Card className={styles.card}>
			<CardMedia sx={{ height: 140 }} image={image} title={name} component="img" />
			<CardContent>
				<Typography variant="h5" component="div">
					{name}
				</Typography>

				<Typography gutterBottom variant="body2" color="text.secondary" className={styles.card__descr}>
					{descr}
				</Typography>
				<Rating name="read-only" value={rating} readOnly />
			</CardContent>
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
				<ListItemButton onClick={handleClick}>
					<ListItemText primary={location} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={!open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<YMaps
							query={{
								apikey: "18380673-2021-41d5-b65f-6ec70d79eb96",
								lang: "ru_RU",
							}}>
							<div className={styles.map}>
								<div className={styles.map__content}>
									<Map id="map" className={styles.map__frame} defaultState={defaultState}>
										<Placemark
											geometry={coordinates}
											properties={{
												iconContent: name,
											}}
											options={{
												preset: "islands#oliveStretchyIcon",
											}}
										/>
									</Map>
								</div>
							</div>
						</YMaps>
					</List>
				</Collapse>
			</List>
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
