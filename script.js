document.addEventListener('DOMContentLoaded', function() {
    console.log("AutoElite скриптът е зареден успешно!");

    // --- 1. МОБИЛНО МЕНЮ ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            console.log("Бутонът за меню е натиснат!"); // Проверка в конзолата
            mainNav.classList.toggle('active');
            
            // Анимация на чертичките (по желание)
            this.classList.toggle('open');
        });
    }

    // --- 2. ЛИЗИНГОВ КАЛКУЛАТОР ---
    const calcButton = document.getElementById('calc-btn');
    if (calcButton) {
        const priceInput = document.getElementById('car-price');
        const depositRange = document.getElementById('deposit-range');
        const depositValueDisplay = document.getElementById('deposit-value');
        const resultDisplay = document.getElementById('monthly-payment');

        depositRange.addEventListener('input', () => {
            depositValueDisplay.innerText = depositRange.value + '%';
        });

        calcButton.addEventListener('click', () => {
            const price = parseFloat(priceInput.value) || 0;
            const depositPercent = parseFloat(depositRange.value);
            const months = parseInt(document.getElementById('period').value);
            
            const loanPrincipal = price - (price * (depositPercent / 100));
            const monthlyInterest = 0.045 / 12;
            const payment = (loanPrincipal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));

            resultDisplay.innerText = payment.toFixed(2);
            alert("Вноската е изчислена!");
        });
    }


});