function checkout() {
    let roomSerialNo = document.getElementById('roomSerial');
    let roomNo = document.getElementById('roomNo');

    if(roomSerialNo.value == '' || roomNo.value == '') {
        alert('退房失敗，請確認您的訂房單號或序號輸入正確');
    }else{
        location.href = 'checkoutConfirm.html'
    }
};