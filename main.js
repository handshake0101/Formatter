const textarea = document.querySelector('textarea')
const paste = document.querySelector('#paste')
const copy = document.querySelector('#copy')
const clear = document.querySelector('#clear')
const message = document.querySelector('.message')

const successC = ' successfully'
const successP = 'Pasted successfully'

textarea.select()
textarea.setSelectionRange(0, 99999)



paste.addEventListener('click', function () {
    navigator.clipboard.readText().then(clipText => textarea.value = clipText);
    message.innerText = 'Paste'
    setTimeout(function () {
        // Mette tutto su una linea
        textarea.value = textarea.value.replace(/\n|\r/g, "")
        // Va a capo ad ogni punto
        textarea.value = textarea.value.match(/((?:"[^"]*"|«[^»]+»|[^".«]+)+(?:\.|$))\s*/g).join("\n")
        //textarea.value = textarea.value.replace(/\r?\n|\r/g, " ")
    }, 500)
    setTimeout(function () {
        message.innerText = ''
    }, 2000)
})

copy.addEventListener('click', function () {
    navigator.clipboard.writeText(textarea.value);
    message.innerText = 'Copy'
    setTimeout(function () {
        message.innerText = ''
    }, 2000)
})

clear.addEventListener('click', function () {
    textarea.value = ''
    message.innerText = 'Clear'
    setTimeout(function () {
        message.innerText = ''
    }, 2000)
})
