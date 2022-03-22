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

function Descriptions({ description, setDescRef }) {
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

	const inViewport = useIntersection(descRef, "-200px"); // Trigger if 200px is visible from the element

	return (
		<DescContainer buttonVisible={inViewport}>
			{/* <div className="desc-list">
				<DescList />
			</div> */}
			{open && <HiddenDescList setOpen={setOpen} />}
			<button onClick={() => setOpen(true)} className="open-list">
				<MenuIcon sx={{ fontSize: "2.4rem" }} />
			</button>
			<div ref={descRef} className="desc-content">
				<DescreptionStyled>{desc}</DescreptionStyled>
			</div>
			<button
				onClick={() => window.scrollTo({ top: 0 })}
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
