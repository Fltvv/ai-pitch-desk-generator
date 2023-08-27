// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import {ReactComponent as PitchLogo} from '../../../assets/img/layout/pitch-logo.svg'

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<PitchLogo h='26px' w='175px' my='32px' color={logoColor} />
			<div style={{height: '20pt'}} ></div>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
