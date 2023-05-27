import SimpleCard from '@/DTOs/SimpleCard';
import Project from '@/DTOs/Project';

import HTMLLogo from '@/assets/icons/html.svg';
import CSSLogo from '@/assets/icons/css.svg';
import BootstrapLogo from '@/assets/icons/bootstrap.svg';
import TailwindCSSLogo from '@/assets/icons/tailwindcss.svg';
import JavaScriptLogo from '@/assets/icons/javascript.svg';
import VueLogo from '@/assets/icons/vue.svg';
import PHPLogo from '@/assets/icons/php.svg';
import LaravelLogo from '@/assets/icons/laravel.svg';
import CPPLogo from '@/assets/icons/cpp.svg';
import JavaLogo from '@/assets/icons/java.svg';
import MySQLLogo from '@/assets/icons/mysql.svg';
import AndroidLogo from '@/assets/icons/android.svg';
import FirebaseLogo from '@/assets/icons/firebase.svg';
import GitLogo from '@/assets/icons/git.svg';
import GitHubLogo from '@/assets/icons/github.svg';
import VSCodeLogo from '@/assets/icons/vscode.svg';
import IntelliJIdeaLogo from '@/assets/icons/intellijidea.svg';
import CLionLogo from '@/assets/icons/clion.svg';
import PHPStormLogo from '@/assets/icons/phpstorm.svg';
import DataGripLogo from '@/assets/icons/datagrip.svg';
import WebStormLogo from '@/assets/icons/webstorm.svg';
import AndroidStudioLogo from '@/assets/icons/android-studio.svg';
import FigmaLogo from '@/assets/icons/figma.svg';

import ReactionTimerImage from '@/assets/imgs/projects/reaction-timer.png';
import RPSGameImage from '@/assets/imgs/projects/rps-game.png';
import AplikasiKasirImage from '@/assets/imgs/projects/aplikasi-kasir.png';
import GetAnimeQuoteImage from '@/assets/imgs/projects/get-anime-quote.png';
import SkenMathImage from '@/assets/imgs/projects/skenmath.png';
import SejarahkuImage from '@/assets/imgs/projects/sejarahku.png';
import Erpeelone58Image from '@/assets/imgs/projects/erpeelone58.png';
import BlogHubPasienImage from '@/assets/imgs/projects/blog-hub-pasien.png';
import PembayaranSPPImage from '@/assets/imgs/projects/pembayaran-spp.png';

export const skills = [
	new SimpleCard(HTMLLogo, 'HTML'),
	new SimpleCard(CSSLogo, 'CSS'),
	new SimpleCard(BootstrapLogo, 'Bootstrap'),
	new SimpleCard(TailwindCSSLogo, 'TailwindCSS'),
	new SimpleCard(JavaScriptLogo, 'Javascript'),
	new SimpleCard(VueLogo, 'Vue'),
	new SimpleCard(PHPLogo, 'PHP'),
	new SimpleCard(LaravelLogo, 'Laravel'),
	new SimpleCard(CPPLogo, 'C++'),
	new SimpleCard(JavaLogo, 'Java'),
	new SimpleCard(MySQLLogo, 'MySQL'),
	new SimpleCard(AndroidLogo, 'Android'),
	new SimpleCard(FirebaseLogo, 'Firebase'),
];

export const tools = [
	new SimpleCard(GitLogo, 'Git'),
	new SimpleCard(GitHubLogo, 'GitHub'),
	new SimpleCard(VSCodeLogo, 'VS Code'),
	new SimpleCard(IntelliJIdeaLogo, 'IntelliJ IDEA'),
	new SimpleCard(CLionLogo, 'CLion'),
	new SimpleCard(PHPStormLogo, 'PhpStorm'),
	new SimpleCard(DataGripLogo, 'DataGrip'),
	new SimpleCard(WebStormLogo, 'WebStorm'),
	new SimpleCard(AndroidStudioLogo, 'Android Studio'),
	new SimpleCard(FigmaLogo, 'Figma'),
];

export const projects = [
	new Project(
		PembayaranSPPImage,
		'project.pembayaran-spp.title',
		'project.pembayaran-spp.description',
		['PHP', 'MySQL', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/aplikasi-pembayaran-spp',
	),
	new Project(
		BlogHubPasienImage,
		'project.blog-hub-pasien.title',
		'project.blog-hub-pasien.description',
		['Laravel', 'MySQL', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/blog-hub-pasien',
	),
	new Project(
		ReactionTimerImage,
		'project.reaction-timer.title',
		'project.reaction-timer.description',
		['Vue', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/reaction-timer',
		'https://cecep-reaction-timer.vercel.app',
	),
	new Project(
		RPSGameImage,
		'project.rps-game.title',
		'project.rps-game.description',
		['HTML', 'Javascript'],
		'https://github.com/adiiaryasutaa/rps-game',
		'https://adiiaryasutaa.github.io/rps-game',
	),
	new Project(
		AplikasiKasirImage,
		'project.aplikasi-kasir.title',
		'project.aplikasi-kasir.description',
		['Java', 'Gson'],
		'https://github.com/adiiaryasutaa/aplikasi-kasir',
	),
	new Project(
		GetAnimeQuoteImage,
		'project.get-anime-quote.title',
		'project.get-anime-quote.description',
		['HTML', 'Javascript', 'API', 'TailwindCSS'],
		'https://github.com/adiiaryasutaa/get-anime-quote',
		'https://getanimequote.vercel.app',
	),
	new Project(
		SkenMathImage,
		'project.skenmath.title',
		'project.skenmath.description',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/skenmath',
		'https://skenmath.vercel.app',
	),
	new Project(
		SejarahkuImage,
		'project.sejarahku.title',
		'project.sejarahku.description',
		['HTML', 'CSS', 'Javascript'],
		'https://github.com/adiiaryasutaa/sejarahku',
		'https://adiiaryasutaa.github.io/sejarahku',
	),
	new Project(
		Erpeelone58Image,
		'project.erpeelone-58.title',
		'project.erpeelone-58.description',
		['HTML', 'CSS', 'Javascript', 'Bootstrap'],
		'https://github.com/adiiaryasutaa/erpeelone-58',
		'https://erpeelone58.vercel.app',
	),
];