import styled from "styled-components";

const HiddenDescListStyled = styled.div`
	width: 100vw;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	.modal-bg {
		background: ${(props) => props.theme.colors.dark};
		width: fit-content;
		height: 100%;
		overflow-y: auto;
		position: relative;
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
	}
	.close-modal {
		position: absolute;
		right: 1rem;
		top: 1rem;
		color: ${(props) => props.theme.colors.main};
		background: none;
		border: none;
		:hover {
			color: ${(props) => props.theme.colors.light};
		}
	}
	@media (max-width: 370px) {
		.modal-bg {
			width: 100%;
		}
	}
`;

export default HiddenDescListStyled;
