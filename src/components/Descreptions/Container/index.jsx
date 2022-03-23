import React from "react";
import DescList from "../DescList";
import DescContainer from "./Container.styles";
import DescreptionStyled from "./Description.styles";
import { connect } from "react-redux";
import { doSetDescRef } from "../../../redux/Actions";
import getDescription from "../../../utils/getDescription";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useIntersection from "../../../hooks/useIntersection";
import MenuIcon from "@mui/icons-material/Menu";
import HiddenDescList from "./HiddenDescList";

function Descriptions({ description, setDescRef, width }) {
	const descRef = React.useRef(null);
	const desc = getDescription(description);
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		setDescRef(descRef);
	}, []);

	React.useEffect(() => {
		if (open) {
			document.body.classList.add("open-modal-1");
		} else {
			document.body.classList.remove("open-modal-1");
		}
	}, [open]);

	const inViewport = useIntersection(descRef, "-120px");
	return (
		<DescContainer buttonVisible={inViewport}>
			{open && <HiddenDescList setOpen={setOpen} />}
			{width > 1350 ? (
				<div className="desc-list">
					<DescList />
				</div>
			) : (
				<button onClick={() => setOpen(true)} className="open-list">
					<MenuIcon sx={{ fontSize: "2.4rem" }} />
				</button>
			)}
			<div ref={descRef} className="desc-content">
				<DescreptionStyled>{desc}</DescreptionStyled>
			</div>
			<button
				onClick={() => document.getElementById("root").scrollIntoView()}
				className="scroll-top"
			>
				<ArrowUpwardIcon sx={{ fontSize: "2.4rem" }} />
			</button>
		</DescContainer>
	);
}

const props = (state) => ({
	description: state.description,
});

const actions = (dispatch) => ({
	setDescRef: (ref) => dispatch(doSetDescRef(ref)),
});

export default connect(props, actions)(Descriptions);
