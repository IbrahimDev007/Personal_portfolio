import { skill } from "../../Constant/constant";
import "./skill.scss";
const Skill = () => {
	return (
		<div>
			<h1 className="text-5xl font-bold">Skill_</h1>
			<div className="flex flex-wrap justify-center mt-10">
				{skill.map((teck, index) => (
					<span
						key={index}
						className={`${
							index % 2 === 0 ? "btn--wut" : "btn--wiggle"
						} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
					>
						<img src={teck.img} alt={teck.alt} />
					</span>
				))}
			</div>
		</div>
	);
};

export default Skill;
