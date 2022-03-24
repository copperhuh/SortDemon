import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { doAddAlgorithm } from "../../redux/Actions";
import { deCamelCase } from "../../utils";
import ModalStyled from "./AddAlogoModal.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AnimateHeight from "react-animate-height";
import { useState } from "react";

function AddAlgoModal({ open, setOpen, addAlgorithm }) {
	const [active, setActive] = React.useState(null);
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
			setActive(null);
			setHeight({
				exchange: 0,
				quick: 0,
				selection: 0,
				insertion: 0,
				merge: 0,
				distribution: 0,
				concurrent: 0,
				miscellaneous: 0,
				impractical: 0,
			});
		}
	}

	function onSubmit(name) {
		addAlgorithm(name);
		setActive(null);
		setOpen(false);
	}

	function onOpenSection(e) {
		if (active === e.target.name) {
			setActive("");
			setHeight((prevHeight) => ({ ...prevHeight, [e.target.name]: 0 }));
		} else {
			setHeight((prevHeight) => ({ ...prevHeight, [active]: 0 }));
			setActive(e.target.name);
			setHeight((prevHeight) => ({
				...prevHeight,
				[e.target.name]: "auto",
			}));
		}
	}

	function AlgoBtn({ name }) {
		return (
			<li>
				<button onClick={() => onSubmit(name)} className={`algo-btn `}>
					{deCamelCase(name)}
				</button>
			</li>
		);
	}

	const [height, setHeight] = useState({
		exchange: 0,
		quick: 0,
		selection: 0,
		insertion: 0,
		merge: 0,
		distribution: 0,
		concurrent: 0,
		miscellaneous: 0,
		impractical: 0,
	});

	if (!open) return null;
	return ReactDOM.createPortal(
		<ModalStyled ref={outside} onClick={onClose}>
			<div className="modal-container">
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "exchange" ? "active" : null
						}`}
						name="exchange"
						aria-controls="exchange"
					>
						EXCHANGE SORTS{" "}
						{active === "exchange" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="exchange"
						duration={200}
						height={height.exchange}
					>
						<ul className="btns">
							<AlgoBtn name={"BubbleSort"} />

							<AlgoBtn name={"BubbleSortOptimized"} />

							<AlgoBtn name={"CocktailShakerSort"} />

							<AlgoBtn name={"OddEvenSort"} />

							<AlgoBtn name={"GnomeSort"} />

							<AlgoBtn name={"GnomeSortOptimized"} />

							<AlgoBtn name={"CombSort"} />

							<AlgoBtn name={"CircleSort"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "quick" ? "active" : null
						}`}
						name="quick"
						aria-controls="quick"
					>
						QUICK SORTS{" "}
						{active === "quick" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="quick"
						duration={200}
						height={height.quick}
					>
						<ul className="btns">
							<AlgoBtn name={"QuickSortLeftPivot"} />

							<AlgoBtn name={"QuickSortMiddlePivot"} />

							<AlgoBtn name={"QuickSortRightPivot"} />

							<AlgoBtn name={"QuickSortStable"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "selection" ? "active" : null
						}`}
						name="selection"
						aria-controls="selection"
					>
						SELECTION SORTS{" "}
						{active === "selection" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="selection"
						duration={200}
						height={height.selection}
					>
						<ul className="btns">
							<AlgoBtn name={"SelectionSort"} />
							<AlgoBtn name={"DoubleSelectionSort"} />
							<AlgoBtn name={"CycleSort"} />
							<AlgoBtn name={"HeapSortMin"} />
							<AlgoBtn name={"HeapSortMax"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "insertion" ? "active" : null
						}`}
						name="insertion"
						aria-controls="insertion"
					>
						INSERTION SORTS{" "}
						{active === "insertion" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="insertion"
						duration={200}
						height={height.insertion}
					>
						<ul className="btns">
							<AlgoBtn name={"InsertionSort"} />
							<AlgoBtn name={"InsertionSortBinary"} />
							<AlgoBtn name={"ShellSort"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "merge" ? "active" : null
						}`}
						name="merge"
						aria-controls="merge"
					>
						MERGE SORTS{" "}
						{active === "merge" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="merge"
						duration={200}
						height={height.merge}
					>
						<ul className="btns">
							<AlgoBtn name={"MergeSort"} />
							<AlgoBtn name={"MergeSortBottomUp"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "distribution" ? "active" : null
						}`}
						name="distribution"
						aria-controls="distribution"
					>
						DISTRIBUTION SORTS{" "}
						{active === "distribution" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="distribution"
						duration={200}
						height={height.distribution}
					>
						<ul className="btns">
							<AlgoBtn name={"CountingSort"} />
							<AlgoBtn name={"GravitySort"} />
							<AlgoBtn name={"BucketSort"} />
							<AlgoBtn name={"FlashSort"} />
							<AlgoBtn name={"RadixSortBase2"} />
							<AlgoBtn name={"RadixSortBase5"} />
							<AlgoBtn name={"RadixSortBase10"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "concurrent" ? "active" : null
						}`}
						name="concurrent"
						aria-controls="concurrent"
					>
						CONCURRENT SORTS{" "}
						{active === "concurrent" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="concurrent"
						duration={200}
						height={height.concurrent}
					>
						<ul className="btns">
							<AlgoBtn name={"BitonicSort"} />
							<AlgoBtn name={"OddEvenMergeSort"} />
							<AlgoBtn name={"PairwiseSortingNetwork"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "miscellaneous" ? "active" : null
						}`}
						name="miscellaneous"
						aria-controls="miscellaneous"
					>
						MISCELLANEOUS SORTS{" "}
						{active === "miscellaneous" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="miscellaneous"
						duration={200}
						height={height.miscellaneous}
					>
						<ul className="btns">
							<AlgoBtn name={"TimSort"} />
							<AlgoBtn name={"PancakeSort"} />
						</ul>
					</AnimateHeight>
				</div>
				<div className="section">
					<button
						onClick={onOpenSection}
						className={`section-title ${
							active === "impractical" ? "active" : null
						}`}
						name="impractical"
						aria-controls="impractical"
					>
						IMPRACTICAL SORTS{" "}
						{active === "impractical" ? (
							<KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
						) : (
							<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
						)}
					</button>
					<AnimateHeight
						id="impractical"
						duration={200}
						height={height.impractical}
					>
						<ul className="btns">
							<AlgoBtn name={"BogoSort"} />
							<AlgoBtn name={"BozoSort"} />
							<AlgoBtn name={"BubbleBogoSort"} />
						</ul>
					</AnimateHeight>
				</div>
				{/* <button
					disabled={active === null}
					onClick={active === null ? null : onSubmit}
					className="submit"
				>
					ADD
				</button> */}
			</div>
		</ModalStyled>,
		document.getElementById("portal")
	);
}

const actions = (dispatch) => ({
	addAlgorithm: (name) => dispatch(doAddAlgorithm(name)),
});

export default connect(null, actions)(AddAlgoModal);
