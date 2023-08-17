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
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function CardItem({ image, name, location, descr, rating, id }) {
	const { dispatch } = useContext(globalContext);

	function deleteCard(id) {
		dispatch({
			type: "DELETE_CARD",
			payload: id,
		});
	}
	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};
	const myGeocoder = ymaps.geocode();
	console.log(myGeocoder);

	return (
		<Card className={styles.card}>
			<CardMedia
				sx={{ height: 140 }}
				image={image}
				title={name}
				component="img"
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = "https://gas-kvas.com/uploads/posts/2023-02/1676439541_gas-kvas-com-p-risunok-detskoe-kafe-6.jpg";
				}}
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{name}
				</Typography>
				<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
					<ListItemButton onClick={handleClick}>
						<ListItemText primary={location} />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<YMaps
								query={{
									apikey: "91faaa4b-1f58-467f-89c9-88b86ae97107",
									lang: "ru_RU",
								}}>
								<div className={styles.map}>
									<div className={styles.map__content}>
										<Map id="map" modules={["geocode"]} className={styles.map__frame} defaultState={{ center: [47.386893, 8.533977], zoom: 5 }}>
											<Placemark />
										</Map>
									</div>
								</div>
							</YMaps>
						</List>
					</Collapse>
				</List>
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
