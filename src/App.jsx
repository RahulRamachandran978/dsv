import "./App.css";
import { Toaster } from "react-hot-toast";
import Approutes from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<>
			<CartProvider>
				<Toaster />
				<Approutes />
			</CartProvider>
		</>
	);
}

export default App;
