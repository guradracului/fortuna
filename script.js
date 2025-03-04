// Настройки колеса
const prizes = ["Приз 1", "Приз 2", "Приз 3", "Приз 4", "Приз 5", "Приз 6", "Приз 7", "Приз 8"];
// sectorAngle автоматически станет 45° (360/8)
let isSpinning = false;

function startSpin() {
    if(isSpinning) return;
    isSpinning = true;
    
    // 1. Рассчет случайного приза
    const totalSectors = prizes.length;
    const sectorAngle = 360 / totalSectors;
    const extraRotations = 5; // Количество полных оборотов
    
    // 2. Выбор случайного сектора
    const winningSector = Math.floor(Math.random() * totalSectors);
    
    // 3. Рассчет конечного угла
    const finalAngle = (extraRotations * 360) + (winningSector * sectorAngle) + (sectorAngle / 2);
    
    // 4. Анимация вращения
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${finalAngle}deg)`;
    
    // 5. Показать результат после анимации
    setTimeout(() => {
        isSpinning = false;
        document.getElementById('result').textContent = `Поздравляем! Вы выиграли: ${prizes[winningSector]}!`;
    }, 4000);
}