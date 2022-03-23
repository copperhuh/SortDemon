import React, { useEffect, useState } from "react";

const useHeight = (ref) => {
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current !== null)
			setHeight(window.getComputedStyle(ref.current).height);
	}, [ref]);

	return height;
};

export default useHeight;
