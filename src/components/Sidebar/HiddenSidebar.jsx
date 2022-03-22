import React from "react";
import ReactDOM from "react-dom";
import Sidebar from ".";
import HiddenSidebarStyled from "./HiddenSidebar.styles";
import CloseIcon from "@mui/icons-material/Close";

export default function HiddenSidebar({ algorithms, setOpen }) {
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
		}
	}

	return ReactDOM.createPortal(
		<HiddenSidebarStyled ref={outside} onClick={onClose}>
			<div className="sidebar-bg">
				<button
					onClick={() => setOpen(false)}
					className="close-sidebar"
				>
					<CloseIcon sx={{ fontSize: "2.7rem" }} />
				</button>
				<Sidebar
					hiddenSidebarSetOpen={setOpen}
					algorithms={algorithms}
				/>
			</div>
		</HiddenSidebarStyled>,
		document.getElementById("portal")
	);
}
