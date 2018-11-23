const GET_BOOK_ROOM_API = 'http://localhost:3000/wbskiosk.booking_room?';


function bookRoom() {
    let url = window.location.href;
    let urlParameter = url.substr(url.indexOf('?') + 1, url.length);
    let urlParams = new URLSearchParams(urlParameter);

    // fetch(
    //     GET_BOOK_ROOM_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid') + '&rooms=' + urlParams.get('rmno'),
    //     {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }
    // )
    // .then(res => res.json())
    // .then(data => {
    //     let roomListParent = document.getElementsByClassName('main')[0];
    //     document.getElementById('hotelId').value = data[0].hotelid;
    //     document.getElementById('machineId').value = data[0].machineid;
    //     document.getElementById('roomType').value = data[0].rmtype;
    //     document.getElementById('roomNo').value = data[0].rooms;
	// 	// createBackBtn(roomListParent);
    // });

    let fakeData = [
        {
            "hotelid"    : "KCSYS" ,
            "machineid"  : "K01"   ,
            "status"     : "0"     , 
            "statusmsg"  : "成功"  , 
            "rmtype"     : "A"     ,
            "rooms"      : "1001"
        },
        {
            "hotelid"    : "KCSYS" ,
            "machineid"  : "K01"   ,
            "status"     : "0"     , 
            "statusmsg"  : "成功"  , 
            "rmtype"     : "B"     ,
            "rooms"      : "1002"
        },
        {
            "hotelid"    : "KCSYS" ,
            "machineid"  : "K01"   ,
            "status"     : "0"     , 
            "statusmsg"  : "成功"  , 
            "rmtype"     : "C"     ,
            "rooms"      : "1003"
        },
        {
            "hotelid"    : "KCSYS" ,
            "machineid"  : "K01"   ,
            "status"     : "0"     , 
            "statusmsg"  : "成功"  , 
            "rmtype"     : "D"     ,
            "rooms"      : "1004"
        }
    ];

    let roomListParent = document.getElementsByClassName('main')[0];
    document.getElementById('hotelId').value = fakeData[0].hotelid;
    document.getElementById('machineId').value = fakeData[0].machineid;
    document.getElementById('roomType').value = fakeData[0].rmtype;
    document.getElementById('roomNo').value = fakeData[0].rooms;
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
function checkout() {
    let roomSerialNo = document.getElementById('roomSerial');
    let roomNo = document.getElementById('roomNo');

    if(roomSerialNo.value == '' || roomNo.value == '') {
        alert('退房失敗，請確認您的訂房單號或序號輸入正確');
    }else{
        location.href = 'checkoutConfirm.html'
    }
};
const GET_ROOM_TYPE_API = 'http://localhost:3000/wbskiosk.rmtype_query?';


function getRoomType() {
    let url = window.location.href;
    let urlParameter = url.substr(url.indexOf('?') + 1, url.length);
    let urlParams = new URLSearchParams(urlParameter);
 
    // fetch(
    //     GET_ROOM_TYPE_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'),
    //     {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }
    // )
    // .then(res => res.json())
    // .then(data => {
    //     let roomListParent = document.getElementsByClassName('main')[0];
    //     let roomAmount = data[0].rmtypes.length;
    //     let roomType = data[0].rmtypes;
    //     for(let i = 0 ; i < roomAmount ; ++ i) {
    //         let roomTypeElement = document.createElement('div');
    //         roomTypeElement.className = 'roomTypeList';
    //         roomTypeElement.innerHTML = `
    //             <a href="${'room.html?hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid') + '&rmtype=SS&days=5'}" class="roomType">
    //                 <div class="name">${roomType[i].rmtypename1} <span>${roomType[i].rmtypename2}<span></div>
    //                 <hr>
    //                 <div class="des">Price: ${roomType[i].price}</div>
    //                 <div class="des">Bed Type: ${roomType[i].bedtp}</div>
    //                 <div class="des">View: ${roomType[i].rmview}</div>
    //                 <div class="des">Count: ${roomType[i].vacqty}</div>
    //             </a>
    //         `;
    //         roomListParent.appendChild(roomTypeElement);
	// 	}
	// 	createBackBtn(roomListParent);
	// });
	let fakeData = [
		{
			"hotelid": "KCSYS",
			"machineid": "K01",
			"days": "5",
			"status": "0",
			"statusmsg": "Success",
			"rmtypes": [
				{
				"rmtype"      : "DS",
				"rmtypename1" : "豪華客房" ,
				"rmtypename2" : "DELUXE SINGLE" ,
				"price"       : 3400,
				"bedtp"       : "雙人二小床",
				"rmview"      : "山景" , 
				"vacqty"      : 2
				},
				{ "rmtype"      : "SS",
				"rmtypename1" : "雅緻客房" ,
				"rmtypename2" : "SUPERIOR SINGLE" ,
				"price"       : 3200 ,
				"bedtp"       : "單人小床",
				"rmview"      : "海景", 
				"vacqty"      : 3
				},
				{ "rmtype"      : "AS",
					"rmtypename1" : "普通客房" ,
					"rmtypename2" : "NORMAL SINGLE" ,
					"price"       : 3000 ,
					"bedtp"       : "單人小床",
					"rmview"      : "一般", 
					"vacqty"      : 5
				}       
			]
		}
	];
	let roomListParent = document.getElementsByClassName('main')[0];
	let roomAmount = fakeData[0].rmtypes.length;
	let roomType = fakeData[0].rmtypes;
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
    // console.log(GET_ROOM_API + 'hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'));
    // fetch(
    //     GET_ROOM_API + '?hotelid=' + urlParams.get('hotelid') + '&machineid=' + urlParams.get('machineid'),
    //     {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }
    // )
    // .then(res => res.json())
    // .then(data => {
    //     let roomListParent = document.getElementsByClassName('main')[0];

    //     let roomAmount = data[0].rooms.length;
    //     let rooms = data[0].rooms;
    //     for(let i = 0 ; i < roomAmount ; ++ i) {
    //         let roomTypeElement = document.createElement('div');
    //         roomTypeElement.className = 'roomTypeList'
    //         roomTypeElement.innerHTML = `
    //             <a href="bookRoom.html?hotelid=${data[0].hotelid}&machineid=${data[0].machineid}&rmtype=${data[0].rmtype}&rmno=${rooms[i].rmno}" class="roomType">
    //                 <div class="name">${rooms[i].rmno}</div>
    //                 <hr>
    //                 <div class="des">Door ID: ${rooms[i].doorid}</div>
    //             </a>
    //         `;
    //         roomListParent.appendChild(roomTypeElement);
    //     };
    //     createBackBtn(roomListParent);
    // });

    let fakeData = [
        {
            "hotelid"    : "KCSYS" ,
            "machineid"  : "K01"   ,
            "status"     : "0"     ,
            "statusmsg"  : "成功"  ,
            "rmtype"     : "DS"    ,
            "rooms"      :
              [
                {"rmno"     : "1001" , "doorid"     : "1"},
                {"rmno"     : "1002" , "doorid"     : "2"},
                {"rmno"     : "1003" , "doorid"     : "3"},
                {"rmno"     : "1004" , "doorid"     : "4"}
              ]
        }
    ];

    let roomListParent = document.getElementsByClassName('main')[0];
    let roomAmount = fakeData[0].rooms.length;
    let rooms = fakeData[0].rooms;
    for(let i = 0 ; i < roomAmount ; ++ i) {
        let roomTypeElement = document.createElement('div');
        roomTypeElement.className = 'roomTypeList'
        roomTypeElement.innerHTML = `
            <a href="bookRoom.html?hotelid=${fakeData[0].hotelid}&machineid=${fakeData[0].machineid}&rmtype=${fakeData[0].rmtype}&rmno=${rooms[i].rmno}" class="roomType">
                <div class="name">${rooms[i].rmno}</div>
                <hr>
                <div class="des">Door ID: ${rooms[i].doorid}</div>
            </a>
        `;
        roomListParent.appendChild(roomTypeElement);
    };
    createBackBtn(roomListParent);
};

