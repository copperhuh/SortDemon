import * as React from "react";
import Alogrithm from "./Algorithm";
import Container from "./AlgorithmsContainer.styles";

const AlgorithmsContainer = ({ algorithms }) => {
	return (
		<Container>
			{algorithms.map((el, id) => (
				<Alogrithm key={id} sortingMethod={el} />
			))}
		</Container>
	);
};

export default AlgorithmsContainer;
