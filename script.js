function incrementCounter(button) {
    let currentCount = parseInt(button.textContent.replace('+', ''));

    if (currentCount < 3) {
        currentCount++;
    } else {
        if (Math.random() < 0.7) {
            currentCount++;
        } else {
            currentCount = 0;
        }
    }
    button.textContent = `+${currentCount}`;
    updateButtonColor(button, currentCount); // Обновляем цвет кнопки в зависимости от уровня
}

function updateButtonColor(button, count) {
    if (count < 3) {
        button.style.backgroundColor = '#e0e0e0'; // Серый по умолчанию
        button.style.color = '#333';
    } else if (count >= 3 && count <= 15) {
        const blueIntensity = Math.min(255, 50 + 13 * (count - 3)); // Плавный переход от светло-голубого к темно-синему
        button.style.backgroundColor = `rgb(${50}, ${blueIntensity}, ${255})`;
        button.style.color = 'white';
    } else if (count >= 16) {
        button.style.backgroundColor = 'rgb(255, 50, 50)'; // Красный для +16 и выше
        button.style.color = 'white';
    }
}
