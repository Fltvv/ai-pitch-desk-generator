import {Box, Flex, Progress, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useColorModeValue} from '@chakra-ui/react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';
// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { AndroidLogo, AppleLogo, WindowsLogo } from 'components/icons/Icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
// Assets

type RowObj = {
	color: string;
	lang: any;
	link: string;
};

const MockData: RowObj[] = [
	{
		color: 'Светлый',
		lang: 'Русский',
		link: "https://aislide.ru/ppt/1_white_ru.pptx",
	},
	{
		color: 'Светлый',
		lang: 'Английский',
		link: "https://aislide.ru/ppt/1_white_en.pptx",
	},
	{
		color: 'Темный',
		lang: 'Русский',
		link: "https://aislide.ru/ppt/1_black_ru.pptx",
	},
	{
		color: 'Темный',
		lang: 'Английский',
		link: "https://aislide.ru/ppt/1_black_en.pptx",
	},
]

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export function StartupTable(props: { tableData: any }) {
	const { tableData } = props;
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');


	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
					Презентации
				</Text>
			</Flex>
			<Box>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
						<Tr>
							<Th pe='10px'
								borderColor={borderColor}>
								<Flex
									justifyContent='space-between'
									align='center'
									fontSize={{ sm: '10px', lg: '12px' }}
									color='gray.400'>
									Язык
								</Flex>
							</Th>
							<Th pe='10px'
								borderColor={borderColor}>
								<Flex
									justifyContent='space-between'
									align='center'
									fontSize={{ sm: '10px', lg: '12px' }}
									color='gray.400'>
									Ссылка
								</Flex>
							</Th>
							<Th pe='10px'
								borderColor={borderColor}>
								<Flex
									justifyContent='space-between'
									align='center'
									fontSize={{ sm: '10px', lg: '12px' }}
									color='gray.400'>
									Цвет
								</Flex>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{/*@ts-ignore*/}
						{tableData && tableData.map(row => {
							return(
								<Tr>
									<Td
										key={row.link}
										fontSize={{ sm: '14px' }}
										minW={{ sm: '150px', md: '200px', lg: 'auto' }}
										borderColor='transparent'>
										<Flex align='center'>
											<Text me='10px' color={textColor} fontSize='sm' fontWeight='700'>
												{row.color === 'white' ? 'Светлый' : "Тёмный"}
											</Text>
										</Flex>
									</Td>
									<Td
										key={row.link}
										fontSize={{ sm: '14px' }}
										minW={{ sm: '150px', md: '200px', lg: 'auto' }}
										borderColor='transparent'>
										<Flex align='center'>
											<Text me='10px' color={textColor} fontSize='sm' fontWeight='700'>
												{row.lang === 'ru' ? 'Русский' : "Английский"}
											</Text>
										</Flex>
									</Td>
									<Td
										key={row.link}
										fontSize={{ sm: '14px' }}
										minW={{ sm: '150px', md: '200px', lg: 'auto' }}
										borderColor='transparent'>
										<Flex align='center'>
											<Text me='10px' color={textColor} fontSize='sm' fontWeight='700'>
												<a href={row.link} download target='_blank'>
													Скачать
												</a>
											</Text>
										</Flex>
									</Td>
								</Tr>
							)
						})}
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
}
