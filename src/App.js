import React from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import storiesData from "./data/stories.js";
import Story from "./Story";

export default function App() {
	const stories = storiesData.map((story) => {
		return <Story key={story.handle} story={story} />;
	});

	return (
		<div className="main-container">
			<Header />
			<main className="app-container">{stories}</main>
			<Footer />
		</div>
	);
}
