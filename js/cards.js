const getCards = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        const div_class = document.querySelector(".cards_container");
        data.forEach(element => {
            const block = document.createElement("div");
            block.classList.add("card"); 
            block.innerHTML = `
                <div class="card_container">
                    <img src="../images/default.png" alt="${element.title}">
                    <h5><span class="label">Name:</span> ${element.title}</h5>
                    <p><span class="label">Description:</span> ${element.body}</p>
                </div>
            `;
            div_class.appendChild(block);
        });
    } catch(error) {
        console.error(`Ошибка при получении постов: ${error}`);
    }
}

getCards();