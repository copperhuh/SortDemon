import { useEffect, useState, useRef } from "react";
import AlgorithmStyled from "./Algorithm.styles";
import { connect } from "react-redux";
import useSortingAlgo from "../../../hooks/useSortingAlgo";
import { deCamelCase } from "../../../utils";

const Alogrithm = ({ items, arrMax, speed, sortingMethod, len }) => {
	let [savedItems, setSavedItems] = useState(items);
	const newNodesRef = useRef(true);
	const speedRef = useRef(speed);

	useEffect(() => {
		speedRef.current = speed;
	}, [speed]);

	useEffect(() => {
		setSavedItems(items);
		newNodesRef.current = true;
	}, [items]);

	const [elements] = useSortingAlgo(
		savedItems,
		arrMax,
		newNodesRef,
		speedRef,
		sortingMethod
	);

	return (
		<AlgorithmStyled len={len}>
			<h1>{deCamelCase(sortingMethod)}</h1>
			<div className="nodes">
				{newNodesRef.current
					? items.map((el, inx) => {
							return (
								<div
									key={inx}
									className="node-container"
									style={{
										width: `calc(${(1 / arrMax) * 100}% )`,
									}}
								>
									<div
										className={`node-coloured`}
										style={{
											height: `${
												(el.val * 100) / arrMax
											}%`,
										}}
									></div>
								</div>
							);
					  })
					: elements?.value}
			</div>
		</AlgorithmStyled>
	);
};

const select = (state) => ({
	items: state.items.items,
	arrMax: state.items.arrMax,
	size: state.size,
	speed: state.speed,
	sortingOngoing: state.sortingOngoing,
	len: state.algorithms.length,
});

export default connect(select, null)(Alogrithm);
