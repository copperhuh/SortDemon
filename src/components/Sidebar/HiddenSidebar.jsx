import React from "react";
import ReactDOM from "react-dom";
import Sidebar from ".";
import HiddenSidebarStyled from "./HiddenSidebar.styles";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function HiddenSidebar({ algorithms, open, setOpen }) {
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
		}
	}

	return ReactDOM.createPortal(
		<AnimatePresence>
			{open && (
				<HiddenSidebarStyled ref={outside} onClick={onClose}>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: "100vw" }}
						exit={{ x: "100vw" }}
						transition={{
							ease: "easeOut",
							duration: 0.25,
						}}
						className="sidebar-bg"
					>
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
					</motion.div>
				</HiddenSidebarStyled>
			)}
		</AnimatePresence>,
		document.getElementById("portal")
	);
}
