import React from "react";
import ReactDOM from "react-dom";
import DescList from "../DescList";
import CloseIcon from "@mui/icons-material/Close";
import HiddenDescListStyled from "./HiddenDescList.styles";

export default function HiddenDescList({ setOpen }) {
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
		}
	}

	return ReactDOM.createPortal(
		<HiddenDescListStyled ref={outside} onClick={onClose}>
			<div className="modal-bg">
				<button onClick={() => setOpen(false)} className="close-modal">
					<CloseIcon sx={{ fontSize: "2.7rem" }} />
				</button>
				<DescList hiddenDescListSetOpen={setOpen} />
			</div>
		</HiddenDescListStyled>,
		document.getElementById("portal")
	);
}
