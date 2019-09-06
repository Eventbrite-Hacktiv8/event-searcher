const baseURL = 'http://localhost:3000';
$(document).ready(function() {
    console.log('ready')

    getEvents();
    getCategories();

    $('#categoryList').change(function() {
        let categoryId = $(this).val();
        clearEventList();
        filterByCategory(categoryId);
    })

    $('#searchByCity').keypress(function(event) {
        let keycode = event.keyCode || event.which;
        if (keycode == '13') {
            event.preventDefault();
            clearEventList();
            filterByCity($(this).val());
        }
    })
    $('#searchByEventName').keypress(function(event) {
        let keycode = event.keyCode || event.which;
        if (keycode == '13') {
            event.preventDefault();
            clearEventList();
            filterByEventName($(this).val());
        }
    })

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

function createCard(event, i) {
    let date = formatDate(event.start);
    let card = `
    <div class="col-sm-3 d-flex">
        <div class="card" style="width: 22rem;">
                <span class="eventId" hidden>${event.id}</span>
                <span class="eventAddress" hidden>${event.venue.address}</span>
                <img src="${event.logo.url}" alt="" id="imgUrl" class="imgUrl">
                <div class="card-body">
                    <p class="mb-0 date" style="font-size: 0.8rem" id="date">${date}</p>
                    <strong class="eventName" id="eventName" style="font-size: 1.2rem">${event.name}</strong>
                    <p class="venue" id="venue" style="font-size: 0.9rem">${event.venue.name}</p>
                    <button class="btn btn-primary" onclick="saveEvent(this)" data-index=${i}>Save</button>
                </div>
           
        </div>
    </div>
    `
    return card;
}

function showCard(data) {
    data.forEach((event, i) => {
        let card = createCard(event, i);
        $('#eventList').append(card);
    });
}

function clearEventList() {
    $('#eventList').html('')
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


function saveEvent(event) {
    let index = event.getAttribute('data-index');
    console.log(event)
    console.log(index)

    // console.log($('.eventName')[Number(index)])
    // console.log($('.eventName')[Number(index)].textContent)
    let eventId = $('.eventId')[Number(index)].textContent;;
    let name = $('.eventName')[Number(index)].textContent;
    let venue = $('.venue')[Number(index)].textContent;

    console.log(eventId)
    console.log(name)
    console.log(venue)
    axios({
        url: `${baseURL}/events`,
        method: 'POST',
        data: {
            eventId,
            name,
            venue
        }
    })
        .then((response) => {
            console.log(response)
            alert(response.data.message)
        })
        .catch(err => {
            console.log(err)
            if (err.request) {
                console.log(err.request)
                alert(err.request.responseText)
            } else {
                console.log(err);
            }
            // alert(err.message)
        })
}

function getCategories() {
    axios({
        url: `${baseURL}/categories`,
        method: 'GET'
    })
        .then(({data}) => {
            console.log(data)
            insertOptionCategory(data)
        })
        .catch(err => {
            console.log(err)
        })
}

function createOptionCategory(category) {
    let option = `<option value="${category.id}">${category.name}</option>`;
    return option;
}

function insertOptionCategory(data) {
    data.forEach(category => {
        let option = createOptionCategory(category);
        $('#categoryList').append(option)
    })
}

function filterByCategory(categoryId) {
    axios({
        url: `${baseURL}/events/search?categories=${categoryId}`,
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

function filterByCity(city) {
    axios({
        url: `${baseURL}/events/search?location.address=${city}`,
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

function filterByEventName(eventName) {
    axios({
        url: `${baseURL}/events/search?q=${eventName}`,
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

