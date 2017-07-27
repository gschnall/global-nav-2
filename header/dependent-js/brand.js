/* Tooling
/* ========================================================================== */

import { $assign as $, $CustomEvent, $fetch, $replaceAll } from 'domose';

/* Brand
/* ========================================================================== */

const prefix = 'esri-header-brand';

export default () => {
	/* Brand: Image
	/* ====================================================================== */

	const $targetImage = $(
		document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
		{ class: `${prefix}-image` }
	);

	/* Brand
	/* ====================================================================== */

	const $target = $('a', { class: prefix, id: prefix },
		$targetImage
	);

	// On Click
	$target.addEventListener('click', (event) => {
		$dispatch($target, 'header:click:brand', { event });
	});

	/* Brand: On Update
	/* ====================================================================== */

	$target.addEventListener('header:update:brand', ({ detail }) => {
		$($target, { href: detail.href, aria: { label: detail.label } });

		$($targetImage, { viewBox: `0 0 ${detail.width} ${detail.height}` });

		$replaceAll($targetImage,
			...detail.image.map(
				(d) => $(
					document.createElementNS('http://www.w3.org/2000/svg', 'path'),
					{ d }
				)
			)
		);
	});

	return $target;
}

/* Dispatch Helper
/* ========================================================================== */

function $dispatch(target, type, detail) {
	target.dispatchEvent($CustomEvent(type, { bubbles: true, detail }));
}
