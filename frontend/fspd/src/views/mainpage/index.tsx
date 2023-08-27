import React, {useEffect, useState} from 'react';

// Chakra imports
import { Box, Button, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/mainpage/components/Banner';
import StartupCard from 'components/card/StartupCard';
import Card from 'components/card/Card';

// Assets
import {getStartups} from "../../methods/getStartups";
import {Search} from "../../components/search/Search";

export interface Startup {
	id: string;
	img: string
	name: string
	market: string
	product: string
}

export default function MainPage() {
	const [startups, setStartups] = useState<Startup[] | []>([]);

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	useEffect(() => {
		getStartups().then((res) => setStartups(res))
	}, []);
	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(1)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
					<Banner />
					<Flex
						mt='45px'
						mb='20px'
						justifyContent='space-between'
						direction={{ base: 'column', md: 'row' }}
						align={{ base: 'start', md: 'center' }}>
						<Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
							Стартапы
						</Text>
						<Flex
							align='center'
							me='20px'
							ms={{ base: '24px', md: '0px' }}
							mt={{ base: '20px', md: '0px' }}>
							<Link
								color={textColorBrand}
								fontWeight='500'
								me={{ base: '34px', md: '44px' }}
								href='#'>
								AI
							</Link>
							<Link
								color={textColorBrand}
								fontWeight='500'
								me={{ base: '34px', md: '44px' }}
								href='#'>
								IT
							</Link>
							<Link
								color={textColorBrand}
								fontWeight='500'
								me={{ base: '34px', md: '44px' }}
								href='#'>
								Экология
							</Link>
							<Link color={textColorBrand} fontWeight='500' href='#'>
								Web3
							</Link>
						</Flex>

					</Flex>
					<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
					{startups.map(startup => (
						<StartupCard key={startup.id}
									 name={startup.name}
									 author={startup.product}
							// bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
									 image={startup.img}
							// @ts-ignore
									 presLinks={startup.ppt}
									 download={`/startup/${startup.id}`}
						/>))}
				</SimpleGrid>
				</Flex>
			</Grid>
		</Box>
	);
}
