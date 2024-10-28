function updateButtonColor(button, count) {
    if (count < 3) {
        button.style.backgroundColor = '#e0e0e0'; // ����� �� ���������
        button.style.color = '#333';
    } else if (count >= 4 && count <= 15) {
        const blueIntensity = Math.min(255, 255 - (17 * (count - 4))); // ������� ������� �� ������-�������� � �����-������
        button.style.backgroundColor = `rgb(100, ${blueIntensity}, 255)`; // ������-������� ��� +4 � �����-����� ��� +15
        button.style.color = 'white';
    } else if (count >= 16) {
        button.style.backgroundColor = 'rgb(255, 50, 50)'; // ������� ��� +16 � ����
        button.style.color = 'white';
    }
}
