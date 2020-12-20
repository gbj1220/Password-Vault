let db = JSON.parse(localStorage.getItem("db"))
if (db === null || db === undefined) {
  db = []
}
const dataBase = document.querySelector('#new-button')
dataBase.addEventListener(`click`, () => {

  const domainName = document.querySelector('#domain-name')
  domain = domainName.value

  const userName = document.querySelector('#username')
  username = userName.value

  const pass = document.querySelector('#password')
  password = pass.value

  const domainLI = document.createElement('li')
  domainLI.innerText = ` Domain Name: ${domainName.value}`

  const usernameLI = document.createElement('li')
  usernameLI.innerText = `Username: ${userName.value}`

  const passwordLI = document.createElement('li')
  passwordLI.innerText = `Password: ${pass.value}`

  const ul = document.querySelector('ul')
  ul.appendChild(domainLI)
  ul.appendChild(usernameLI)
  ul.appendChild(passwordLI)

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

  ul.appendChild(domainName)
  ul.appendChild(userName)
  ul.appendChild(pass)

}



const deleteAll = document.querySelector('#delete-all-button')
deleteAll.addEventListener('click', () => {
localStorage.clear()
})