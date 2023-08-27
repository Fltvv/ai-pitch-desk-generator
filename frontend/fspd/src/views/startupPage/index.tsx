// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/startupPage/components/Banner';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStartup} from "../../methods/getStartup";
import {StartupTable} from "./components/StartupTable";

interface Ppt {
	color: string,
	lang: string,
	link: string,
}

interface Startup {
	id:string,
	img:string,
	img_market:string,
	img_name:string,
	img_product:string,
	market:string,
	name:string,
	ppt_black_en:string,
	ppt_black_ru:string,
	ppt_white_en:string,
	ppt_white_ru:string,
	product:string
	ppt: Ppt[]
}

export default function StartupPage() {
	//@ts-ignore
	const [startup, setStartup] = useState<Startup>({});
	const params = useParams()
	useEffect(() => {
		// @ts-ignore
		getStartup(params?.id).then((res) => {
			setStartup(res[0])
		})
	}, []);
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={startup.img}
					name={startup.name}
					job={startup.product}
					posts='17'
					followers='9.7k'
					following='274'
				/>
				<StartupTable tableData={startup.ppt}/>
			</Grid>
		</Box>
	);
}

