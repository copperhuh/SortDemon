import React from "react";
import { deCamelCase } from "../../utils";
import SidebarStyled from "./Sidebar.styles";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import AddIcon from "@mui/icons-material/Add";
import AddAlgoModal from "./AddAlgoModal";
import { connect } from "react-redux";
import { doChangeDescription, doRemoveAlgorithm } from "../../redux/Actions";

function Sidebar({ algorithms, removeAlgorithm, changeDescription, descRef }) {
	const [open, setOpen] = React.useState(false);

	let elements = algorithms.map((el, id) => {
		return (
			<div key={id} className="sort-container">
				<div className="btns">
					<button
						onClick={() => handleClick(el)}
						className="sort-info-shortcut"
					>
						{deCamelCase(el)}
					</button>
					<button
						onClick={() => removeAlgorithm(id)}
						className="sort-remove"
					>
						<DoDisturbAltIcon sx={{ fontSize: 30 }} />
					</button>
				</div>
			</div>
		);
	});

	const handleClick = (name) => {
		changeDescription(name);
		descRef.current.scrollIntoView();
	};

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [open]);

	return (
		<>
			<SidebarStyled>
				{elements}
				<div className="sort-container add-btn">
					<button onClick={() => setOpen(true)} className="sort-add">
						<AddIcon sx={{ fontSize: 50 }} />
					</button>
				</div>
			</SidebarStyled>
			<AddAlgoModal open={open} setOpen={setOpen} />
		</>
	);
}

const actions = (dispatch) => ({
	changeDescription: (name) => dispatch(doChangeDescription(name)),
	removeAlgorithm: (id) => dispatch(doRemoveAlgorithm(id)),
});

const props = (state) => ({
	descRef: state.descRef,
});

export default connect(props, actions)(Sidebar);
