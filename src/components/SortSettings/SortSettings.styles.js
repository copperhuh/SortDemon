import styled, { css } from "styled-components";

export const StyledSortSettingsShown = styled.div`
	font-family: ${(props) => props.theme.fonts.main};
	background: ${(props) => props.theme.colors.dark};
	color: ${(props) => props.theme.colors.main};
	height: fit-content;
	width: 100%;
	.shuffle {
		grid-area: shuffle;
	}
	.restart {
		grid-area: restart;
	}
	.pause {
		grid-area: pause;
	}
	.start {
		grid-area: start;
	}
	.hide {
		grid-area: hide;
	}
	${(props) =>
		props.shown &&
		css`
			.container {
				font-weight: 900;
				font-size: 1.5rem;
				height: 100%;
				max-width: min(1200px, 100%);
				display: grid;
				grid-template: 2rem 1fr 1fr 2rem / 1fr 2rem 9fr 3rem 7fr 6rem 3fr 1rem 3fr;
				grid-template-areas:
					"hide . . . . . . . ."
					"hide . size . shuffle-type-buttons . shuffle . pause"
					"hide . speed . shuffle-type-buttons . restart . start"
					"hide . . . . . . . .";
			}
			div {
				width: 100%;
				height: 100%;
			}
			.hide {
				background: none;
				border: none;
				color: ${(props) => props.theme.colors.main};
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				&:hover {
					color: ${(props) => props.theme.colors.light};
					transform: scale(1.2);
				}
			}
			.size {
				grid-area: size;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.slider {
				width: 50%;
				color: ${(props) => props.theme.colors.main};
				& .MuiSlider-thumb {
					box-shadow: none !important;
				}
				& .MuiSlider-thumb:hover,
				.MuiSlider-thumb.Mui-focusVisible {
					box-shadow: 0 0 0 10px rgba(72, 132, 107, 0.3) !important;
				}
			}
			.speed {
				grid-area: speed;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.num-field {
				width: 3rem;
				font-size: 1.5rem;
				font-weight: 600;
				font-family: ${(props) => props.theme.fonts.main};
				color: ${(props) => props.theme.colors.main};
				background: none;
				border: none;
				border-bottom: 1px solid ${(props) => props.theme.colors.dark};
				&:focus,
				&:hover {
					outline: none;
					border-bottom: 1px solid
						${(props) => props.theme.colors.main};
				}
			}
			.shuffle-type-label {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.shuffle-type-buttons {
				grid-area: shuffle-type-buttons;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.shuffle-container {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.shuffle-btn {
				background: none;
				border: none;
				color: ${(props) => props.theme.colors.main};
				font-family: ${(props) => props.theme.fonts.main};
				font-size: 0.9rem;
				border: 1px solid ${(props) => props.theme.colors.main};
				padding: 0.5rem 1rem;

				&:hover {
					background: ${(props) => props.theme.colors.main};
					color: ${(props) => props.theme.colors.dark};
					border: 1px solid ${(props) => props.theme.colors.dark};
				}
			}
			.active {
				background: ${(props) => props.theme.colors.main};
				color: ${(props) => props.theme.colors.dark};
				border: 1px solid ${(props) => props.theme.colors.dark};
			}
			.cntrl-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0.5rem 0;
				button {
					background: ${(props) => props.theme.colors.main};
					border: none;
					color: ${(props) => props.theme.colors.dark};
					font-family: ${(props) => props.theme.fonts.main};
					border: 1px solid ${(props) => props.theme.colors.dark};
					font-size: 1.1rem;
					padding: 0.7rem 1.7rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
					&:hover {
						background: ${(props) => props.theme.colors.dark};
						color: ${(props) => props.theme.colors.main};
						border: 1px solid ${(props) => props.theme.colors.main};
					}
					svg {
						display: block;
					}
				}
			}
			@media (max-width: 1200px) {
				.container {
					padding: 1.5rem 0;
					box-sizing: border-box;
					gap: 1rem;
					grid-template: 1fr 1fr 1fr/ 1fr 3fr 3fr 3fr 3fr;
					grid-template-areas:
						"hide size size shuffle-type-buttons shuffle-type-buttons"
						"hide speed speed shuffle-type-buttons shuffle-type-buttons"
						"hide shuffle restart pause start";
				}
				.shuffle-container {
					padding: 0 4rem;
					box-sizing: border-box;
				}
				.cntrl-btn button {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
				}
			}
			@media (max-width: 960px) {
				.shuffle-container {
					padding: 0;
				}
				.slider {
					margin-left: 1rem;
				}
				.container {
					grid-template-areas:
						"size size size shuffle-type-buttons shuffle-type-buttons"
						"speed speed speed shuffle-type-buttons shuffle-type-buttons"
						"hide shuffle restart pause start";
					padding: 1.5rem;
				}
			}
			@media (max-width: 560px) {
				.container {
					grid-template: 1fr 1fr 2fr 1fr 1fr/ 1fr 1fr;
					grid-template-areas:
						"size size"
						"speed speed "
						"shuffle-type-buttons shuffle-type-buttons"
						"shuffle pause"
						"restart start"
						"hide hide";
				}
				.shuffle-container {
					padding: 0 5rem;
				}
			}
			@media (max-width: 400px) {
				.shuffle-container {
					padding: 0 2rem;
				}
			}
			@media (max-width: 300px) {
				.shuffle-container {
					padding: 0;
				}
				.num-field {
					width: 2rem;
				}
			}
		`}

	${(props) =>
		!props.shown &&
		css`
			.container {
				font-weight: 900;
				font-size: 1.5rem;
				height: 100%;
				max-width: min(1200px, 100%);
				display: flex;
				justify-content: left;
				padding: 1.5rem 0;
			}
			div {
				width: fit-content;
				height: 100%;
			}
			.hide {
				/* grid-area: hide; */
				background: none;
				border: none;
				color: ${(props) => props.theme.colors.main};
				display: flex;
				/* flex-direction: column; */
				align-items: center;
				justify-content: center;

				&:hover {
					color: ${(props) => props.theme.colors.light};
					transform: scale(1.2);
				}
			}
			.size,
			.speed,
			.shuffle-type-buttons {
				display: none;
			}
			.cntrl-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0.5rem 0.2rem;
				button {
					display: flex;
					align-items: center;
					background: ${(props) => props.theme.colors.dark};
					border: none;
					justify-content: center;
					color: ${(props) => props.theme.colors.main};
					font-family: ${(props) => props.theme.fonts.main};
					border: 1px solid ${(props) => props.theme.colors.main};
					font-size: 1.1rem;
					padding: 0.7rem 1.7rem;
					&:hover {
						background: ${(props) => props.theme.colors.main};
						color: ${(props) => props.theme.colors.dark};
						border: 1px solid ${(props) => props.theme.colors.dark};
					}
				}
			}
			@media (max-width: 600px) {
				.container {
					margin-top: 2rem;
					width: 100%;
					display: grid;
					grid-template: 1fr 1fr 1fr / 1fr 1fr;
					grid-template-areas:
						" shuffle pause"
						" restart start"
						"hide hide";
					gap: 2rem;
					padding: 2rem 2rem 0.5rem;
					box-sizing: border-box;
				}
				.cntrl-btn,
				.cntrl-btn button {
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					padding: 0;
				}
			}
			@media (max-width: 360px) {
				.container {
					gap: 1rem;
				}
			}
		`}
`;
