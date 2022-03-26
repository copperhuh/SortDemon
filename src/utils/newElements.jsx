export default function newElements(items, max) {
	return (
		<>
			{items.map((el, inx) => {
				return (
					<div
						key={inx}
						className="node-container"
						style={{ width: `calc(${(1 / max) * 100}% )` }}
					>
						<div
							className={`node-coloured ${
								el.active ? "active" : null
							}`}
							style={{ height: `${(el.val * 100) / max}%` }}
						></div>
					</div>
				);
			})}
		</>
	);
}
