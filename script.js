const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;


document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;


let pictoX = document.querySelectorAll('.delete')

for (let i = 0; i < pictoX.length; i++) {
  pictoX[i].addEventListener('click',
    function () {
      pictoX[i].parentNode.remove();

      document.querySelector('#count').textContent = document.querySelectorAll('p').length
    }
  )
}

document.querySelector('#btn-add').addEventListener('click',
  function () {
    let message = document.querySelector('#btn-add').previousElementSibling.value

    document.querySelector('#msg-container').innerHTML += ` 
    <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>John Doe</h6>
        <p>${message}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `;

    document.querySelector('#btn-add').previousElementSibling.value = ''

    document.querySelector('#count').textContent = document.querySelectorAll('p').length


    let pictoX = document.querySelectorAll('.delete')

    for (let i = 0; i < pictoX.length; i++) {
      pictoX[i].addEventListener('click',
        function () {
          pictoX[i].parentNode.remove();

          document.querySelector('#count').textContent = document.querySelectorAll('p').length
        }
      )
    }
  }
)

document.querySelector('#btn-search').addEventListener('click',
  function () {
    let textToCompare = document.querySelector('#search-message').value

    for (let i = 0; i < document.querySelectorAll('h6').length; i++) {

      if (!document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare.toLowerCase())) {

        document.querySelectorAll('h6')[i].parentNode.parentNode.style.display = "none"
      } else {
        document.querySelectorAll('h6')[i].parentNode.parentNode.style.display = "flex"
      }
    }
    document.querySelector('#search-message').value = ''
  }
)


