import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Popover, Button, Whisper } from "rsuite/";

const speaker = (
<Popover title="Geeks">
	<p>Hi! Welcome to GeeksforGeeks</p>
</Popover>
);

const CustomWhisper = ({ placement }) => (
<Whisper
	placement={placement}
	trigger="click"
	controlId={`control-id-${placement}`}
	speaker={speaker}
>
	<Button style={{ marginRight: 10 }}>
		{placement}</Button>
</Whisper>
);

export default function App() {
return (
	<center>
	<div style={{ padding: 20 }}>
		<h2>GeeksforGeeks</h2>
		<h4 style={{ color: "green" }}>
			React Suite Popover Placement</h4>

		<div
		style={{
			padding: 30,
			margin: 20,
			backgroundColor: "lightgreen",
			maxWidth: 1030,
		}}
		>
		<CustomWhisper placement="left" />
		<CustomWhisper placement="leftStart" />
		<CustomWhisper placement="leftEnd" />
		<CustomWhisper placement="right" />
		<CustomWhisper placement="rightStart" />
		<CustomWhisper placement="rightEnd" />
		<CustomWhisper placement="top" />
		<CustomWhisper placement="topStart" />
		<CustomWhisper placement="topEnd" />
		<CustomWhisper placement="bottom" />
		<CustomWhisper placement="bottomStart" />
		<CustomWhisper placement="bottomEnd" />
		</div>
	</div>
	</center>
);
}
