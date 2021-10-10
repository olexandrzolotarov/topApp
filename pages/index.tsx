import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';
import { Htag, Rating, Button, P, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Абракадабра!</Htag>
			<Htag tag="h2">Абракадабра!</Htag>
			<Htag tag="h3">Абракадабра!</Htag>
			<Button appearence="primary" arrow="right">Кнопка!</Button>
			<Button appearence="ghost" arrow="down">Кнопка!</Button>
			<P size="small">Small Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quos!</P>
			<P size="middle">Middle Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quos!</P>
			<P size="large">Large Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quos!</P>
			<Tag size="middle" color="green">small green</Tag>
			<Tag size="middle" color="red">middle red</Tag>
			<Tag size="middle" color="ghost">small ghost</Tag>
			<Tag size="middle" color="grey">middle grey</Tag>
			<Tag size="middle" color="primary">middle primary</Tag>
			<Rating rating={rating} />
			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</>
	);
}

export default withLayout(Home);

// export const getStaticProps: GetStaticProps = async () => {
// 	return {
// 		props: {

// 		}
// 	};
// };
