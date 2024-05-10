# Simple Counter App with Vite, React, and Bootstrap

Esta aplicación es un simple contador construido con React y Vite como entorno de desarrollo, usando Bootstrap para estilización. El contador permite incrementar y decrementar un número y restablecerlo a cero. La aplicación utiliza hooks de React para manejar el estado y un custom hook para encapsular la lógica del contador, el propósito de esta app es práctica y mejora de mis habilidades con estas tecnologías.

## Características

-   **Incremento/Decremento:** Permite incrementar o decrementar el contador con botones dedicados.
-   **Reinicio:** Opción para reiniciar el contador a cero.
-   **Custom Hook:** Uso de un custom hook para manejar la lógica del contador.
-   **Interfaz de Usuario con Bootstrap:** Diseño sencillo y limpio utilizando Bootstrap.

## Tecnologías Utilizadas

-   **Vite:** Para un entorno de desarrollo rápido y ágil.
-   **React:** Biblioteca de JavaScript para construir la interfaz de usuario.
-   **Bootstrap:** Framework CSS para estilización y diseño responsivo.
-   **React Hooks:** Para el manejo de estados y efectos.

## Estructura del Código

-   El componente principal controla el estado del contador.
-   Un custom hook (useCounter) encapsula la lógica de incremento, decremento y reinicio del contador.
-   Componentes individuales para botones y despliegue del contador, separados para mayor claridad y reutilización.
