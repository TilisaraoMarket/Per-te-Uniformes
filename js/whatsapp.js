// Función para manejar la consulta de productos vía WhatsApp
function handleProductQuery(productName) {
    // Número de teléfono de Per-te Uniformes
    const phoneNumber = "5492664543899";
    
    // Mensaje predefinido
    const message = `Hola! Me interesa consultar sobre el producto: ${productName}. ¿Podrían brindarme más información?`;
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
}

// Agregar event listeners a todos los botones de consulta
document.addEventListener('DOMContentLoaded', function() {
    const consultButtons = document.querySelectorAll('.product-card button');
    
    consultButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el nombre del producto del título más cercano
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            handleProductQuery(productName);
        });
    });
});