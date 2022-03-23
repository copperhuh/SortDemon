import * as React from "react";
import { connect } from "react-redux";
import useHeight from "../../hooks/useHeight";
import Alogrithm from "./Algorithm";
import Container from "./AlgorithmsContainer.styles";

const AlgorithmsContainer = ({ algorithms, len, setHeight }) => {
	const heightRef = React.useRef(null);
	const height = useHeight(heightRef);

	React.useEffect(() => {
		setHeight(height);
	}, [height]);

	return (
		<Container ref={heightRef} len={len}>
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
