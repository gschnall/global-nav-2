// tooling
import $ from './lib/create-element';
import $apps from './render-apps';
import $user from './render-user';

// render client container
export default (apps, user) => $('div', { class: 'esri-gnav-client' }, [].concat(
	apps ? $apps(apps) : [],
	user ? $user(user) : [],
));
