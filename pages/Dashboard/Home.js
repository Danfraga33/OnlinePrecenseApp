import { useState } from 'react';
import AppLayout from '@/components/Applayout';

function Home(props) {
	const [topic, setTopic] = useState('');

	async function handleFetch() {
		const response = await fetch('/api/hello', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(topic),
		});
		if (response.ok) {
			const json = await response.json();
			console.log(json);
		} else {
			console.error('Error:', response.statusText);
		}
	}

	return (
		<div>
			<label htmlFor="topic">Topic</label>
			<input
				id="topic"
				placeholder="topic"
				value={topic}
				onChange={(e) => setTopic(e.target.value)}
			></input>
			<button onClick={handleFetch}>Generate</button>
		</div>
	);
}

Home.getLayout = function getLayout(page, pageProps) {
	return (
		<div>
			<AppLayout {...pageProps}>{page}</AppLayout>
		</div>
	);
};

export const getServerSideProps = () => {
	return {
		props: {},
	};
};

export default Home;
