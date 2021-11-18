let toDoSelect = document.getElementsByClassName("toDoSelect")
let toDoText = document.getElementsByClassName("toDoText")
let circle = document.getElementsByClassName("circle")
let box = document.getElementsByClassName("box")
let moon = document.getElementById('moon')
let sun = document.getElementById('sun')
let light = document.getElementById('light')
let header = document.getElementById("header")
let close = document.getElementsByClassName('close')
let toDoContainer = document.getElementById('toDoContainer')
let leftItems = document.getElementById('leftItems')
let allItems = document.getElementById('allItems')
let activeItems = document.getElementById('activeItems')
let completedItems = document.getElementById('completedItems')

let doingList = [
    {
        text: "Complete online JavaScript course",
        check: false
    },
    {
        text: "Jog around the park 3x",
        check: false
    },
    {
        text: "10 minutes meditation",
        check: false
    },
    {
        text: "Read for 1 hour",
        check: false
    },
    {
        text: "Pick up groceries",
        check: true
    },
    {
        text: "Complete Todo App Frontend Mentor",
        check: false
    },
]

function countChecked(arr) {
    let items = 0
    for (let i = 0; i < arr.length; i++) {
        if ( !arr[i]['check']) items++
    }
    leftItems.innerHTML = `${[items]} items left`
}

    allItems.onclick = function () {
        allItems.style.color = 'blue'
        completedItems.style.color = '#646464'
        activeItems.style.color = '#646464'
        toDoContainer.innerHTML = toDoCards(doingList)
        checkdo(doingList)
        changeCheck(doingList)
        closeCart(close)
        countChecked(doingList)
    }

    activeItems.onclick = function () {
        allItems.style.color = '#646464'
        completedItems.style.color = '#646464'
        activeItems.style.color = 'blue'
        let activeList = doingList.filter((key) => !key['check'])
        toDoContainer.innerHTML = toDoCards(activeList)
        checkdo(activeList)
        changeCheck(activeList)
        closeCart(close)
        countChecked(activeList)
    }

completedItems.onclick = function () {
    allItems.style.color = '#646464'
    completedItems.style.color = 'blue'
    activeItems.style.color = '#646464'
    let completeList = doingList.filter((key) => key['check'])
    toDoContainer.innerHTML = toDoCards(completeList)
    checkdo(completeList)
    changeCheck(completeList)
    closeCart(close)
    countChecked(completeList)
}


document.getElementById('myInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        doingList.push({text: event.target.value, close: false, check: false})
        document.getElementById('myInput').value = '';
        event.preventDefault();
        toDoContainer.innerHTML = toDoCards(doingList)
        changeCheck(doingList)
        checkdo(doingList)
        closeCart(close)
        countChecked(doingList)
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
 <svg class="close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5z" fill="gray"/></g></svg>
         </div>
         <hr>
      `
}

function toDoCards(arr) {
    return arr.map(obj => {
        return creatTodoCard(obj)
    }).join('')
}

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
    const toDoSelect = document.getElementsByClassName("toDoSelect")
    for (let i = 0; i < arr.length; i++) {
        toDoSelect[i].onclick = function () {
            arr[i]['check'] = !arr[i]['check']
            checkdo(arr)
            countChecked(doingList)
        }
    }
}

function closeCart(closeArr) {
    for (let i = 0; i < closeArr.length; i++) {
        closeArr[i].onclick = function () {
            doingList.splice(i, 1)
            toDoContainer.innerHTML = toDoCards(doingList)
            closeCart(close)
            changeCheck(doingList)
            checkdo(doingList)
            console.log(toDoSelect)
            console.log(doingList)
            countChecked(doingList)
        }
    }
}

light.onclick = function () {
    if (moon.style.display !== 'inline-block') {
        sun.style.display = 'none'
        moon.style.display = 'inline-block'
        header.style.backgroundImage = "url('imgs/bg-desktop-light.3508d620.jpg')";
        document.documentElement.style.setProperty('--firstcolor', 'transparent')
        document.documentElement.style.setProperty('--secondcolor', 'white')
    } else {
        moon.style.display = 'none'
        sun.style.display = 'inline-block'
        header.style.backgroundImage = "url('imgs/bg-desktop-dark.73e47dbb.jpg')";
        document.documentElement.style.setProperty('--firstcolor', '#161722')
        document.documentElement.style.setProperty('--secondcolor', '#25273c')
    }
}


toDoContainer.innerHTML = toDoCards(doingList)
checkdo(doingList)
changeCheck(doingList)
closeCart(close)
countChecked(doingList)