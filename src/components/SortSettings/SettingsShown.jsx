import { Slider } from "@mui/material";
import { StyledSortSettingsShown } from "./SortSettings.styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import React, { useState } from "react";
import {
	doChangeSize,
	doChangeSortType,
	doChangeSpeed,
	doShuffle,
	doChangeSortingOngoing,
} from "../../redux/Actions";
import { connect } from "react-redux";

const SettingsShown = ({
	toggleShow,
	shuffle,
	size,
	speed,
	sortType,
	changeSize,
	changeSpeed,
	changeSortType,
	changeSortingOngoing,
}) => {
	const MAX = 500;
	const [settings, setSettings] = useState({
		size,
		speed,
		sortType,
	});

	const [show, setShow] = useState(true);

	const handleChange = (e) => {
		const val = parseFloat(e.target.value);
		if (Number.isInteger(val) && val >= 0 && val <= MAX) {
			setSettings((prevSettings) => ({
				...prevSettings,
				[e.target.name]: val,
			}));
			if (e.target.name === "size") {
				changeSize(val);
				shuffle();
			} else {
				changeSpeed(val);
			}
		}
	};

	const changeSortTypeState = (type) => {
		setSettings({ ...settings, sortType: type });
		changeSortType(type);
		shuffle();
	};

	const onStart = () => {
		changeSortingOngoing(true);
	};

	const onPause = () => {
		changeSortingOngoing(false);
	};

	const onReset = () => {
		changeSortingOngoing(false);
		shuffle();
	};

	return (
		<StyledSortSettingsShown shown={show}>
			<div className="container">
				<button
					className="hide"
					onClick={() => setShow((prev) => !prev)}
				>
					{show ? (
						<KeyboardArrowUpIcon sx={{ fontSize: 60 }} />
					) : (
						<KeyboardArrowDownIcon sx={{ fontSize: 60 }} />
					)}
				</button>
				<div className="size">
					SIZE
					<Slider
						className="slider"
						name="size"
						defaultValue={20}
						value={settings.size}
						onChange={handleChange}
						min={0}
						max={MAX}
						valueLabelDisplay="auto"
						aria-label="size"
						sx={{
							"& .MuiSlider-markLabel": {
								background: "none",
							},
						}}
					/>
					<input
						type="text"
						name="size"
						value={settings.size}
						onChange={handleChange}
						className="num-field"
					/>
				</div>
				<div className="speed">
					DELAY
					<Slider
						className="slider"
						name="speed"
						defaultValue={50}
						value={settings.speed}
						onChange={handleChange}
						min={0}
						max={MAX}
						valueLabelDisplay="auto"
						aria-label="speed"
					/>
					<input
						type="text"
						name="speed"
						value={settings.speed}
						onChange={handleChange}
						className="num-field"
					/>
				</div>
				<div className="shuffle-type-buttons">
					<div className="shuffle-type-label">SHUFFLE TYPE</div>

					<div className="shuffle-container">
						<button
							className={`shuffle-btn ${
								settings.sortType === "random" ? "active" : null
							}`}
							onClick={() => changeSortTypeState("random")}
						>
							RANDOM
						</button>
						<button
							className={`shuffle-btn ${
								settings.sortType === "nearly-sorted"
									? "active"
									: null
							}`}
							onClick={() => changeSortTypeState("nearly-sorted")}
						>
							NEARLY SORTED
						</button>
					</div>

					<div className="shuffle-container">
						<button
							className={`shuffle-btn ${
								settings.sortType === "few-unique"
									? "active"
									: null
							}`}
							onClick={() => changeSortTypeState("few-unique")}
						>
							FEW UNIQUE
						</button>
						<button
							className={`shuffle-btn ${
								settings.sortType === "reverse"
									? "active"
									: null
							}`}
							onClick={() => changeSortTypeState("reverse")}
						>
							REVERSE
						</button>
					</div>
				</div>
				<div className="shuffle cntrl-btn">
					<button onClick={shuffle}>
						<ShuffleIcon sx={{ fontSize: 30 }} />
						SHUFFLE
					</button>
				</div>
				<div className="restart cntrl-btn">
					<button onClick={onReset}>
						<RestartAltIcon sx={{ fontSize: 30 }} />
						RESET
					</button>
				</div>
				<div className="pause cntrl-btn">
					<button onClick={onPause}>
						<PauseIcon sx={{ fontSize: 30 }} />
						PAUSE
					</button>
				</div>
				<div className="start cntrl-btn">
					<button onClick={onStart}>
						<PlayArrowIcon sx={{ fontSize: 30 }} />
						START
					</button>
				</div>
			</div>
		</StyledSortSettingsShown>
	);
};

const settingsActions = (dispatch) => ({
	changeSpeed: (speed) => dispatch(doChangeSpeed(speed)),
	changeSize: (size) => dispatch(doChangeSize(size)),
	changeSortType: (sortType) => dispatch(doChangeSortType(sortType)),
	changeSortingOngoing: (sortingOngoing) =>
		dispatch(doChangeSortingOngoing(sortingOngoing)),
	shuffle: () => dispatch(doShuffle),
});

const setttingsProps = (state) => ({
	size: state.size,
	sortType: state.sortType,
	speed: state.speed,
});

export default connect(setttingsProps, settingsActions)(SettingsShown);
