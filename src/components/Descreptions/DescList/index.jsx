import React from "react";
import styled from "styled-components";
import DescListStyled from "./DescList.styles";
import { deCamelCase } from "../../../utils";
import { connect } from "react-redux";
import { doChangeDescription } from "../../../redux/Actions";
import AnimateHeight from "react-animate-height";

const LiWithMarker = styled.li`
	position: relative;
	&::before {
		position: absolute;
		content: "${(props) => (props.open ? "-" : "+")}";
		color: ${(props) => props.theme.colors.main};
		font-family: ${(props) => props.theme.fonts.main};
		font-weight: 00;
		font-size: 1.5rem;
		font-size: ${(props) => (props.open ? "1.6rem" : "1.3rem")};
		top: 50%;
		transform: translateY(-50%)
			translateX(${(props) => (props.open ? "-150%" : "-140%")});
	}
`;

function DescList({
	descRef,
	description,
	changeDescription,
	hiddenDescListSetOpen,
}) {
	const [open, setOpen] = React.useState({
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

	const toggleOpen = (e) => {
		const name = e.target.name;
		if (open[name] === "auto") {
			setOpen((prevOpen) => ({
				...prevOpen,
				[e.target.name]: 0,
			}));
		} else {
			setOpen((prevOpen) => ({
				...prevOpen,
				[e.target.name]: "auto",
			}));
		}
	};

	const handleClick = (e) => {
		if (hiddenDescListSetOpen !== undefined) hiddenDescListSetOpen(false);
		changeDescription(e.target.name);
		descRef.current.scrollIntoView();
	};

	return (
		<DescListStyled>
			<ul>
				<LiWithMarker
					open={open.exchange}
					className="li-subtitle"
					name="exchange"
				>
					<button
						onClick={toggleOpen}
						name="exchange"
						className="btn-subtitle"
					>
						EXCHANGE SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="exchange"
					duration={200}
					height={open.exchange}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleSort"
										? "active"
										: null
								}`}
								name={"BubbleSort"}
							>
								{deCamelCase("BubbleSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleSortOptimized"
										? "active"
										: null
								}`}
								name={"BubbleSortOptimized"}
							>
								{deCamelCase("BubbleSortOptimized")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CocktailShakerSort"
										? "active"
										: null
								}`}
								name={"CocktailShakerSort"}
							>
								{deCamelCase("CocktailShakerSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "OddEvenSort"
										? "active"
										: null
								}`}
								name={"OddEvenSort"}
							>
								{deCamelCase("OddEvenSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GnomeSort"
										? "active"
										: null
								}`}
								name={"GnomeSort"}
							>
								{deCamelCase("GnomeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GnomeSortOptimized"
										? "active"
										: null
								}`}
								name={"GnomeSortOptimized"}
							>
								{deCamelCase("GnomeSortOptimized")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CombSort" ? "active" : null
								}`}
								name={"CombSort"}
							>
								{deCamelCase("CombSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CircleSort"
										? "active"
										: null
								}`}
								name={"CircleSort"}
							>
								{deCamelCase("CircleSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.quick}
					className="li-subtitle"
					name="quick"
				>
					<button
						onClick={toggleOpen}
						name="quick"
						className="btn-subtitle"
					>
						QUICK SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight id="quick" duration={200} height={open.quick}>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "QuickSortLeftPivot" ||
									description === "QuickSortMiddlePivot" ||
									description === "QuickSortRightPivot"
										? "active"
										: null
								}`}
								name={"QuickSortLeftPivot"}
							>
								{deCamelCase("QuickSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "QuickSortStable"
										? "active"
										: null
								}`}
								name={"QuickSortStable"}
							>
								{deCamelCase("QuickSortStable")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.selection}
					className="li-subtitle"
					name="selection"
				>
					<button
						onClick={toggleOpen}
						name="selection"
						className="btn-subtitle"
					>
						SELECTION SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="selection"
					duration={200}
					height={open.selection}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "SelectionSort"
										? "active"
										: null
								}`}
								name={"SelectionSort"}
							>
								{deCamelCase("SelectionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "DoubleSelectionSort"
										? "active"
										: null
								}`}
								name={"DoubleSelectionSort"}
							>
								{deCamelCase("DoubleSelectionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CycleSort"
										? "active"
										: null
								}`}
								name={"CycleSort"}
							>
								{deCamelCase("CycleSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "HeapSortMin" ||
									description === "HeapSortMax"
										? "active"
										: null
								}`}
								name={"HeapSortMin"}
							>
								{deCamelCase("HeapSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.insertion}
					className="li-subtitle"
					name="insertion"
				>
					<button
						onClick={toggleOpen}
						name="insertion"
						className="btn-subtitle"
					>
						INSERTION SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="insertion"
					duration={200}
					height={open.insertion}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "InsertionSort"
										? "active"
										: null
								}`}
								name={"InsertionSort"}
							>
								{deCamelCase("InsertionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "InsertionSortBinary"
										? "active"
										: null
								}`}
								name={"InsertionSortBinary"}
							>
								{deCamelCase("InsertionSortBinary")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "ShellSort"
										? "active"
										: null
								}`}
								name={"ShellSort"}
							>
								{deCamelCase("ShellSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.merge}
					className="li-subtitle"
					name="merge"
				>
					<button
						onClick={toggleOpen}
						name="merge"
						className="btn-subtitle"
					>
						MERGE SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight id="merge" duration={200} height={open.merge}>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "MergeSort"
										? "active"
										: null
								}`}
								name={"MergeSort"}
							>
								{deCamelCase("MergeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "MergeSortBottomUp"
										? "active"
										: null
								}`}
								name={"MergeSortBottomUp"}
							>
								{deCamelCase("MergeSortBottomUp")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.distribution}
					className="li-subtitle"
					name="distribution"
				>
					<button
						onClick={toggleOpen}
						name="distribution"
						className="btn-subtitle"
					>
						DISTRIBUTION SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="distribution"
					duration={200}
					height={open.distribution}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CountingSort"
										? "active"
										: null
								}`}
								name={"CountingSort"}
							>
								{deCamelCase("CountingSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GravitySort"
										? "active"
										: null
								}`}
								name={"GravitySort"}
							>
								{deCamelCase("GravitySort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BucketSort"
										? "active"
										: null
								}`}
								name={"BucketSort"}
							>
								{deCamelCase("BucketSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "FlashSort"
										? "active"
										: null
								}`}
								name={"FlashSort"}
							>
								{deCamelCase("FlashSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "RadixSortBase2" ||
									description === "RadixSortBase5" ||
									description === "RadixSortBase10"
										? "active"
										: null
								}`}
								name={"RadixSortBase2"}
							>
								{deCamelCase("RadixSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.concurrent}
					className="li-subtitle"
					name="concurrent"
				>
					<button
						onClick={toggleOpen}
						name="concurrent"
						className="btn-subtitle"
					>
						CONCURRENT SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="concurrent"
					duration={200}
					height={open.concurrent}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BitonicSort"
										? "active"
										: null
								}`}
								name={"BitonicSort"}
							>
								{deCamelCase("BitonicSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "OddEvenMergeSort"
										? "active"
										: null
								}`}
								name={"OddEvenMergeSort"}
							>
								{deCamelCase("OddEvenMergeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "PairwiseSortingNetwork"
										? "active"
										: null
								}`}
								name={"PairwiseSortingNetwork"}
							>
								{deCamelCase("PairwiseSortingNetwork")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.miscellaneous}
					className="li-subtitle"
					name="miscellaneous"
				>
					<button
						onClick={toggleOpen}
						name="miscellaneous"
						className="btn-subtitle"
					>
						MISCELLANEOUS SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="miscellaneous"
					duration={200}
					height={open.miscellaneous}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "TimSort" ? "active" : null
								}`}
								name={"TimSort"}
							>
								{deCamelCase("TimSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "PancakeSort"
										? "active"
										: null
								}`}
								name={"PancakeSort"}
							>
								{deCamelCase("PancakeSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
				<LiWithMarker
					open={open.impractical}
					className="li-subtitle"
					name="impractical"
				>
					<button
						onClick={toggleOpen}
						name="impractical"
						className="btn-subtitle"
					>
						IMPRACTICAL SORTS
					</button>
				</LiWithMarker>
				<AnimateHeight
					id="impractical"
					duration={200}
					height={open.impractical}
				>
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BogoSort" ? "active" : null
								}`}
								name={"BogoSort"}
							>
								{deCamelCase("BogoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BozoSort" ? "active" : null
								}`}
								name={"BozoSort"}
							>
								{deCamelCase("BozoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleBogoSort"
										? "active"
										: null
								}`}
								name={"BubbleBogoSort"}
							>
								{deCamelCase("BubbleBogoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BogoBogoSort"
										? "active"
										: null
								}`}
								name={"BogoBogoSort"}
							>
								{deCamelCase("BogoBogoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "QuantumBogoSort"
										? "active"
										: null
								}`}
								name={"QuantumBogoSort"}
							>
								{deCamelCase("QuantumBogoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "IntelligentDesignSort"
										? "active"
										: null
								}`}
								name={"IntelligentDesignSort"}
							>
								{deCamelCase("IntelligentDesignSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "FaithSort"
										? "active"
										: null
								}`}
								name={"FaithSort"}
							>
								{deCamelCase("FaithSort")}
							</button>
						</li>
					</ul>
				</AnimateHeight>
			</ul>
		</DescListStyled>
	);
}

const props = (state) => ({
	description: state.description,
	descRef: state.descRef,
});

const actions = (dispatch) => ({
	changeDescription: (name) => dispatch(doChangeDescription(name)),
});

export default connect(props, actions)(DescList);
