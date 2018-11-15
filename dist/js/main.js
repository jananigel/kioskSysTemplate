const GET_BOOK_ROOM_API = 'http://localhost:3000/wbskiosk.booking_room?';


function bookRoom() {
    let url = window.location.href;
    let urlParameter = url.substr(url.indexOf('?') + 1, url.length);
    let urlParams = new URLSearchParams(urlParameter);

    fetch(
        GET_BOOK_ROOM_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid') + '&rooms=' + urlParams.get('rmno'),
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
        document.getElementById('hotelId').value = data[0].hotelid;
        document.getElementById('machineId').value = data[0].machineid;
        document.getElementById('roomType').value = data[0].rmtype;
        document.getElementById('roomNo').value = data[0].rooms;
		// createBackBtn(roomListParent);
    });
};
function onCheckInClick() {
    // let formData = new FormData(document.getElementById('infoForm'));
    let formData = new URLSearchParams(new FormData(document.getElementById('infoForm')));
    console.log(formData.toString());
    location.href = 'checkinConfirm.html?' + formData.toString();
    // [...formData.entries()].map(data => {
    //     console.log(data);
    // })
    // let formStr;
    // for(let i = 0 ; i < formData.elements.length ; ++ i) {
    //     console.log(formData.elements[i].name);
    // };
};

function onChangeClick() {

};
const GET_ROOM_TYPE_API = 'http://localhost:3000/wbskiosk.rmtype_query?';


function getRoomType() {
    let url = window.location.href;
    let urlParameter = url.substr(url.indexOf('?') + 1, url.length);
    let urlParams = new URLSearchParams(urlParameter);
 
    fetch(
        GET_ROOM_TYPE_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'),
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
        let roomAmount = data[0].rmtypes.length;
        let roomType = data[0].rmtypes;
        for(let i = 0 ; i < roomAmount ; ++ i) {
            let roomTypeElement = document.createElement('div');
            roomTypeElement.className = 'roomTypeList';
            roomTypeElement.innerHTML = `
                <a href="${'room.html?hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid') + '&rmtype=SS&days=5'}" class="roomType">
                    <div class="name">${roomType[i].rmtypename1} <span>${roomType[i].rmtypename2}<span></div>
                    <hr>
                    <div class="des">Price: ${roomType[i].price}</div>
                    <div class="des">Bed Type: ${roomType[i].bedtp}</div>
                    <div class="des">View: ${roomType[i].rmview}</div>
                    <div class="des">Count: ${roomType[i].vacqty}</div>
                </a>
            `;
            roomListParent.appendChild(roomTypeElement);
		}
		createBackBtn(roomListParent);
	});
};

createBackBtn = (roomListParent) => {
    let backBtnElement = document.createElement('a');
    backBtnElement.innerHTML = 'Back';
    backBtnElement.className = 'backBtn';
    roomListParent.appendChild(backBtnElement);

    backBtnElement.addEventListener('click', () => {
        window.history.back();
    });
};
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

