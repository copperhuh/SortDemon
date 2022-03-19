import styled, { css } from "styled-components";

export const StyledSortSettingsShown = styled.div`
	font-family: ${(props) => props.theme.fonts.main};
	background: ${(props) => props.theme.colors.dark};
	color: ${(props) => props.theme.colors.main};
	height: fit-content;
	width: 100%;
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
				grid-area: hide;
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
				width: 3em;
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
					&:hover {
						background: ${(props) => props.theme.colors.dark};
						color: ${(props) => props.theme.colors.main};
						border: 1px solid ${(props) => props.theme.colors.main};
					}
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
				padding: 0.5rem 0;
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
				flex-direction: column;
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
		`}
`;
