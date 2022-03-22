import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.colors.light};
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(
			${(props) =>
				props.len === 1
					? "800px"
					: props.len === 2
					? "600px"
					: props.len === 3 || props.len === 4
					? "600px"
					: "400px"},
			1fr
		)
	);
	gap: ${(props) => (props.len > 6 ? "1rem" : "2rem")};
`;

export default Container;
