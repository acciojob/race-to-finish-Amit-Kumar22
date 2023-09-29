window.promises = [];
 function getRandomDelay() {
            return Math.floor(Math.random() * 5000) + 1000;
        }
        const promises = Array.from({ length: 5 }, (_, index) => {
            return new Promise((resolve) => {
                const delay = getRandomDelay();
                setTimeout(() => {
                    resolve(`Promise ${index + 1} resolved after ${delay / 1000} seconds.`);
                }, delay);
            });
        });

        Promise.any(promises)
            .then((result) => {
                const outputDiv = document.getElementById('output');
                outputDiv.textContent = result;
            })
            .catch((error) => {
                console.error('All promises rejected:', error);
            });
