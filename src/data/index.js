import SimpleCardDTO from '@/dto/SimpleCardDTO';
import ProjectDTO from '@/dto/ProjectDTO';

export const skills = [
	new SimpleCardDTO('src/assets/icons/html.svg', 'HTML'),
	new SimpleCardDTO('src/assets/icons/css.svg', 'CSS'),
	new SimpleCardDTO('src/assets/icons/bootstrap.svg', 'Bootstrap'),
	new SimpleCardDTO('src/assets/icons/tailwindcss.svg', 'TailwindCSS'),
	new SimpleCardDTO('src/assets/icons/javascript.svg', 'Javascript'),
	new SimpleCardDTO('src/assets/icons/vue.svg', 'Vue'),
	new SimpleCardDTO('src/assets/icons/php.svg', 'PHP'),
	new SimpleCardDTO('src/assets/icons/laravel.svg', 'Laravel'),
	new SimpleCardDTO('src/assets/icons/cpp.svg', 'C++'),
	new SimpleCardDTO('src/assets/icons/java.svg', 'Java'),
	new SimpleCardDTO('src/assets/icons/mysql.svg', 'MySQL'),
];

export const tools = [
	new SimpleCardDTO('src/assets/icons/git.svg', 'Git'),
	new SimpleCardDTO('src/assets/icons/vscode.svg', 'VS Code'),
	new SimpleCardDTO('src/assets/icons/intellijidea.svg', 'IntelliJ IDEA'),
	new SimpleCardDTO('src/assets/icons/phpstorm.svg', 'PhpStorm'),
	new SimpleCardDTO('src/assets/icons/datagrip.svg', 'Data Grip'),
];

export const projects = [
	new ProjectDTO(
		'src/assets/imgs/projects/reaction-timer.png',
		'Reaction Time',
		'Reaction Timer powered by Vue 3 and TailwindCSS',
		['Vue', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/reaction-timer',
		'https://cecep-reaction-timer.vercel.app',
	),
	new ProjectDTO(
		'src/assets/imgs/projects/rps-game.png',
		'RPS Game',
		'A game I made, while waiting for the teacher to finish the meeting',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/rps-game',
		'https://adiiaryasutaa.github.io/rps-game',
	),
	new ProjectDTO(
		null,
		'Aplikasi Kasir',
		'Aplikasi kasir',
		['Java', 'Gson'],
		'https://github.com/adiiaryasutaa/aplikasi-kasir',
	),
	new ProjectDTO(
		'src/assets/imgs/projects/get-anime-quote.png',
		'Get Anime Quote',
		'Get cool anime quote',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/get-anime-quote',
		'https://getanimequote.vercel.app',
	),
	new ProjectDTO(
		'src/assets/imgs/projects/skenmath.png',
		'SkenMath',
		'Belajar matematika untuk SMA/SMK',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/skenmath',
		'https://skenmath.vercel.app',
	),
	new ProjectDTO(
		'src/assets/imgs/projects/sejarahku.png',
		'Sejarahku',
		'Sebuah website untuk mempelajari sejarah',
		['HTML', 'CSS', 'Javascript'],
		'https://github.com/adiiaryasutaa/sejarahku',
		'https://adiiaryasutaa.github.io/sejarahku',
	),
	new ProjectDTO(
		'src/assets/imgs/projects/erpeelone58.png',
		'Erpeelone 58',
		'Official website XI RPL 1 | ERPEELONE',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/erpeelone-58',
		'https://erpeelone58.vercel.app',
	),
];