import styled from "styled-components";

const InfoModalStyled = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.modal-bg {
		padding: 0.5rem 5rem 1rem;
		width: min(900px, 95%);
		max-height: 99vh;
		background: ${(props) => props.theme.colors.dark};
		position: relative;
		display: flex;
		flex-direction: column;
		align-content: center;
		color: ${(props) => props.theme.colors.light};
		overflow: auto;
		margin: 0;
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
		background: none;
		color: ${(props) => props.theme.colors.main};
		border: none;
		position: absolute;
		top: 1rem;
		right: 1rem;
		:hover {
			transform: scale(1.3);
		}
	}
	p {
		line-height: 1.6;
		margin: 0;
	}
	h3 {
		text-align: center;
		font-size: 2rem;
	}
	h4 {
		font-size: 1.3rem;
		padding: 0;
		margin: 2rem 0 0.4rem;
	}
	.center {
		text-align: center;
		margin: 0;
	}
	.margin-top {
		margin-top: 2rem;
	}
	.bold,
	.center {
		font-weight: 600;
		color: ${(props) => props.theme.colors.main};
	}
	h4,
	h3,
	.center {
		text-transform: uppercase;
	}
	@media (max-width: 500px) {
		.modal-bg {
			padding: 0.5rem 3rem 5rem;
		}
		p {
			font-size: 0.8rem;
		}
	}
`;

export default InfoModalStyled;
