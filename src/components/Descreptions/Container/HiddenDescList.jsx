import React from "react";
import ReactDOM from "react-dom";
import DescList from "../DescList";
import CloseIcon from "@mui/icons-material/Close";
import HiddenDescListStyled from "./HiddenDescList.styles";
import { motion, AnimatePresence } from "framer-motion";

export default function HiddenDescList({ open, setOpen }) {
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
		}
	}

	return ReactDOM.createPortal(
		<AnimatePresence>
			{open && (
				<HiddenDescListStyled ref={outside} onClick={onClose}>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: "-50vw" }}
						exit={{ x: "-50vw" }}
						transition={{ ease: "easeOut", duration: 0.3 }}
						className="modal-bg"
					>
						<button
							onClick={() => setOpen(false)}
							className="close-modal"
						>
							<CloseIcon sx={{ fontSize: "2.7rem" }} />
						</button>
						<DescList hiddenDescListSetOpen={setOpen} />
					</motion.div>
				</HiddenDescListStyled>
			)}
		</AnimatePresence>,
		document.getElementById("portal")
	);
}
