import "./App.css";
import Home from "./Page/Home/Home";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-[100vh]">
				<Navbar />
				<div className=" flex-1 justify-center">
					<Home />
				</div>
				<div className="flex-shrink-0">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
