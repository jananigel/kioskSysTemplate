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