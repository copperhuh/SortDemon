import styled from "styled-components";

const SidebarStyled = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.dark};
	}
	&::-webkit-scrollbar-thumb {
		width: 3px;
		background: ${(props) => props.theme.colors.main};
		border-radius: 5px;
	}

	.sort-container {
		height: fit-content;
		width: 100%;
		display: flex;
		padding: 1rem 0;
		padding-left: 1rem;
		/* border-top: 1px solid ${(props) => props.theme.colors.main}; */
		margin-left: 0;
	}

	.btns {
		display: flex;
		width: 87%;
		height: 100%;
		justify-content: space-between;
	}

	button {
		background: ${(props) => props.theme.colors.main};
		border: none;
		font-family: ${(props) => props.theme.fonts.main};
		color: ${(props) => props.theme.colors.dark};
		text-transform: uppercase;
		font-size: 1.2rem;
		margin: 0.3rem;
		border: 1px solid ${(props) => props.theme.colors.main};

		&:hover {
			background: ${(props) => props.theme.colors.dark};
			color: ${(props) => props.theme.colors.main};
			border: 1px solid ${(props) => props.theme.colors.main};
		}
	}

	.sort-info-shortcut {
		padding: 0.5rem 1rem;
		flex: 1;
	}

	.sort-remove {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${(props) => props.theme.colors.dark};
		color: ${(props) => props.theme.colors.main};
		border: 1px solid ${(props) => props.theme.colors.main};

		&:hover {
			background: ${(props) => props.theme.colors.main};
			color: ${(props) => props.theme.colors.dark};
			border: 1px solid ${(props) => props.theme.colors.dark};
		}
	}

	.add-btn {
		padding: 0;
		margin: 0;
		border: none;
		background: ${(props) => props.theme.colors.dark};

		.sort-add {
			border: none;
			width: 70%;
			height: 100%;
			margin: 0 auto;
			background: ${(props) => props.theme.colors.dark};
			color: ${(props) => props.theme.colors.main};
			&:hover {
				color: ${(props) => props.theme.colors.light};
				transform: scale(1.2);
			}
		}
	}
`;

export default SidebarStyled;
