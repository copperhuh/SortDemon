import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { doAddAlgorithm } from "../../redux/Actions";
import { deCamelCase } from "../../utils";
import ModalStyled from "./AddAlogoModal.styles";

function AddAlgoModal({ open, setOpen, addAlgorithm }) {
	const [active, setActive] = React.useState(null);
	const outside = React.useRef(null);

	function onClose(e) {
		if (outside.current === e.target) {
			setOpen(false);
			setActive(null);
		}
	}

	function onSubmit() {
		addAlgorithm(active);
		setActive(null);
		setOpen(false);
	}

	function AlgoBtn({ name }) {
		return (
			<button
				onClick={() => setActive(name)}
				className={`algo-btn ${active === name ? "active" : null}`}
			>
				{deCamelCase(name)}
			</button>
		);
	}

	if (!open) return null;
	return ReactDOM.createPortal(
		<ModalStyled ref={outside} onClick={onClose}>
			<div className="modal-container">
				<div className="section">
					<h3>EXCHANGE SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"BubbleSort"} />
						<AlgoBtn name={"BubbleSortOptimized"} />
						<AlgoBtn name={"CocktailShakerSort"} />
						<AlgoBtn name={"OddEvenSort"} />
						<AlgoBtn name={"GnomeSort"} />
						<AlgoBtn name={"GnomeSortOptimized"} />
						<AlgoBtn name={"CombSort"} />
						<AlgoBtn name={"CircleSort"} />
					</div>
				</div>
				<div className="section">
					<h3>QUICK SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"QuickSortLeftPivot"} />
						<AlgoBtn name={"QuickSortMiddlePivot"} />
						<AlgoBtn name={"QuickSortRightPivot"} />
						<AlgoBtn name={"QuickSortStable"} />
					</div>
				</div>
				<div className="section">
					<h3>SELECTION SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"SelectionSort"} />
						<AlgoBtn name={"DoubleSelectionSort"} />
						<AlgoBtn name={"CycleSort"} />
						<AlgoBtn name={"HeapSortMin"} />
						<AlgoBtn name={"HeapSortMax"} />
					</div>
				</div>
				<div className="section">
					<h3>INSERTION SORTS</h3>
					<div className="butns">
						<AlgoBtn name={"InsertionSort"} />
						<AlgoBtn name={"InsertionSortBinary"} />
						<AlgoBtn name={"ShellSort"} />
					</div>
				</div>
				<div className="section">
					<h3>MERGE SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"MergeSort"} />
						<AlgoBtn name={"MergeSortBottomUp"} />
					</div>
				</div>
				<div className="section">
					<h3>DISTRIBUTION SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"CountingSort"} />
						<AlgoBtn name={"GravitySort"} />
						<AlgoBtn name={"BucketSort"} />
						<AlgoBtn name={"FlashSort"} />
						<AlgoBtn name={"RadixSortBase2"} />
						<AlgoBtn name={"RadixSortBase5"} />
						<AlgoBtn name={"RadixSortBase10"} />
					</div>
				</div>
				<div className="section">
					<h3>CONCURRENT SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"BitonicSort"} />
						<AlgoBtn name={"OddEvenMergeSort"} />
						<AlgoBtn name={"PairwiseSortingNetwork"} />
					</div>
				</div>
				<div className="section">
					<h3>MISCELLANEOUS SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"TimSort"} />
						<AlgoBtn name={"PancakeSort"} />
					</div>
				</div>
				<div className="section">
					<h3>IMPRACTICAL SORTS</h3>
					<div className="btns">
						<AlgoBtn name={"BogoSort"} />
						<AlgoBtn name={"BozoSort"} />
						<AlgoBtn name={"BubbleBogoSort"} />
					</div>
				</div>
				<button
					disabled={active === null}
					onClick={active === null ? null : onSubmit}
					className="submit"
				>
					ADD
				</button>
			</div>
		</ModalStyled>,
		document.getElementById("portal")
	);
}

const actions = (dispatch) => ({
	addAlgorithm: (name) => dispatch(doAddAlgorithm(name)),
});

export default connect(null, actions)(AddAlgoModal);
