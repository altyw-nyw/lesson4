//
function reverseText() {
    const input = document.getElementById("textInput").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("output").textContent = reversed;
     input.value="";
}

///////////////////////////

// const str="Пробная версия";
// const result=str.split("");
//
// console.log(str.split(""));
//

///////////////////////////////////////////
// const users = [
//     { name: "Аня", age: 25 },
//     { name: "Игорь", age: 30 },
//     { name: "Лена", age: 22 }
// ];
//
// const outputDiv = document.getElementById("output");
//
// outputDiv.innerHTML = users.map(user => {
//     return `<p>Имя: ${user.name}, Возраст: ${user.age}</p>`;
// }).join('');