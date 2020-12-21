// let securityPrompt = window.prompt('Please enter password')
// const security = (str) => {

// }


let db = JSON.parse(localStorage.getItem("db"))
if (db === null || db === undefined) {
  db = []
}
const dataBase = document.querySelector('#submit-button')
dataBase.addEventListener(`click`, (event) => {
  const domainName = document.querySelector('#domain-name')
  domain = domainName.value
  domainName.value = ''

  const userName = document.querySelector('#username')
  username = userName.value
  userName.value = ''

  const pass = document.querySelector('#password')
  password = pass.value
  pass.value = ''

  const deleteButton = document.querySelector('#delete-all-button')
  deleted = deleteButton.value

  const domainLI = document.createElement('li')
  domainLI.innerText = ` Domain Name: ${domain}`

  const usernameLI = document.createElement('li')
  usernameLI.innerText = `Username: ${username}`

  const passwordLI = document.createElement('li')
  passwordLI.innerText = `Password: ${password}`

  const button = document.createElement('button')
  button.innerText = 'Delete'

  const ul = document.querySelector('ul')
  ul.appendChild(domainLI)
  ul.appendChild(usernameLI)
  ul.appendChild(passwordLI)
  ul.appendChild(button)  

  const newDB = {
    domain: domain,
    username: username,
    password: password,
  }
  db.push(newDB)
  localStorage.setItem("db", JSON.stringify(db))
})

const ul = document.querySelector('ul')

  for (const newObj of db) {

  const domainName = document.createElement('li')
  domainName.innerText = ` Domain Name: ${newObj.domain}`

  const userName = document.createElement('li')
  userName.innerText = `Username: ${newObj.username}`

  const pass = document.createElement('li')
  pass.innerText = `Password: ${newObj.password}`

  const button = document.createElement('button') 
  button.innerText = 'Delete'

  ul.appendChild(domainName)
  ul.appendChild(userName)
  ul.appendChild(pass)
  ul.appendChild(button)

}


const deleteAll = document.querySelector('#delete-all-button')
deleteAll.addEventListener('keydown', () => {
  localStorage.clear()
  window.location.reload()
})

const deleteItem = querySelector('button')
deleteItem.addEventListener('click', () => {

})
