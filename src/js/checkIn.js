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