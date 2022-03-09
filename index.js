let ol_list = document.getElementById("ol-container")
let email_id = document.getElementById("email-id")
let para_id = document.getElementById("error-1")
let serialcount = 0

function validatemail() {
    para_id.innerHTML = ""
    let email_value = email_id.value
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if (email_value == "") {
        para_id.innerHTML = "Required"
        para_id.classList.add("text-danger")
    } else if (!emailpattern.test(email_value)) {
        para_id.innerHTML = "Plase enter valid emial address"
        para_id.classList.add("text-danger")
    } else {
        para_id.innerHTML = ""
    }
}

function deleteItem(btn_id) {
    let btnid = document.getElementById(btn_id)
    ol_list.removeChild(btnid)
}

function validate(inputvalue, para) {
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if (inputvalue == "") {
        para.innerHTML = "Required"
        para.classList.add("text-danger")
    } else if (!emailpattern.test(inputvalue)) {
        para.innerHTML = "Plase enter valid emial address"
        para.classList.add("text-danger")
    } else {
        para.innerHTML = ""
    }
}

function changebtn() {
    serialcount += 1
    if (serialcount >= 10) {
        alert("maximun count reached")
    } else {
        let list = document.createElement('li')
        let list_id = serialcount
        list.id = list_id
        let para = document.createElement('p')
        let input = document.createElement('input')
        input.type = "email"
        input.placeholder = "abc@gmail.com"
        input.onblur = function () {
            validate(input.value, para)
        }
        let btn_1 = document.createElement("button")
        btn_1.innerHTML = "+";
        btn_1.classList.add("btn", 'btn-primary', 'm-2')
        let btn_2 = document.createElement("button")
        btn_2.innerHTML = "-"
        btn_2.addEventListener('click', function () {
            deleteItem(list_id)
        })
        btn_2.classList.add('btn', 'btn-danger')
        list.append(input, btn_1, btn_2, para)
        ol_list.append(list)
    }
}