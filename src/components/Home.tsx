import React from 'react';
import Navbar from "./Navbar";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto md:container md:mx-auto">
				<div className="grid grid-rows-none grid-flow-col grid-cols-2 gap-4">
					<div className="row-span-3 ...">01</div>
					<div className="col-span-2 ...">02</div>
					<div className="col-span-2 ...">02</div>
					<div className="col-span-2 ...">02</div>
					<div className="col-span-2 ...">02</div>
					<div className="col-span-2 ...">02</div>
					<div className="col-span-2 ...">02</div>
					{/*<div className="row-span-2 col-span-2 ...">03</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Home;