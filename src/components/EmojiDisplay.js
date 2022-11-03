const EmojiDisplay = ({ symbol, title }) => {
	return (
		<>
			<div className="emoji-line">
				<div>{symbol}</div>
				<div>{title}</div>
				<div className="copy-link">click to copy</div>
			</div>
		</>
	);
};

export default EmojiDisplay;
