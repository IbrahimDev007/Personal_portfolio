import Blog from "../../Component/Blog/Blog";
import { Contact } from "../../Component/Contact/Contact";
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
			<Contact />
		</div>
	);
};

export default Home;
