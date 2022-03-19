import React from "react";
import DescList from "../DescList";
import DescContainer from "./Container.styles";
import DescreptionStyled from "./Description.styles";
import { connect } from "react-redux";
import BubbleSort from "../BubbleSort";
import CocktailShakerSort from "../CocktailShakerSort";
import { doSetDescRef } from "../../../redux/Actions";
import BubbleSortOptimized from "../BubbleSortOptimized";
import OddEvenSort from "../OddEvenSort";
import GnomeSort from "../GnomeSort";
import GnomeSortOptimized from "../GnomeSortOptimized";
import CombSort from "../CombSort";
import CircleSort from "../CircleSort";
import QuickSort from "../QuickSort";
import RadixSort from "../RadixSort";

function Descriptions({ description, setDescRef }) {
	const descRef = React.useRef(null);
	const desc = getDescription(description);

	React.useEffect(() => {
		setDescRef(descRef);
	}, []);

	return (
		<DescContainer>
			<div ref={descRef} className="desc-list">
				<DescList />
			</div>
			<div className="desc-content">
				<DescreptionStyled>{desc}</DescreptionStyled>
			</div>
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

const getDescription = (name) => {
	switch (name) {
		case "BubbleSort":
			return <BubbleSort />;
		case "CocktailShakerSort":
			return <CocktailShakerSort />;
		case "BubbleSortOptimized":
			return <BubbleSortOptimized />;
		case "OddEvenSort":
			return <OddEvenSort />;
		case "GnomeSort":
			return <GnomeSort />;
		case "GnomeSortOptimized":
			return <GnomeSortOptimized />;
		case "CombSort":
			return <CombSort />;
		case "CircleSort":
			return <CircleSort />;
		case "QuickSortMiddlePivot":
		case "QuickSortLeftPivot":
		case "QuickSortRightPivot":
			return <QuickSort />;
		case "RadixSortBase2":
		case "RadixSortBase5":
		case "RadixSortBase10":
			return <RadixSort />;
		default:
			return <BubbleSort />;
	}
};
