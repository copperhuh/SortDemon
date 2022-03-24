import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import InfoModalStyled from "./InfoModal.styles";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoModal({ open, setOpen }) {
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			console.log("c");
			setOpen(false);
		}
	}

	return ReactDOM.createPortal(
		<AnimatePresence>
			{open && (
				<InfoModalStyled ref={outside} onClick={onClose}>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: "-50vw" }}
						exit={{ x: "100vw" }}
						transition={{ ease: "easeOut", duration: 0.1 }}
						className="modal-bg"
					>
						<button
							onClick={() => setOpen(false)}
							className="close-modal"
						>
							<CloseIcon sx={{ fontSize: "2.7rem" }} />
						</button>
						<h3>Info</h3>
						<p>
							<span className="bold">SORT DEMON</span> is a
							visualizer of sorting algorithms. It is meant to be
							used as a tool{" "}
							<span className="bold">
								for learning how the algorithms act and how they
								contrast from one another
							</span>
							. I did <span className="bold">not</span> design it
							to accurately show the relative speed of the
							algorithms, since I deemed it would make the faster
							algorithms{" "}
							<span className="bold">less “readable”</span>.
							Please keep that in mind while using{" "}
							<span className="bold">SORT DEMON</span>.
						</p>
						<h4>About Algorithms</h4>
						<p>
							There can be <span className="bold">up to 9</span>{" "}
							algorithms running at the same time. If after adding
							a new algorithm,{" "}
							<span className="bold">only its name appears</span>,
							just click the <span className="bold">RESET</span>{" "}
							or <span className="bold">SHUFFLE</span> button to
							show it entirely. Also, note that{" "}
							<span className="bold">removing</span> an algorithm{" "}
							<span className="bold">
								in the middle of the runtime
							</span>
							can lead to some strange behavior that is also
							easily fixed with a{" "}
							<span className="bold">RESET</span> or{" "}
							<span className="bold">SHUFFLE</span>. Another thing
							- the more structurally{" "}
							<span className="bold">complex algorithms</span>{" "}
							(like the ones using recursion) have to run in their
							entirety <span className="bold">before</span>{" "}
							recreating their steps on the screen. I say that
							because that initial run in the background can lead
							to a slight <span className="bold">lag</span> when
							starting the visualization with a{" "}
							<span className="bold">large array size</span> and{" "}
							<span className="bold">
								multiple of these complex algorithms
							</span>
							.
						</p>
						<h4>About Descriptions</h4>
						<p>
							I do <span className="bold">not</span> take credit
							for <span className="bold">any</span> of the{" "}
							<span className="bold">descriptions’ contents</span>{" "}
							- proper sources are linked at the bottom of each
							description. This is a{" "}
							<span className="bold">personal project</span> - the
							description functionality is just a{" "}
							<span className="bold">feature</span> that I thought
							would be nice to implement and thought that
							authentic articles would look better than some Lorem
							Ipsum boilerplate text. I{" "}
							<span className="bold">strongly recommend </span>
							everyone to visit the websites from which I go the
							articles - all of them are{" "}
							<span className="bold">great resources</span> for
							learning computer science-related topics.
						</p>
						<p className="center margin-top">
							Feel free to contact me if you have any feedback
							regarding the site.
						</p>
						<p className="center">
							My contact links are in the footer
						</p>
						<h3>
							Thank you for using{" "}
							<span className="bold">SORT DEMON</span>!
						</h3>
					</motion.div>
				</InfoModalStyled>
			)}
		</AnimatePresence>,
		document.getElementById("portal")
	);
}
