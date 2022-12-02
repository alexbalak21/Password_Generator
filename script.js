const generated = document.getElementById('generated')
const generate_btn = document.getElementById('generate')

const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '?!@#$%^&*+' 
const spec_symbols = '/()[],.:;=-_'
const lenght = document.getElementById('lenght')

function get_char(string, max){
    let index = Math.floor(Math.random() * max)
    return string.charAt(index)
}
document.getElementById("plus").addEventListener('click', () => {if (lenght.value < 32) lenght.value++})
document.getElementById("minus").addEventListener('click', () => {if (lenght.value > 1) lenght.value--})

document.getElementById('copy').addEventListener('click', ()=>navigator.clipboard.writeText(generated.value))
generate_btn.addEventListener('click', generate)


function generate(){
    let rand = ''
    let possibles = lowercase
    if (document.getElementById('Uppercase').checked) possibles += uppercase
    if (document.getElementById('Numbers').checked) possibles += numbers
    if (document.getElementById('Symbols').checked) possibles += symbols
    if (document.getElementById('spec_ymbols').checked) possibles += spec_symbols
    const gen_lenght = lenght.value
    const string_lengh = possibles.length
    for (let i = 0; i < gen_lenght; i++) rand += get_char(possibles, string_lengh)
    generated.value = rand
}
generate()




