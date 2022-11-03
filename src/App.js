import data from './data.json';
import { useState } from 'react';
import './App.css';

import EmojiList from './components/EmojiList';

function App() {
	const [search, setSearch] = useState('');

	return (
		<>
			<header>
				<h1>😎 Emoji Search 😎</h1>
			</header>

			<div className="emoji-search">
				<input
					onChange={(search) => {
						setSearch(search.target.value);
					}}
					type={'text'}
					placeholder="what emoji are you looking for ?"
					value={search}
				></input>
			</div>
			<section className="emoji-container">
				{!search &&
					data.slice(0, 18).map((emoji, index) => {
						return <EmojiList key={index} title={emoji.title} symbol={emoji.symbol}></EmojiList>;
					})}
				{search &&
					data.map((emoji, index) => {
						if (emoji.keywords.includes(search)) {
							return <EmojiList key={index} title={emoji.title} symbol={emoji.symbol}></EmojiList>;
						}
						return null;
					})}
				<div className="end-of-list">
					<div>"..."</div>
				</div>
			</section>
		</>
	);
}

export default App;
