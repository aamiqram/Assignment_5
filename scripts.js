 // Variables
        let favourites = 0;
        let coins = 100;
        let copies = 0;
        const history = [];

        // Selected elements
        const favouriteBtns = document.querySelectorAll('.favourite');
        const callBtns = document.querySelectorAll('.call-btn');
        const copyBtns = document.querySelectorAll('.copy-btn');
        const clearBtn = document.querySelector('.clear-history');
        const heartCount = document.getElementById('heart-count');
        const coinCount = document.getElementById('coin-count');
        const copyCount = document.getElementById('copy-count');
        const historyList = document.getElementById('history-list');

        // Function to update navbar counts
        function updateCounts() {
            heartCount.innerHTML = `${favourites} <img class="w-8 h-8 ml-1 mr-2" src="assets/heart.png" alt="Heart">`;
            coinCount.innerHTML = `${coins} <img class="w-8 h-8 ml-1 mr-2" src="assets/coin.png" alt="Coin">`;
            copyCount.innerHTML = `${copies} <p class="font-bold ml-1">Copy</p>`;
        }

        // Functionality: Heart Icons - Clicking increases the heart count in navbar
        favouriteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                favourites++;
                updateCounts();
            });
        });

        // Functionality: Call Buttons - Show alert, deduct coins if sufficient, add to history with exact time
        callBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                const serviceName = card.querySelector('h3').textContent;
                const serviceEnglish = card.querySelector('p.text-sm').textContent;
                const serviceNumber = card.querySelector('p.text-xl').textContent;

                if (coins < 20) {
                    alert('Insufficient coins! You need at least 20 coins to make a call.');
                    return;
                }

                alert(`Calling ${serviceEnglish} (${serviceName}) at ${serviceNumber}`);
                coins -= 20;
                const currentTime = new Date().toLocaleTimeString(); // To Get exact local time
                history.push({ name: `${serviceEnglish} (${serviceName})`, number: serviceNumber, time: currentTime });
                updateHistory();
                updateCounts();
            });
        });

        // Functionality: Copy Buttons - Copy number to clipboard, show alert, increase copy count
        copyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                const serviceNumber = card.querySelector('p.text-xl').textContent;

                navigator.clipboard.writeText(serviceNumber).then(() => {
                    alert(`Copied ${serviceNumber} to clipboard`);
                    copies++;
                    updateCounts();
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            });
        });

        // Functionality: Clear History Button - Removes all data from history
        clearBtn.addEventListener('click', () => {
            history.length = 0;
            updateHistory();
        });

        // Function to update the call history list
        function updateHistory() {
            historyList.innerHTML = '';
            history.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('border-b', 'py-2');
                li.innerHTML = `
                    <div>${item.name}</div>
                    <div>${item.number}</div>
                    <div class="text-sm text-gray-500">${item.time}</div>
                `;
                historyList.appendChild(li);
            });
        }

        // Initial update of counts
        updateCounts();