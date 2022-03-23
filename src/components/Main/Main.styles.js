import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	min-height: 100vh;
	padding: 3rem 0;
	background-color: ${(props) => props.theme.colors.light};
	position: relative;

	.algo-container {
		min-height: 100%;
		flex: 1;
	}
	.sidebar {
		width: fit-content;
		height: 100%;
	}
	.open-sidebar {
		height: fit-content;
		position: sticky;
		top: 2rem;
		right: 2rem;
		padding: 0.3rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${(props) => props.theme.colors.light};
		color: ${(props) => props.theme.colors.main};
		border: 1px solid ${(props) => props.theme.colors.main};
		float: left;
		:hover {
			background: ${(props) => props.theme.colors.main};
			color: ${(props) => props.theme.colors.light};
			border: 1px solid ${(props) => props.theme.colors.light};
		}
	}
	/* @media (max-width: 450px) {
		height: ${(props) => props.height};
	} */
`;

export default MainContainer;
