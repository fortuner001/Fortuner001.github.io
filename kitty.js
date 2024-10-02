function kitty() {     
    var ct = document.createElement('img');
    ct.src = 'https://i.pinimg.com/originals/20/25/e3/2025e3a667ad4ecd3ac81d2595f25825.gif';
    ct.height = '140';
    ct.width = '190';
    document.body.appendChild(ct);
    var btn = document.getElementsByClassName('catbtn');
    btn.remove();
}