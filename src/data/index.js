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
	new SimpleCard('src/assets/icons/android.svg', 'Android'),
	new SimpleCard('src/assets/icons/firebase.svg', 'Firebase'),
];

export const tools = [
	new SimpleCard('src/assets/icons/git.svg', 'Git'),
	new SimpleCard('src/assets/icons/github.svg', 'GitHub'),
	new SimpleCard('src/assets/icons/vscode.svg', 'VS Code'),
	new SimpleCard('src/assets/icons/intellijidea.svg', 'IntelliJ IDEA'),
	new SimpleCard('src/assets/icons/clion.svg', 'CLion'),
	new SimpleCard('src/assets/icons/phpstorm.svg', 'PhpStorm'),
	new SimpleCard('src/assets/icons/datagrip.svg', 'DataGrip'),
	new SimpleCard('src/assets/icons/webstorm.svg', 'WebStorm'),
	new SimpleCard('src/assets/icons/android-studio.svg', 'Android Studio'),
	new SimpleCard('src/assets/icons/figma.svg', 'Figma'),
];

export const projects = [
	new Project(
		'src/assets/imgs/projects/reaction-timer.png',
		'project.reaction-timer.title',
		'project.reaction-timer.description',
		['Vue', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/reaction-timer',
		'https://cecep-reaction-timer.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/rps-game.png',
		'project.rps-game.title',
		'project.rps-game.description',
		['HTML', 'Javascript'],
		'https://github.com/adiiaryasutaa/rps-game',
		'https://adiiaryasutaa.github.io/rps-game',
	),
	new Project(
		'src/assets/imgs/projects/aplikasi-kasir.png',
		'project.aplikasi-kasir.title',
		'project.aplikasi-kasir.description',
		['Java', 'Gson'],
		'https://github.com/adiiaryasutaa/aplikasi-kasir',
	),
	new Project(
		'src/assets/imgs/projects/get-anime-quote.png',
		'project.get-anime-quote.title',
		'project.get-anime-quote.description',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/get-anime-quote',
		'https://getanimequote.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/skenmath.png',
		'project.skenmath.title',
		'project.skenmath.description',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/skenmath',
		'https://skenmath.vercel.app',
	),
	new Project(
		'src/assets/imgs/projects/sejarahku.png',
		'project.sejarahku.title',
		'project.sejarahku.description',
		['HTML', 'CSS', 'Javascript'],
		'https://github.com/adiiaryasutaa/sejarahku',
		'https://adiiaryasutaa.github.io/sejarahku',
	),
	new Project(
		'src/assets/imgs/projects/erpeelone58.png',
		'project.erpeelone-58.title',
		'project.erpeelone-58.description',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/erpeelone-58',
		'https://erpeelone58.vercel.app',
	),
];