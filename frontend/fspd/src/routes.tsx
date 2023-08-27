import { Icon } from '@chakra-ui/react';
import { MdPerson, MdHome, MdCreateNewFolder} from 'react-icons/md';

// Admin Imports
import MainPage from 'views/mainpage';
import StartupPage from 'views/startupPage';

// Auth Imports
import NewPitch from "./views/newPitch";
import {Catalog} from "./views/catalog";

const routes = [
	{
		name: 'Главная',
		path: '/main',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainPage
	},
	{
		name: 'Создать презентацию',
		path: '/new',
		icon: <Icon as={MdCreateNewFolder} width='20px' height='20px' color='inherit' />,
		component: NewPitch
	},
	{
		name: 'Каталог стартапов',
		path: '/catalog',
		icon: <Icon as={MdCreateNewFolder} width='20px' height='20px' color='inherit' />,
		component: Catalog
	},
	{
		name: 'Страница стартапа',
		path: '/startup/:id',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: StartupPage
	},
];

export default routes;
