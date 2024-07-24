let boxs = document.querySelectorAll('.box')
let restBt = document.getElementById('reset-bt')
let result = document.querySelector('.resultpera')
let str = document.querySelector('.str')
let body = document.querySelector('body');


let mod = 'dark'

restBt.addEventListener('click', () => {
    if (mod == 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color='white'
        mod = 'light'
    }
    else {
        body.style.backgroundColor = ' #548687'
        body.style.color='black'
        mod = 'dark'

    }
})



let turnOF = true;

let element = document.createElement('h2')
let  reset_game=document.createElement('h3') 

const Winindex = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

console.log(Winindex)
boxs.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box is Click')
        if (turnOF) {
            box.innerText = 'X'
            box.style.color = 'red'
            turnOF = false
        }
        else {
            box.innerText = 'O'
            box.style.color = 'green'
            turnOF = true
        }
        box.disabled = true
        checkWinner()
    })

})

let checkWinner = () => {
    for (let pettern of Winindex) {
        console.log(pettern[0], pettern[1], pettern[2])
        // console.log(
        //     boxs[pettern[0]].innerText,
        //     boxs[pettern[1]].innerText,
        //     boxs[pettern[2]].innerText)
        let p_1 = boxs[pettern[0]].innerText
        let p_2 = boxs[pettern[1]].innerText
        let p_3 = boxs[pettern[2]].innerText
        if (p_1 != '' && p_2 != '' && p_3 != '') {
            if (p_1 == p_2 && p_2 == p_3) {

                let text = document.createTextNode(`Congratulation You Are Winner ${p_1} `)
                element.appendChild(text)
                element.style.margin = '0px 0px 20px 18px'
                element.style.color = 'red'
                result.appendChild(element)
                endGame()
                // console.log(result)
                str.addEventListener('click', () => {
                    element.innerHTML = ''
                    result.removeChild(element)


                    boxs.forEach((box) => {
                        box.innerText = ''  })

                    boxs.forEach((box) => {
                        box.disabled = false })
                })
            }

        }
    }
}



function endGame() {
    boxs.forEach((box) => {
        box.disabled = true

    })
}






