import AppLayout from '@/components/Applayout';
import React from 'react';

function Blog() {
	return (
		<div>
			<div>this is the blog page</div>
		</div>
	);
}

Blog.getLayout = function getLayout(page, pageProps) {
	return (
		<div>
			<AppLayout {...pageProps}>{page}</AppLayout>
		</div>
	);
};

export default TokenTopup;
