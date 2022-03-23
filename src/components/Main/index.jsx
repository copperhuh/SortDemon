import React from "react";
import { connect } from "react-redux";
import AlgorithmsContainer from "../AlgorithmsContainer";
import Sidebar from "../Sidebar";
import MainContainer from "./Main.styles";
import MenuIcon from "@mui/icons-material/Menu";
import HiddenSidebar from "../Sidebar/HiddenSidebar";

function Main({ algorithms, width }) {
	const [open, setOpen] = React.useState(false);
	const [height, setHeight] = React.useState(0);

	React.useEffect(() => {
		if (open) {
			document.body.classList.add("open-modal-2");
		} else {
			document.body.classList.remove("open-modal-2");
		}
	}, [open]);

	return (
		<MainContainer height={height}>
			<div className="algo-container">
				<AlgorithmsContainer
					setHeight={setHeight}
					width={width}
					algorithms={algorithms}
				/>
			</div>

			{width > 1710 ? (
				<div className="sidebar">
					<Sidebar algorithms={algorithms} />
				</div>
			) : (
				<button onClick={() => setOpen(true)} className="open-sidebar">
					<MenuIcon sx={{ fontSize: "2.7rem" }} />
				</button>
			)}
			{open && (
				<HiddenSidebar setOpen={setOpen} algorithms={algorithms} />
			)}
		</MainContainer>
	);
}

const props = (state) => ({
	algorithms: state.algorithms,
});

export default connect(props, null)(Main);
