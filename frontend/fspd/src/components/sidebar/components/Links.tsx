/* eslint-disable */

import { NavLink, useLocation } from 'react-router-dom';
// chakra imports
import {Box, Flex, HStack, Icon, Text, useColorModeValue} from '@chakra-ui/react';
import {MdAttachMoney, MdMoney, MdMoneyOff, MdOutlineMoney} from "react-icons/md";

export function SidebarLinks(props: {
	routes: RoutesType[];
}) {
	//   Chakra color mode
	let location = useLocation();
	let activeColor = useColorModeValue('gray.700', 'white');
	let inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
	let activeIcon = useColorModeValue('brand.500', 'white');
	let textColor = useColorModeValue('secondaryGray.500', 'white');
	let brandColor = useColorModeValue('brand.500', 'brand.400');

	const { routes } = props;

	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName: string) => {
		return location.pathname.includes(routeName);
	};

	// this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
	const createLinks = (
		routes: RoutesType[],
	) => {
		return (<>
			{routes.map(
				(
					route: RoutesType,
					index: number
				) => {
					// if (route.layout === '/admin' || route.layout === '/auth' || route.layout === '/rtl') {
					return (
						<NavLink key={index} to={route.path}>
							{route.icon ? (
								<Box>
									<HStack
										spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
										py='5px'
										ps='10px'>
										<Flex w='100%' alignItems='center' justifyContent='center'>
											<Box
												color={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
												me='18px'>
												{route.icon}
											</Box>
											<Text
												me='auto'
												color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
												fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
												{route.name}
											</Text>
										</Flex>
										<Box
											h='36px'
											w='4px'
											bg={activeRoute(route.path.toLowerCase()) ? brandColor : 'transparent'}
											borderRadius='5px'
										/>
									</HStack>
								</Box>
							) : (
								<Box>
									<HStack
										spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
										py='5px'
										ps='10px'>
										<Text
											me='auto'
											color={activeRoute(route.path.toLowerCase()) ? activeColor : inactiveColor}
											fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
											{route.name}
										</Text>
										<Box h='36px' w='4px' bg='brand.400' borderRadius='5px'/>
									</HStack>
								</Box>
							)}
						</NavLink>
					);
				}
			)}
			<a href='https://datalens.yandex/df7r7qezvd3c2' target='_blank'>
				{true ? (
					<Box>
						<HStack
							spacing='26px'
							py='5px'
							ps='10px'>
							<Flex w='100%' alignItems='center' justifyContent='center'>
								<Box
									color={textColor}
									me='18px'>
									<Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />
								</Box>
								<Text
									me='auto'
									color={textColor}
									fontWeight={'normal'}>
									Аналитика инвестора
								</Text>
							</Flex>
							<Box
								h='36px'
								w='4px'
								bg='transparent'
								borderRadius='5px'
							/>
						</HStack>
					</Box>
				) : (
					<Box>
						<HStack
							spacing='26px'
							py='5px'
							ps='10px'>
							<Text
								me='auto'
								color={inactiveColor}
								fontWeight={'normal'}>
								Аналитика инвестора
							</Text>
							<Box h='36px' w='4px' bg='brand.400' borderRadius='5px'/>
						</HStack>
					</Box>
				)}
			</a>
		</>)

	};
	//  BRAND
	return <>{createLinks(routes)}</>
}

export default SidebarLinks;
