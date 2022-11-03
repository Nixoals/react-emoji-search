import EmojiDisplay from './EmojiDisplay';

const EmojiList = ({ title, symbol }) => {
	return (
		<>
			<EmojiDisplay title={title} symbol={symbol}></EmojiDisplay>
		</>
	);
};

export default EmojiList;
