// Chakra imports
import { Box, Flex, Icon, Progress, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox';
import Menu from 'components/menu/MainMenu';
import React from 'react';
// Assets
import { MdOutlineCloudDone } from 'react-icons/md';

export function Success(props: { [x: string]: any }) {
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	const textColorSecondary = 'gray.400';
	const box = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Flex justifyContent='center' alignItems='center' mt={{ base: '10%', lg: '8%' }}>
			<Card mb={{ base: '0px', lg: '20px' }} alignItems='center' w='40%' h='300px'>
				<Box mt='10%'/>
				<IconBox
					mx='auto'
					h='100px'
					w='100px'
					icon={<Icon as={MdOutlineCloudDone} color={brandColor} h='46px' w='46px' />}
					bg={box}
				/>
				<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px'>
					Поздравляем!
				</Text>
				<Text color={textColorSecondary} fontSize='md' maxW={{ base: '100%', xl: '80%', '3xl': '60%' }} mx='auto'>
					Ваша анкета отправилась на сервер и скоро появится в каталоге
				</Text>
			</Card>
		</Flex>

	);
}
