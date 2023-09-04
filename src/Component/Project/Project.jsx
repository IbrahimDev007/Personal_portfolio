import { Link } from "react-router-dom";
import { project } from "../../Constant/constant";

const Project = () => {
	return (
		<div>
			<h1 className="text-5xl font-bold my-16">Project_</h1>
			<div className="flex gap-3">
				{project.map((project, index) => (
					<div className="card w-96 bg-base-100 shadow-xl " key={index}>
						<figure>
							<img src={project.img} alt={project.title} />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{project.title}
								<Link to={project.live} className="badge badge-secondary">
									Live
								</Link>
							</h2>
							<div>
								{project.feture.map((feature, featureIndex) => (
									<ul key={featureIndex}>
										<li>{feature}</li>
									</ul>
								))}
							</div>
							<div className="card-actions justify-between">
								<div>
									{project.technology.map((technology, technologyIndex) => (
										<div className="badge badge-outline" key={technologyIndex}>
											{technology}
										</div>
									))}
								</div>
								<div>
									<Link to={project.client} className="badge badge-accent">
										Client
									</Link>
									<Link to={project.server} className="badge badge-accent">
										Server
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
