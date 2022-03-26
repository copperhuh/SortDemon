import styled from "styled-components";

export const StyledHeader = styled.div`
	width: 100%;
	height: 12%;
	padding: 0 2rem;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.colors.dark};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: right;
	span {
		color: ${(props) => props.theme.colors.main};
		font-weight: 700;
		font-size: 3rem;
		padding-left: 2rem;
		letter-spacing: 0.5rem;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.btns {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${(props) => props.theme.colors.main};
		border: 0.24rem solid ${(props) => props.theme.colors.main};
		background-color: ${(props) => props.theme.colors.dark};
		padding: 0.3rem;
		margin-left: 0.8rem;
		border-radius: 100px;
		:hover {
			color: ${(props) => props.theme.colors.light};
			border: 0.24rem solid ${(props) => props.theme.colors.light};
			background-color: ${(props) => props.theme.colors.main};
		}
	}

	.switch-theme-btn {
		color: ${(props) => props.theme.colors.main};
		border: 0.24rem solid ${(props) => props.theme.colors.light};
		background-color: ${(props) => props.theme.colors.light};
		:hover {
			color: ${(props) => props.theme.colors.dark};
			border: 0.24rem solid ${(props) => props.theme.colors.main};
			background-color: ${(props) => props.theme.colors.main};
		}
	}

	@media (max-width: 970px) {
		span {
			position: initial;
			transform: none;
			flex: 1;
			text-align: left;
			padding: 0;
		}
	}
	@media (max-width: 550px) {
		span {
			flex: none;
			width: 100%;
			text-align: center;
			margin: 3rem 0 0.5rem;
		}
		button {
			margin: 0;
		}
		.btns {
			width: 80%;
			justify-content: space-evenly;
		}
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 15%;
	}
`;
