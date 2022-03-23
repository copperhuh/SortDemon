import styled from "styled-components";

const DescContainer = styled.div`
	width: 100%;
	padding: 0 1rem 0 0;
	margin: auto;
	display: flex;
	background: ${(props) => props.theme.colors.dark};
	position: relative;
	justify-content: center;

	.desc-list {
		width: fit-content;
		height: 100%;
		position: sticky;
		position: -webkit-sticky;
		top: 0;
	}

	.desc-content {
		max-width: min(950px, 95vw);
		height: 100%;
	}

	.scroll-top,
	.open-list {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		padding: 0.5rem;
		height: fit-content;
		display: ${(props) => (props.buttonVisible ? "flex" : "none")};
		background: ${(props) => props.theme.colors.dark};
		justify-content: center;
		align-items: center;
		border: 1px solid ${(props) => props.theme.colors.main};
		color: ${(props) => props.theme.colors.main};
		:hover {
			color: ${(props) => props.theme.colors.dark};
			background: ${(props) => props.theme.colors.main};
		}
	}
	.open-list {
		display: flex;
		margin: 2rem 0;
		top: 5rem;
		left: 5rem;
		z-index: 1;
		width: fit-content;
		position: sticky;
		float: left;
	}
	@media (max-width: 900px) {
		.open-list {
			left: 0;
			border-left: none;
		}
		svg {
			margin: 0;
			display: block;
		}
	}
	@media (max-width: 600px) {
		margin: 0;
	}
`;

export default DescContainer;
