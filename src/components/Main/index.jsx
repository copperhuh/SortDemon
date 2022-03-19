import React from "react";
import { connect } from "react-redux";
import AlgorithmsContainer from "../AlgorithmsContainer";
import Sidebar from "../Sidebar";
import MainContainer from "./Main.styles";

function Main({ algorithms }) {
	return (
		<MainContainer>
			<div className="algo-container">
				<AlgorithmsContainer algorithms={algorithms} />
			</div>

			<div className="sidebar">
				<Sidebar algorithms={algorithms} />
			</div>
		</MainContainer>
	);
}

const props = (state) => ({
	algorithms: state.algorithms,
});

export default connect(props, null)(Main);
