function incrementCounter(button) {
    let currentCount = parseInt(button.textContent.replace('+', ''));
    
    if (currentCount < 3) {
        currentCount++;
    } else {
        // ����������� 70% ���������, 30% ��������
        if (Math.random() < 0.7) {
            currentCount++;
        } else {
            currentCount = 0;
        }
    }
    button.textContent = `+${currentCount}`;
}
