import { useState } from "react";

// Custom hook para contador
export const useCounter = (initial = 0) => {
	// Escuchar cambios en el estado del counter e inicializar con el valor "initial"
	const [counter, setCounter] = useState(initial);

	// Incrementar contador, con valor por defecto 1
	const increment = (val = 1) => setCounter(counter + val);
	// Decrementar contador, con valor por defecto 1 y condicion para evitar que el contador sea negativo
	const decrement = (val = 1, isNegativeCounter = false) =>
		!isNegativeCounter && counter - val < 0
			? setCounter(0)
			: setCounter(counter - val);
	// Reiniciar contador
	const reset = () => setCounter(initial);

	// Retornar objeto con los metodos
	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
