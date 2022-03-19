import React from "react";
import { doShuffle } from "../../redux/Actions";
import { connect } from "react-redux";
import SettingsShown from "./SettingsShown";

const SortSettings = ({ shuffle }) => {
	shuffle();

	return (
		<>
			<SettingsShown shuffle={shuffle} />
		</>
	);
};

const actions = (dispatch) => ({
	shuffle: () => dispatch(doShuffle),
});

export default connect(null, actions)(SortSettings);
