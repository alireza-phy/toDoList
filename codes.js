let toDoSelect = document.getElementsByClassName("toDoSelect")
let toDoText = document.getElementsByClassName("toDoText")
let circle = document.getElementsByClassName("circle")
let box = document.getElementsByClassName("box")

let doingList = [
    {
        text: "Complete online JavaScript course",
        close: false,
        check: false
    },
    {
        text: "Jog around the park 3x",
        close: false,
        check: false
    },
    {
        text: "10 minutes meditation",
        close: false,
        check: false
    },
    {
        text: "Read for 1 hour",
        close: false,
        check: false
    },
    {
        text: "Pick up groceries",
        close: false,
        check: false
    },
    {
        text: "Complete Todo App Frontend Mentor",
        close: false,
        check: false
    },
]

document.getElementById('myInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        doingList.push({text: event.target.value, close: false, check: false})
        document.getElementById('myInput').value = '';
        event.preventDefault();
        toDoContainer.innerHTML = toDoCards(doingList)
        checkdo(doingList)
        changeCheck(doingList)
    }
})

function creatTodoCard(obj) {
    return `
<div class="toDo">
             <div class="toDoSelect">
                 <div class="circle">
                     <div class="box"></div>
                 </div>
                 <p class="toDoText"> ${obj['text']} </p>
             </div>
 <svg class="close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5z" fill="gray"/></g></svg>
         </div>
         <hr>
      `
}

function toDoCards(arr) {
    return arr.map(obj => {
        return creatTodoCard(obj)
    }).join('')
}

let toDoContainer = document.getElementById('toDoContainer')
toDoContainer.innerHTML = toDoCards(doingList)
checkdo(doingList)
changeCheck(toDoSelect)


// select items of to Do list and change the styles

function checkdo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['check'] === true) {
            toDoText[i].classList.add("checked")
            circle[i].classList.add("circleChecked")
            box[i].classList.add("boxChecked")
        } else {
            toDoText[i].classList.remove("checked")
            circle[i].classList.remove("circleChecked")
            box[i].classList.remove("boxChecked")
        }
    }
}

function changeCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
            doingList[i]['check'] = !doingList[i]['check']
            checkdo(doingList)
        }
    }
}

// let close = document.getElementsByClassName("close")
// for (let i = 0; i < doingList.length; i++) {
//     close[i].onclick = function () {
//         doingList.splice(i, 1)
//         toDoContainer.innerHTML = toDoCards(doingList)
//         for (let i = 0; i < doingList.length; i++) {
//             toDoSelect[i].onclick = function () {
//                 circle[i].classList.toggle("circleChecked")
//                 toDoText[i].classList.toggle("checked")
//                 box[i].classList.toggle("boxChecked")
//             }
//
//         }
//
//     }
// }