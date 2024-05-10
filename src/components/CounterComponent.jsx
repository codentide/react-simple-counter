import { useCounter } from "../hooks/useCounter";

export const CounterComponent = () => {
	// Traer métodos de useCounter
	const { counter, decrement, increment, reset } = useCounter();

	return (
		<>
			<h2>Counter: {counter}</h2>
			<div className="counter__button-box">
				<button className="btn btn-primary" onClick={() => increment()}>
					+
				</button>
				<button className="btn btn-secondary" onClick={() => reset()}>
					reset
				</button>
				<button
					className="btn btn-primary"
					onClick={() => decrement(1)}
				>
					-
				</button>
			</div>
		</>
	);
};
