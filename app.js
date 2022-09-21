const firstname = 'Danil'
const surname = 'Kersontsev'
const mail = 'danil.kersontsev@voco.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li>' + firstname + '</li>' +
    '<li>' + surname + '</li>' +
    '<li>' + mail + '</li>' +
    '<li>' + department + '</li>' +
    '</ul>'






console.log(result)
document.body.innerHTML = result