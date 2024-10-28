function incrementCounter(button) {
    let currentCount = parseInt(button.textContent.replace('+', ''));

    // Увеличиваем счетчик
    if (currentCount < 3) {
        currentCount++;
    } else {
        if (Math.random() < 0.7) {
            currentCount++;
        } else {
            currentCount = 0;
        }
    }
    
    // Обновляем текст на кнопке
    button.textContent = `+${currentCount}`;
    
    // Обновляем цвет кнопки в зависимости от уровня
    updateButtonColor(button, currentCount);
}

function updateButtonColor(button, count) {
    if (count < 3) {
        button.style.backgroundColor = '#e0e0e0'; // Серый по умолчанию
        button.style.color = '#333';
    } else if (count >= 4 && count <= 15) {
        const blueIntensity = Math.min(255, 255 - (17 * (count - 4))); // Плавный переход от светло-голубого к темно-синему
        button.style.backgroundColor = `rgb(100, ${blueIntensity}, 255)`; // Светло-голубой для +4 и темно-синий для +15
        button.style.color = 'white';
    } else if (count >= 16) {
        button.style.backgroundColor = 'rgb(255, 50, 50)'; // Красный для +16 и выше
        button.style.color = 'white';
    }
}