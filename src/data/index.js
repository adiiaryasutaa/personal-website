import SimpleCard from '@/DTOs/SimpleCard';
import Project from '@/DTOs/Project';

export const skills = [
	new SimpleCard('src/assets/icons/html.svg', 'HTML'),
	new SimpleCard('src/assets/icons/css.svg', 'CSS'),
	new SimpleCard('src/assets/icons/bootstrap.svg', 'Bootstrap'),
	new SimpleCard('src/assets/icons/tailwindcss.svg', 'TailwindCSS'),
	new SimpleCard('src/assets/icons/javascript.svg', 'Javascript'),
	new SimpleCard('src/assets/icons/vue.svg', 'Vue'),
	new SimpleCard('src/assets/icons/php.svg', 'PHP'),
	new SimpleCard('src/assets/icons/laravel.svg', 'Laravel'),
	new SimpleCard('src/assets/icons/cpp.svg', 'C++'),
	new SimpleCard('src/assets/icons/java.svg', 'Java'),
	new SimpleCard('src/assets/icons/mysql.svg', 'MySQL'),
];

export const tools = [
	new SimpleCard('src/assets/icons/git.svg', 'Git'),
	new SimpleCard('src/assets/icons/vscode.svg', 'VS Code'),
	new SimpleCard('src/assets/icons/intellijidea.svg', 'IntelliJ IDEA'),
	new SimpleCard('src/assets/icons/phpstorm.svg', 'PhpStorm'),
	new SimpleCard('src/assets/icons/datagrip.svg', 'Data Grip'),
];

export const projects = [
	new Project(
		'src/assets/imgs/projects/reaction-timer.png',
		'Reaction Time',
		'Reaction Timer powered by Vue 3 and TailwindCSS',
		['Vue', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/reaction-timer',
		'https://cecep-reaction-timer.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/rps-game.png',
		'RPS Game',
		'A game I made, while waiting for the teacher to finish the meeting',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/rps-game',
		'https://adiiaryasutaa.github.io/rps-game',
	),
	new Project(
		null,
		'Aplikasi Kasir',
		'Aplikasi kasir',
		['Java', 'Gson'],
		'https://github.com/adiiaryasutaa/aplikasi-kasir',
	),
	new Project(
		'src/assets/imgs/projects/get-anime-quote.png',
		'Get Anime Quote',
		'Get cool anime quote',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/get-anime-quote',
		'https://getanimequote.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/skenmath.png',
		'SkenMath',
		'Belajar matematika untuk SMA/SMK',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/skenmath',
		'https://skenmath.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/sejarahku.png',
		'Sejarahku',
		'Sebuah website untuk mempelajari sejarah',
		['HTML', 'CSS', 'Javascript'],
		'https://github.com/adiiaryasutaa/sejarahku',
		'https://adiiaryasutaa.github.io/sejarahku',
	),
	new Project(
		'src/assets/imgs/projects/erpeelone58.png',
		'Erpeelone 58',
		'Official website XI RPL 1 | ERPEELONE',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/erpeelone-58',
		'https://erpeelone58.vercel.app',
	),
];