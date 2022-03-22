import React from "react";
import { doShuffle } from "../../redux/Actions";
import { connect } from "react-redux";
import Settings from "./Settings";

const SortSettings = ({ shuffle }) => {
	shuffle();

	return (
		<>
			<Settings shuffle={shuffle} />
		</>
	);
};

const actions = (dispatch) => ({
	shuffle: () => dispatch(doShuffle),
});

export default connect(null, actions)(SortSettings);
