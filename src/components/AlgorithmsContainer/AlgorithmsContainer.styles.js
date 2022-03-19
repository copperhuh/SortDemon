import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: ${(props) => (props.len === 3 ? "70%" : "100%")};
	padding: 2rem;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.colors.dark};
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(
			${(props) =>
				props.len === 1
					? "800px"
					: props.len === 2
					? "600px"
					: props.len === 4
					? "600px"
					: "400px"},
			1fr
		)
	);
	gap: 2rem;
	/* grid-template-rows: repeat( auto-fit, minmax(500px, 1fr) ); */
`;

export default Container;
