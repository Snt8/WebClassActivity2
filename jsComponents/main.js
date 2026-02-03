// 1. Saludo de bienvenida en la consola
console.log("Componente JS cargado correctamente.");

// 2. Función para añadir contenido dinámico a la tabla
function agregarFila() {
    const tabla = document.getElementById("tech-table-body");
    if(tabla) {
        const nuevaFila = `<tr>
            <td>Gráficos</td>
            <td>Basado en VML</td>
            <td>API Canvas y SVG nativo</td>
        </tr>`;
        tabla.innerHTML += nuevaFila;
    }
}

// 3. Cambiador de modo (Interacción con el botón de la subpágina)
const btnToggle = document.getElementById("theme-toggle");
if(btnToggle) {
    btnToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        btnToggle.textContent = isDark ? "Modo Claro" : "Modo Oscuro";
    });
}