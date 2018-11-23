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

