import styled from "styled-components";

const AlgorithmStyled = styled.div`
	background-color: none;
	color: ${(props) => props.theme.colors.dark};
	display: flex;
	min-height: 300px;
	min-width: 220px;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 1% 0 5%;
	h1 {
		font-size: ${(props) =>
			props.len < 4 ? "2rem" : props.len < 7 ? "1.3rem" : "1rem"};
		text-align: center;
	}

	.nodes {
		height: 90%;
		width: 80%;
		display: flex;
		justify-content: flex-end;
		flex: 1;
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

	.active {
		background: ${(props) => props.theme.colors.main};
	}
	@media (max-width: 450px) {
		padding: 0;
		width: 100vw;
	}
`;

export default AlgorithmStyled;
