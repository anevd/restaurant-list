import { list } from "./restaurants";
import styles from "../components/Form/form.module.css";

let copy = [...list];
let features = [];
copy.forEach((el, index) => {
	features.push({
		type: "Feature",
		id: el.id,
		geometry: {
			type: "Point",
			coordinates: el.coordinates,
		},
		properties: {
			iconContent: el.name,
			balloonContent: `
							<div class='${styles.balloon}'>
								<h5 class="${styles.balloon__title}">${el.name}</h5>
								<img class="${styles.balloon__image} ${styles.balloon__image_big}" src="${el.image}" alt="${el.name}"/>
							</div>
							`,
			hintContent: `
							<div class="${styles.hint}">
								<h5 class="${styles.hint__title}">${el.name}</h5>
								<img class="${styles.hint__image}" src="${el.image}" alt="${el.name}"/>
							</div>
							`,
		},
	});
});

export const restaurantsForMap = {
	type: "FeatureCollection",
	features: features,
};
