import styled from "styled-components";

const AlgorithmStyled = styled.div`
	background-color: ${(props) => props.theme.colors.light};
	color: ${(props) => props.theme.colors.dark};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 1% 0 5%;

	h1 {
		font-size: ${(props) =>
			props.len < 4 ? "2rem" : props.len < 7 ? "1.3rem" : "1rem"};
	}

	.nodes {
		height: 90%;
		width: 80%;
		display: flex;
		justify-content: flex-end;
	}
	.node-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 0;
		margin: 0 auto;
	}
	.node-coloured {
		background: ${(props) => props.theme.colors.dark};
		width: 100%;
	}
	.node-arrow {
		width: 100%;
		height: fit-content;
		text-align: center;
	}
	.active {
		background: ${(props) => props.theme.colors.main};
	}
`;

export default AlgorithmStyled;
