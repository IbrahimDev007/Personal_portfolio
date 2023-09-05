import { useState } from "react";

const ImageStack = () => {
	const images = ["project1.png", "project 2.png", "project 3.png"];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleMouseUp = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className="my-10">
			<h1 className="text-5xl font-bold my-2">Blog_</h1>
			<div
				className=" stack flex justify-center my-2"
				onMouseEnter={handleMouseUp}
			>
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">
							Blog -{currentIndex + 1}{" "}
							<div className="badge badge-accent">Mouse Over</div>{" "}
						</h2>
						<div className="badge badge-secondary">NEW</div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at
							in corrupti?
						</p>
					</div>
					<figure>
						<img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default ImageStack;
