import myPhoto from '@/assets/img/adi-aryasuta.jpg';
import HtmlImage from '@/assets/icons/html.svg';
import CssImage from '@/assets/icons/css.svg';
import BootstrapImage from '@/assets/icons/bootstrap.svg';
import TailwindCssImage from '@/assets/icons/tailwindcss.svg';
import JavascriptImage from '@/assets/icons/javascript.svg';
import VueImage from '@/assets/icons/vue.svg';
import PhpImage from '@/assets/icons/php.svg';
import LaravelImage from '@/assets/icons/laravel.svg';
import JavaImage from '@/assets/icons/java.svg';
import CppImage from '@/assets/icons/cpp.svg';
import MySqlImage from '@/assets/icons/mysql.svg';
import GitImage from '@/assets/icons/git.svg';
import GithubImage from '@/assets/icons/github.svg';
import VSCodeImage from '@/assets/icons/vscode.svg';
import PhpStormImage from '@/assets/icons/phpstorm.svg';
import IntelliJIdeaImage from '@/assets/icons/intellijidea.svg';
import DataGripImage from '@/assets/icons/datagrip.svg';
import ReactionTimerProjectImage from '@/assets/img/projects/reaction-timer.png';
import RPSGameProjectImage from '@/assets/img/projects/rps-game.png';
import NoProjectImage from '@/assets/img/projects/no-image.png';
import GetAnimeQuoteProjectImage from '@/assets/img/projects/get-anime-quote.png';
import SkenMathProjectImage from '@/assets/img/projects/skenmath.png';
import SejarahkuProjectImage from '@/assets/img/projects/sejarahku.png';
import Erpeelone58ProjectImage from '@/assets/img/projects/erpeelone58.png';
import ConfusedCatImage from '@/assets/img/confused-cat.png';

export const photo = [myPhoto];

export const aboutMe = [
	`Hello everyone, my full name is I Gusti Ngurah Agung Adi Aryasuta, my friends call me Adi or Gung Adi. I was born in Denpasar, Bali on November 21, 2004. I currently live in Denpasar and study at Vocational High School 1 Denpasar majoring in Software Engineering. I am currently focusing on developing website and desktop applications and want to work as a freelancer.`,
	`I know programming since grade 9, at that time I learned the C++ programming language and at the same time it was the first programming language I learned. Then while studying C++ I also learned Java, when I was in grade 10 I started learning Web Programming until now. I started from learning HTML, CSS and Bootstrap then I continued with Javascript, PHP, Laravel and MySQL. Later when I graduate, I want to major in Information Engineering. I also want to get into mobile app development and make a game.`,
];

export const socialMedia = {
	github: 'https://github.com/adiiaryasutaa',
	linkedIn: 'https://www.linkedin.com/in/i-gusti-ngurah-agung-adi-aryasuta-32870723b',
	instagram: 'https://www.instagram.com/adiiaryasutaa',
	twitter: 'https://twitter.com/lolcecep',
};

export const skills = [
	{
		name: 'HTML',
		image: HtmlImage,
	},
	{
		name: 'CSS',
		image: CssImage,
	},
	{
		name: 'Bootstrap',
		image: BootstrapImage,
	},
	{
		name: 'TailwindCSS',
		image: TailwindCssImage,
	},
	{
		name: 'Javascript',
		image: JavascriptImage,
	},
	{
		name: 'Vue',
		image: VueImage,
	},
	{
		name: 'PHP',
		image: PhpImage,
	},
	{
		name: 'Laravel',
		image: LaravelImage,
	},
	{
		name: 'Java',
		image: JavaImage,
	},
	{
		name: 'C++',
		image: CppImage,
	},
	{
		name: 'MySQL',
		image: MySqlImage,
	},
];

export const tools = [
	{
		name: 'Git',
		image: GitImage,
	},
	{
		name: 'Github',
		image: GithubImage,
	},
	{
		name: 'Visual Studio Code',
		image: VSCodeImage,
	},
	{
		name: 'PhpStorm',
		image: PhpStormImage,
	},
	{
		name: 'IntelliJ IDEA',
		image: IntelliJIdeaImage,
	},
	{
		name: 'DataGrip',
		image: DataGripImage,
	},
];

export const projects = [
	{
		title: 'Reaction Timer',
		description: 'Reaction Timer powered by Vue 3 and TailwindCSS',
		image: ReactionTimerProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/reaction-timer',
		webLink: 'https://cecep-reaction-timer.vercel.app/',
		tags: ['Vue', 'TailwindCSS'],
	},
	{
		title: 'RPS Game',
		description: 'A game I made, while waiting for the teacher to finish the meeting',
		image: RPSGameProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/rps-game',
		webLink: 'https://adiiaryasutaa.github.io/rps-game/',
		tags: ['HTML', 'Javascript'],
	},
	{
		title: 'Aplikasi Kasir',
		description: 'Aplikasi kasir',
		image: NoProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/aplikasi-kasir',
		tags: ['Java', 'Gson'],
	},
	{
		title: 'Get Anime Quote',
		description: 'Get cool anime quote',
		image: GetAnimeQuoteProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/get-anime-quote',
		webLink: 'https://getanimequote.vercel.app/',
		tags: ['HTML', 'Javascript', 'API', 'TailwindCSS'],
	},
	{
		title: 'SkenMath',
		description: 'Belajar matematika untuk SMA/SMK',
		image: SkenMathProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/skenmath',
		webLink: 'https://skenmath.vercel.app/',
		tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
	},
	{
		title: 'Sejarahku',
		description: 'Sebuah website untuk mempelajari sejarah',
		image: SejarahkuProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/sejarahku',
		webLink: 'https://adiiaryasutaa.github.io/sejarahku/',
		tags: ['HTML', 'CSS', 'Javascript'],
	},
	{
		title: 'Erpeelone 58',
		description: 'Official website XI RPL 1 | ERPEELONE',
		image: Erpeelone58ProjectImage,
		githubLink: 'https://github.com/adiiaryasutaa/erpeelone-58',
		webLink: 'https://erpeelone58.vercel.app/',
		tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
	},
];

export const image404 = [ConfusedCatImage];
