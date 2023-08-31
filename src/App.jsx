import "./App.css";
import Home from "./Page/Home/Home";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Home />
			<Footer />
		</>
	);
}

export default App;
