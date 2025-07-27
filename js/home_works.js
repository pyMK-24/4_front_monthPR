//hw 1.1
const inputGmail = document.querySelector("#gmail_input");
const buttonGmail = document.querySelector("#gmail_button");
const spanGmail = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;

buttonGmail.onclick = () => {
    if (regExp.test(inputGmail.value)) {
        spanGmail.innerHTML = "Твоя почта была успешно записана.";
    }else {
        spanGmail.innerHTML = "Неверно, попробуй еще раз."
    }
}
//hw 1.2 - 2.2
const childBlock = document.querySelector(".child_block");
const parrentBlock = document.querySelector(".parent_block");

const offsetWidth = parrentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parrentBlock.clientHeight - childBlock.clientHeight;

let positionX = 0;
let positionY = 0;

const actionBlock = () => {
    if (positionX <= offsetWidth && positionY === 0) {
        childBlock.style.left = positionX + "px";
        positionX++;
    } else if (positionX >= offsetWidth && positionY <= offsetHeight) {
        childBlock.style.top = positionY + "px";
        positionY++;
    } else if (positionX > 0 && positionY >= offsetHeight) {
        childBlock.style.left = positionX + "px"; 
        positionX--;       
    } else if (positionX === 0 && positionY > 0) {
        childBlock.style.top = positionY + "px";
        positionY--;
    }
    requestAnimationFrame(actionBlock);
};

requestAnimationFrame(actionBlock);

//hw 2.2
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
const interval = document.querySelector(".interval")

let timer = null;
let count = 0;

startButton.onclick = () => {
    if (timer === null) {
        timer = setInterval(() => {
            count++;
            interval.textContent = count;
        },1000)
    }
};

stopButton.onclick = () => {
    clearInterval(timer)
    timer = null;
};

resetButton.onclick = () => {
    clearInterval(timer)
    timer = null;
    count = 0;
    interval.textContent = count;
};


// hw 4.1 - updated

// const user = async () => {
//     try {
//         const response = await fetch("../data/person.json");
//         const data = await response.json();

//         const div_class = document.querySelector('.characters-list');
//         data.forEach(person => {
//             const block = document.createElement("div");
//             block.setAttribute("class", "block");
//             block.innerHTML = `
//                 <div class="character-card">
//                     <p>Name: ${person.name}</p>
//                     <span>Age: ${person.age}</span>
//                     <img src="${person.person_photo}" alt="${person.name}">
//                 </div>
//                 `;
//             div_class.append(block);
//         })

//     } catch(error) {
//         console.error(`Ошибка при получении постов: ${error}`);
//     }
// }

// user();

// hw 4.2

// const any = async () => {
//     try {
//         const response = await fetch("../data/any.json");
//         const data = await response.json();
//         console.log(data)
//     } catch(error) {
//         console.error(`Ошибка при получении постов: ${error}`);
//     }
// }

// any();
