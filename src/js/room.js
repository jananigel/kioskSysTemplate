const GET_ROOM_API = 'http://localhost:3000/wbskiosk.room_query';


function getRoom() {
    let url = window.location.href;
    let urlParameter = url.substr(url.indexOf('?') + 1, url.length);
    let urlParams = new URLSearchParams(urlParameter);
    console.log(GET_ROOM_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'));
    fetch(
        GET_ROOM_API + '?hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'),
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then(data => {
        let roomListParent = document.getElementsByClassName('main')[0];

        let roomAmount = data[0].rooms.length;
        let rooms = data[0].rooms;
        for(let i = 0 ; i < roomAmount ; ++ i) {
            let roomTypeElement = document.createElement('div');
            roomTypeElement.className = 'roomTypeList'
            roomTypeElement.innerHTML = `
                <a href="bookRoom.html?hotelid=${data[0].hotelid}&machineid=${data[0].machineid}&rmtype=${data[0].rmtype}&rmno=${rooms[i].rmno}" class="roomType">
                    <div class="name">${rooms[i].rmno}</div>
                    <hr>
                    <div class="des">Door ID: ${rooms[i].doorid}</div>
                </a>
            `;
            roomListParent.appendChild(roomTypeElement);
        };
        createBackBtn(roomListParent);
    });
};

