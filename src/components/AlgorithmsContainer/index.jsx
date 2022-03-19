import * as React from "react";
import { connect } from "react-redux";
import Alogrithm from "./Algorithm";
import Container from "./AlgorithmsContainer.styles";

const AlgorithmsContainer = ({ algorithms, len }) => {
	return (
		<Container len={len}>
			{algorithms.map((el, id) => (
				<Alogrithm key={id} sortingMethod={el} />
			))}
		</Container>
	);
};

const props = (state) => ({
	len: state.algorithms.length,
});

export default connect(props, null)(AlgorithmsContainer);
