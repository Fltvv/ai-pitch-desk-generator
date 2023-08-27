// Chakra Imports
import {
	Button,
	Flex,
	Icon,
	useColorModeValue,
	useColorMode
} from '@chakra-ui/react';
// Custom Components
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import { SidebarResponsive } from 'components/sidebar/Sidebar';
import PropTypes from 'prop-types';
import React from 'react';
// Assets
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import routes from 'routes';
export  function Search(props: { secondary: boolean }) {
	const { secondary } = props;
	const { colorMode, toggleColorMode } = useColorMode();
	// Chakra Color Mode
	const navbarIcon = useColorModeValue('gray.400', 'white');
	let menuBg = useColorModeValue('white', 'navy.800');
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.700', 'brand.400');
	const ethColor = useColorModeValue('gray.700', 'white');
	const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
	const ethBg = useColorModeValue('secondaryGray.300', 'navy.900');
	const ethBox = useColorModeValue('white', 'navy.800');
	const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);
	const borderButton = useColorModeValue('secondaryGray.500', 'whiteAlpha.200');
	return (
		<Flex
			w={{ sm: '100%', md: 'auto' }}
			alignItems='center'
			flexDirection='row'
			bg={menuBg}
			flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
			p='10px'
			borderRadius='30px'
			boxShadow={shadow}>
			<SearchBar
				mb={() => {
					if (secondary) {
						return { base: '10px', md: 'unset' };
					}
					return 'unset';
				}}
				// me='10px'
				borderRadius='30px'
			/>
			{/*<Flex*/}
			{/*	bg={ethBg}*/}
			{/*	display={secondary ? 'flex' : 'none'}*/}
			{/*	borderRadius='30px'*/}
			{/*	ms='auto'*/}
			{/*	p='6px'*/}
			{/*	align='center'*/}
			{/*	me='6px'>*/}
			{/*</Flex>*/}
			{/*<SidebarResponsive routes={routes} />*/}

			{/*<Button*/}
			{/*	variant='no-hover'*/}
			{/*	bg='transparent'*/}
			{/*	p='0px'*/}
			{/*	minW='unset'*/}
			{/*	minH='unset'*/}
			{/*	h='18px'*/}
			{/*	w='max-content'*/}
			{/*	onClick={toggleColorMode}>*/}
			{/*	<Icon*/}
			{/*		me='10px'*/}
			{/*		h='18px'*/}
			{/*		w='18px'*/}
			{/*		color={navbarIcon}*/}
			{/*		as={colorMode === 'light' ? IoMdMoon : IoMdSunny}*/}
			{/*	/>*/}
			{/*</Button>*/}
			{/*<Menu>*/}
			{/*	<MenuButton p='0px'>*/}
			{/*		<Avatar*/}
			{/*			_hover={{ cursor: 'pointer' }}*/}
			{/*			color='white'*/}
			{/*			name='Adela Parkson'*/}
			{/*			bg='#11047A'*/}
			{/*			size='sm'*/}
			{/*			w='40px'*/}
			{/*			h='40px'*/}
			{/*		/>*/}
			{/*	</MenuButton>*/}
			{/*	<MenuList boxShadow={shadow} p='0px' mt='10px' borderRadius='20px' bg={menuBg} border='none'>*/}
			{/*		<Flex w='100%' mb='0px'>*/}
			{/*			<Text*/}
			{/*				ps='20px'*/}
			{/*				pt='16px'*/}
			{/*				pb='10px'*/}
			{/*				w='100%'*/}
			{/*				borderBottom='1px solid'*/}
			{/*				borderColor={borderColor}*/}
			{/*				fontSize='sm'*/}
			{/*				fontWeight='700'*/}
			{/*				color={textColor}>*/}
			{/*				👋&nbsp; Hey, Adela*/}
			{/*			</Text>*/}
			{/*		</Flex>*/}
			{/*		<Flex flexDirection='column' p='10px'>*/}
			{/*			<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius='8px' px='14px'>*/}
			{/*				<Text fontSize='sm'>Profile Settings</Text>*/}
			{/*			</MenuItem>*/}
			{/*			<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius='8px' px='14px'>*/}
			{/*				<Text fontSize='sm'>Newsletter Settings</Text>*/}
			{/*			</MenuItem>*/}
			{/*			<MenuItem*/}
			{/*				_hover={{ bg: 'none' }}*/}
			{/*				_focus={{ bg: 'none' }}*/}
			{/*				color='red.400'*/}
			{/*				borderRadius='8px'*/}
			{/*				px='14px'>*/}
			{/*				<Text fontSize='sm'>Log out</Text>*/}
			{/*			</MenuItem>*/}
			{/*		</Flex>*/}
			{/*	</MenuList>*/}
			{/*</Menu>*/}
		</Flex>
	);
}

Search.propTypes = {
	variant: PropTypes.string,
	fixed: PropTypes.bool,
	secondary: PropTypes.bool,
	onOpen: PropTypes.func
};
