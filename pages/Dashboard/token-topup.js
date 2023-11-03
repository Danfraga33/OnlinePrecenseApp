import AppLayout from '@/components/Applayout';
import React from 'react';

function TokenTopup() {
	return (
		<div>
			<div>this is the token-topup page</div>
		</div>
	);
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
	return (
		<div>
			<AppLayout {...pageProps}>{page}</AppLayout>
		</div>
	);
};

export default TokenTopup;
