import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	return (
		<div>
			<getLayout>
				{getLayout(<Component {...pageProps} />, pageProps)}
			</getLayout>
		</div>
	);
}
