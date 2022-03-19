import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 85vh;

	.algo-container {
		height: 100%;
		background-color: ${(props) => props.theme.colors.main};
		flex: 1;
	}
	.sidebar {
		width: fit-content;
		height: 100%;
		background-color: ${(props) => props.theme.colors.dark};
	}
`;

export default MainContainer;
