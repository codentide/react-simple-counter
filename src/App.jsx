import { CounterComponent } from "./components/CounterComponent";

export const App = () => {
	return (
		<div className="container">
			<h1>React Counter App</h1>
			<small>With Vite/React and Bootstrap</small>
			<hr />
			<CounterComponent />
		</div>
	);
};
