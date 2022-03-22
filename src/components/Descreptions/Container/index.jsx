import React from "react";
import DescList from "../DescList";
import DescContainer from "./Container.styles";
import DescreptionStyled from "./Description.styles";
import { connect } from "react-redux";
import { doSetDescRef } from "../../../redux/Actions";
import getDescription from "../../../utils/getDescription";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useIntersection from "../../../hooks/useIntersection";

function Descriptions({ description, setDescRef }) {
	const descRef = React.useRef(null);
	const desc = getDescription(description);

	React.useEffect(() => {
		setDescRef(descRef);
	}, []);

	const inViewport = useIntersection(descRef, "-200px"); // Trigger if 200px is visible from the element

	if (inViewport) {
		console.log("in viewport:", descRef.current);
	}

	return (
		<DescContainer buttonVisible={inViewport}>
			<div className="desc-list">
				<DescList />
			</div>
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
