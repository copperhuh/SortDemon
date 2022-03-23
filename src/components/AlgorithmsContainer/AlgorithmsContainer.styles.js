import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	min-height: 100%;
	padding: 2rem;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.colors.light};
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
	gap: ${(props) => (props.len > 6 ? "1rem" : "2rem")};
	@media (max-width: 450px) {
		width: 100%;
		grid-template-columns: 1fr;
		padding: 3rem 0;
	}
`;

export default Container;
