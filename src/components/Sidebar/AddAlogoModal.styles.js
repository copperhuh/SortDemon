import styled from "styled-components";

const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	.modal-container {
		max-width: min(90%, 900px);
		height: 90vh;
		background-color: ${(props) => props.theme.colors.dark};
		color: ${(props) => props.theme.colors.light};
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 2rem 5rem 2rem 2rem;
		transition: all 0.5s;
		&::-webkit-scrollbar {
			width: 10px;
		}
		&::-webkit-scrollbar-track {
			background: ${(props) => props.theme.colors.dark};
		}
		&::-webkit-scrollbar-thumb {
			width: 7px;
			background: ${(props) => props.theme.colors.main};
			border-radius: 5px;
		}
	}

	button {
		background: none;
		color: ${(props) => props.theme.colors.light};
		border: none;
		font-family: ${(props) => props.theme.fonts.main};
		font-size: 1.3rem;
	}

	.section-title {
		margin: 0 2.2rem;
		position: relative;
	}
	svg {
		position: absolute;
		right: -2rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.btns {
		/* display: flex;
		flex-direction: column;
		align-items: flex-start; */
		list-style: none;
		margin-left: 1rem;
		/* margin-bottom: 1rem; */
	}
	.algo-btn {
		margin: 0.3rem 0;
	}
	button:hover,
	.active {
		color: ${(props) => props.theme.colors.main};
	}
	@media (max-width: 630px) {
		.section-title {
			margin: 0 2.4rem;
		}
	}
	@media (max-width: 490px) {
		.modal-container {
			padding: 0 1rem;
			width: 95vw;
			padding-left: 6rem;
		}
		button {
			text-align: left;
		}
	}
	@media (max-width: 430px) {
		.modal-container {
			padding-left: 5rem;
		}
	}
	@media (max-width: 400px) {
		.modal-container {
			padding-left: 3rem;
		}
	}
	@media (max-width: 350px) {
		.modal-container {
			padding-left: 1rem;
		}
	}
`;

export default ModalStyled;
