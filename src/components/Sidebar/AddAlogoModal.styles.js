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
		height: 80vh;
		background-color: ${(props) => props.theme.colors.dark};
		color: ${(props) => props.theme.colors.light};
		overflow: auto;
		display: flex;
		flex-direction: column;
		padding: 2rem 3rem 0;

		&::-webkit-scrollbar {
			width: 10px;
		}
		&::-webkit-scrollbar-track {
			background: ${(props) => props.theme.colors.dark};
		}
		&::-webkit-scrollbar-thumb {
			width: 7px;
			background: ${(props) => props.theme.colors.light};
			border-radius: 5px;
		}
	}

	.btns {
		display: flex;
		width: 75%;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	h3 {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 900;
		letter-spacing: 1.5px;
	}

	.section {
		margin: 1rem 0.5rem;
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		/* border-bottom: 1px solid ${(props) => props.theme.colors.light};
		border-top: 1px solid ${(props) => props.theme.colors.light}; */
	}

	.algo-btn,
	.submit {
		background: ${(props) => props.theme.colors.light};
		color: ${(props) => props.theme.colors.dark};
		font-family: ${(props) => props.theme.fonts.main};
		border: 1px solid ${(props) => props.theme.colors.dark};
		padding: 0.5rem 1.5rem;
		margin: 0.4rem 0.4rem;
		font-size: 1rem;
		font-weight: 600;
		align-self: center;
		&:hover,
		&:focus {
			background: ${(props) => props.theme.colors.dark};
			color: ${(props) => props.theme.colors.light};
			border: 1px solid ${(props) => props.theme.colors.light};
		}
	}

	.active {
		background: ${(props) => props.theme.colors.dark};
		color: ${(props) => props.theme.colors.light};
		border: 1px solid ${(props) => props.theme.colors.light};
	}

	.submit {
		padding: 1rem 2.5rem;
		font-size: 1.7rem;
		font-weight: 700;
		letter-spacing: 2px;
		border-radius: 5px;
		/* align-self: flex-end; */
		margin: 1.5rem 1rem;
		&:disabled {
			background: ${(props) => props.theme.colors.light};
			color: ${(props) => props.theme.colors.dark};
			border: 1px solid ${(props) => props.theme.colors.dark};
			opacity: 0.5;
		}
	}
`;

export default ModalStyled;
