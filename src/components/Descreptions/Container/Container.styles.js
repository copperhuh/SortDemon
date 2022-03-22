import styled from "styled-components";

const DescContainer = styled.div`
	max-width: 100%;
	padding: 0 10%;
	margin: auto;
	display: flex;
	background: ${(props) => props.theme.colors.dark};
	position: relative;

	.desc-list {
		width: fit-content;
		height: 100%;
	}

	.desc-content {
		width: 60%;
		height: 100%;
	}

	.scroll-top {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		padding: 0.5rem;
		height: fit-content;
		display: ${(props) => (props.buttonVisible ? "flex" : "none")};
		background: none;
		justify-content: center;
		align-items: center;
		border: 1px solid ${(props) => props.theme.colors.light};
		color: ${(props) => props.theme.colors.light};
		:hover {
			color: ${(props) => props.theme.colors.dark};
			background: ${(props) => props.theme.colors.light};
		}
	}
`;

export default DescContainer;
