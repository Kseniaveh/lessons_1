function myFirstApp(name,age){
    alert("Привет, меня зовут " + name + ' и это моя первая программа');
    
    function showSkills(){
        let skills = ['HTML', 'CSS', 'Python', 'JavaScript'];

        for (let i = 0; i < skills.length; i++){
            document.body.innerHTML += 'Я владею навком -' + skills[i] + "<br>";
        }
    }
    showSkills();

    function checkAge(){
        if (age > 18){
            alert("Вход разрешен!");
        } else {
            alert("Извини, повзрослей!");
        }
    }
    checkAge();

    function calcPow(num){
        console.log(num*num);
    }
    calcPow(5);
    calcPow(7);
    calcPow(13);
  }

myFirstApp("Ksenia", 20);