import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import img from "../../assets/picture/ibu.jpg";

const Hero = () => {
	const option = {
		background: {
			color: "#ffff",
		},
		particles: {
			number: {
				value: 80,
			},
			color: {
				value: "blue",
			},
			shape: {
				type: "circle",
			},
			size: {
				value: 200,
			},
		},
	};
	return (
		<section className="relative">
			<Particles id="tsparticles" option={option} />
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col justify-between lg:flex-row ">
					<img src={img} className="max-w-sm rounded-lg shadow-2xl" />
					<div>
						<h1 className="text-3xl font-bold">
							Hi, I&apos;m Ibrahim Khalil Ullah
						</h1>
						<p className="text-lg sm:text-xl m-2">
							<Typewriter
								words={[
									"A pationated Developer",
									"Full-Stuck Developer",
									"Quick Learner",
								]}
								loopSpeed={100}
							/>
						</p>
						<motion.div
							className="box"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
						>
							<p className="py-6 w-80">
								I&apos;m a Full Stack Developer <br />
								who enjoy to play web related tools
							</p>
						</motion.div>
						<button className="btn btn-error">Get Resume</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
