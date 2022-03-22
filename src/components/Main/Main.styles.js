import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	padding: 3rem 0;
	background-color: ${(props) => props.theme.colors.light};

	.algo-container {
		height: 100%;
		flex: 1;
	}
	.sidebar {
		width: fit-content;
		height: 100%;
	}
`;

export default MainContainer;
