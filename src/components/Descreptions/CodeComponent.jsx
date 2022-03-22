import { CopyBlock, obsidian } from "react-code-blocks";

export default function CodeComponent(props) {
	return (
		<CopyBlock text={props.code} language="javascript" theme={obsidian} />
	);
}
