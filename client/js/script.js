const baseURL = 'http://localhost:3001';
$(document).ready(function() {
    console.log('ready')

    getEvents();
})

function getEvents() {
    axios({
        url: `${baseURL}/events`,
        method: 'GET'
    })
        .then(({data}) => {
            console.log(data)
            showCard(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function createCard(event) {
    let date = formatDate(event.start);
    let card = `
    <div class="col-sm-3 d-flex">
        <div class="card" style="width: 22rem;">
            <img src="${event.logo.url}" alt="">
            <div class="card-body">
                <p class="mb-0" style="font-size: 0.8rem">${date}</p>
                <strong class="" style="font-size: 1.2rem">${event.name}</strong>
                <p style="font-size: 0.9rem">${event.venue.name}</p>
                <a href="#" class="btn btn-primary">Save</a>
            </div>
        </div>
    </div>
    `
    return card;
}

function showCard(data) {
    data.forEach(event => {
        let card = createCard(event);
        $('#eventList').append(card)
    });
}

function formatDate(strDate) {
    let date = new Date(strDate);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let year = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return `${dd}-${mm}-${year}`;
}