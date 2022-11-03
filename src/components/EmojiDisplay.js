const EmojiDisplay = ({ symbol, title }) => {
	return (
		<>
			<div className="emoji-line">
				<div>{symbol}</div>
				<div>{title}</div>
			</div>
		</>
	);
};

export default EmojiDisplay;
