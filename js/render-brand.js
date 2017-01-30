// tooling
import $ from './lib/create-element';

// render brand element
export default (brand) => $('a', { class: 'esri-gnav-link esri-gnav-brand', href: brand.href }, [
	$('svg', { class: 'esri-gnav-brand-svg', ariaLabel: brand.label }, [
		$('use', { href: brand.image })
	])
]);