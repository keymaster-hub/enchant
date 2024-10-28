// �������������� ��������
let failedCount = 0;
let scrollsCount = 0;

function incrementCounter(button) {
    let currentCount = parseInt(button.textContent.replace('+', ''));

    // ����������� ������� Scrolls ��� ������ �������
    scrollsCount++;
    document.getElementById('scrolls-counter').textContent = scrollsCount;

    // ��������� ������ ���������� � ������
    if (currentCount < 3) {
        currentCount++;
    } else {
        if (Math.random() < 0.7) {
            currentCount++;
        } else {
            currentCount = 0;
            failedCount++; // ����������� Failed ��� ������
            document.getElementById('failed-counter').textContent = failedCount;
        }
    }

    // ��������� ����� �� ������
    button.textContent = `+${currentCount}`;
    
    // ��������� ���� ������
    updateButtonColor(button, currentCount);
}

function updateButtonColor(button, count) {
    if (count < 3) {
        button.style.backgroundColor = '#e0e0e0';
        button.style.color = '#333';
    } else if (count >= 4 && count <= 15) {
        const blueIntensity = Math.min(255, 255 - (17 * (count - 4)));
        button.style.backgroundColor = `rgb(100, ${blueIntensity}, 255)`;
        button.style.color = 'white';
    } else if (count >= 16) {
        button.style.backgroundColor = 'rgb(255, 50, 50)';
        button.style.color = 'white';
    }
}
