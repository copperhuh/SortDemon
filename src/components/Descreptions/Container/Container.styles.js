import styled from "styled-components";

const DescContainer = styled.div`
	max-width: min(90%, 1600px);
	margin: auto;
	display: flex;
	background: ${(props) => props.theme.colors.light};

	.desc-list {
		width: fit-content;
		height: 100%;
	}

	.desc-content {
		width: 60%;
		height: 100%;
	}
`;

export default DescContainer;
