import Blog from "../../Component/Blog/Blog";
import Hero from "../../Component/Hero/Hero";
import Project from "../../Component/Project/Project";
import Skill from "../../Component/Skill/Skill";

const Home = () => {
	return (
		<div>
			<Hero />
			<Skill />
			<Project />
			<Blog />
		</div>
	);
};

export default Home;
