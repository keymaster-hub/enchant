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
    updateButtonColor(button, currentCount); // ��������� ���� ������ � ����������� �� ������
}

function updateButtonColor(button, count) {
    if (count < 3) {
        button.style.backgroundColor = '#e0e0e0'; // ����� �� ���������
        button.style.color = '#333';
    } else if (count >= 3 && count <= 15) {
        const blueIntensity = Math.min(255, 50 + 13 * (count - 3)); // ������� ������� �� ������-�������� � �����-������
        button.style.backgroundColor = `rgb(${50}, ${blueIntensity}, ${255})`;
        button.style.color = 'white';
    } else if (count >= 16) {
        button.style.backgroundColor = 'rgb(255, 50, 50)'; // ������� ��� +16 � ����
        button.style.color = 'white';
    }
}
