// Cоздать функцию greeting, которая принимает в 
// качестве аргумента имя человека и выводит приветствие, 
// используя переданное ей имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда полученное от пользователя значение.

function getting(){
    const name = prompt("Как вас зовут?")
    message = `Привет ${name}`;
    alert(message);
}
getting();
console.log(message);