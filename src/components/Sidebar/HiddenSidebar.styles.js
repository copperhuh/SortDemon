import styled from "styled-components";

const HiddenSidebarStyled = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: right;
	.sidebar-bg {
		height: 100%;
		width: fit-content;
		overflow: auto;
		background: ${(props) => props.theme.colors.light};
		padding-left: 1.5rem;
		position: relative;
		display: flex;
		opacity: 1 !important;
	}
	.close-sidebar {
		height: fit-content;
		position: sticky;
		top: 1.5rem;
		left: 0;
		width: fit-content;

		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		color: ${(props) => props.theme.colors.main};
		border: none;
		:hover {
			color: ${(props) => props.theme.colors.dark};
		}
	}
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.dark};
	}
	&::-webkit-scrollbar-thumb {
		width: 5px;
		background: ${(props) => props.theme.colors.main};
		border-radius: 5px;
	}
	@media (max-width: 450px) {
		.sidebar-bg {
			width: 100%;
		}
	}
	@media (max-width: 370px) {
		.sidebar-bg {
			padding: 0;
		}
	}
`;

export default HiddenSidebarStyled;
