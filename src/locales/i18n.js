import { createI18n } from 'vue-i18n';
import en from './en.json';
import id from './id.json';

function loadMessages() {
	const locales = [{ en: en }, { id: id }];
	let messages = {};

	locales.forEach(lang => {
		const key = Object.keys(lang);
		messages[key] = lang[key];
	});

	return messages;
}

export default createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: loadMessages(),
});