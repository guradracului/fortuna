// Настройки колеса
const prizes = [
    "100000 токенов", 
    "2000 токенов", 
    "Робот", 
    "x2 токенов", 
    "x3 токенов", 
    "1000 токенов", 
    "Кулер", 
    "10000 токенов"
];
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
    const finalAngle = (6 * 360) + (winningSector * 45) + 22.5 - 90;
    
    // 4. Анимация вращения
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${finalAngle}deg)`;
    
    // 5. Показать результат после анимации
    setTimeout(() => {
        isSpinning = false;
        document.getElementById('result')
    }, 4000);
}