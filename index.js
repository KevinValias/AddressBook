//displays all the users and info
const displayUsers = () => {
  const allUsers = document.getElementById("all-users")
  arrayOfUsers.map((users) => {
  arrayOfUsers.map((users, i) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = users
    const img = document.createElement("img")
    img.src = picture.large
    const fullName = document.createTextNode(`${name.first} ${name.last}`)
    const buttonStuff = document.createElement("button")
    const words = document.createTextNode("extra info")
    const p = document.createElement("p")
    p.style.display = "none"
    p.setAttribute("id", 'more-info-${i}')
    p.setAttribute("id", `more-info-${i}`)
    buttonStuff.addEventListener("click", () => {
      moreInfo(p.id)
  })
      const fullName = document.createTextNode('${user.name.first} ${user.name.last}')
      const allInfo = document.createTextNode('Phone: ${phone}, Email: ${email}, Address: ${location.street.number}, Birthday: ${dob.date}')

      const allInfo = document.createTextNode(`Phone: ${phone}, Email: ${email}, Address: ${location.street.number}, Birthday: ${dob.date}`)
    li.appendChild(img)
    allUsers.append(li)
    li.appendChild(fullName)
    p.appendChild(allInfo)
    allUsers.append(buttonStuff)
    li.appendChild(buttonStuff)
    p.append(allInfo)
    buttonStuff.append(words)
    allUsers.append(li)
    allUsers.append(allInfo)
  })