const baseURL = "http://localhost:5500/Users";


const $userList = document.querySelector("#user-list")
const $createForm = document.querySelector("#create-form")
const $updateForm = document.querySelector("#update-form")
const $getUserInput = document.querySelector("#userid")
const $getUserBtn = document.querySelector("#get-user-data")

function printUsers(arr) {
  $userList.innerHTML = ""
  
  console.log('LISTA: ',arr);
  arr.forEach(element => {
    $userList.innerHTML += `
      <div class='column'>
        <div class="card">
            <h5 class="title">Job title: ${element.job-title}</h5>
            <div class="card-content">            
            <p class="card-text">
            Job description: ${element.job-description}
            <br/>
            Skill: ${element.skill}
            </p>
            </div>
            <footer class="card-footer">            
            <button class="button is-small"
            onclick="deleteElement(${element.id})">
              Delete
            </button>
            </footer>
        </div>          
      </div>
    `
  })
}

async function deleteElement(id) {
  await axios.delete(`${baseURL}/${id}`)
  getUsers()
}

function getUsers() {
  axios.get(baseURL).then(({ data }) => {
    console.log(data)
    printUsers(data)
  })
}

getUsers()



$createForm.onsubmit = async event => {
  event.preventDefault()

  const { target } = event
  const jobTitle = target[0].value
  const jobDescription = target[1].value
  const skill = target[2].value

  await axios.post(baseURL, {
    jobTitle,
    jobDescription,
    skill
  })

  target[0].value = ""
  target[1].value = ""
  target[2].value = ""

  getUsers();
}

// ------ UPDATE ------

$updateForm.onsubmit = async e => {
  e.preventDefault();

  const { target } = e
  const name = target[0].value
  const occupation = target[1].value
  const weapon = target[2].value
  const id = $getUserInput.value

  await axios.patch(`${baseURL}/${id}`, { jobTitle, jobDescription, skill })

  $getUserInput.value = ""
  target[0].value = ""
  target[1].value = ""
  target[2].value = ""

  getUsers();
}

$getUserBtn.onclick = async e => {
  const id = $getUserInput.value
  const {
    data: { name, weapon, occupation }
  } = await axios.get(`${baseURL}/${id}`)

  document.querySelector("#job-title-update").value = jobTitle
  document.querySelector("#job-description-update").value = jobDescription
  document.querySelector("#skill-update").value = skill
}