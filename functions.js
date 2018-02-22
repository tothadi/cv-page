window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('fixed-nav').style.display = 'flex';
    } else {
        document.getElementById('fixed-nav').style.display = 'none';
    }
}

function scrollStop() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
}

function scrollStart() {
    document.body.style.overflow = 'auto';
    document.body.style.height = '';
}

function menuDescrOn() {
    var menuCount = event.target.className.charAt(5);
    var menuItem = document.getElementById('menu-descr-' + menuCount);
    event.target.style.display = 'none';
    menuItem.style.display = 'block';
}

function menuDescrOff() {
    var menuCount = event.target.className.charAt(5);
    var menuItem = document.getElementById('menu-button-' + menuCount);
    event.target.style.display = 'none';
    menuItem.style.display = 'block';
}

function fixedNavOn() {
    for (i = 0; i < 6; i++) {
        var fixedItem = document.getElementsByClassName('fixed-menu');
        fixedItem[i].style.display = 'flex';
    }
}

function fixedNavOff() {
    for (i = 0; i < 6; i++) {
        var fixedItem = document.getElementsByClassName('fixed-menu');
        fixedItem[i].style.display = 'none';
    }
}

function closePic() {
    scrollStart();
    document.getElementById('excel-function').style.display = 'none';
    document.getElementById('pic-close-button').style.display = 'none';
}

function closeFunction() {
    for (i = 1; i < 13; i++) {
        document.getElementById('desc-' + i).style.display = 'none';
        document.getElementById('skill-' + i).style.backgroundColor = '';
        document.getElementById('skill-' + i).style.top = '';
    };
    document.getElementById('close-button').style.display = 'none';
    closePic();
}

function mainClose() {
    document.getElementById('contact').style.borderTop = 'none';
    closeFunction();
    var i = 1;
    for (; i < 7; i++) {
        document.getElementById('content-' + i).style.display = 'none';
    }
}

function thumbScroll() {
    var evt = window.event || e;
    var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;

    if (delta < 0) {
        document.getElementById('thumbs').scrollBy(30, 0);
    } else {
        document.getElementById('thumbs').scrollBy(-30, 0);
    }
}

function contentFunction() {
    closeFunction();
    for (i = 1; i < 7; i++) {
        document.getElementById('content-' + i).style.display = 'none';
    }
    var menuItem = event.target.className.charAt(5);
    document.getElementById('content-' + menuItem).style.display = 'block';
    document.getElementById('contact').style.borderTop = '1px solid rgba(0, 0, 0, .5)';
    var i = 1;
    do {
        if (i != menuItem) {
            document.getElementById('content-' + i).style.display = 'none';
            if (i = 6) {
                iMax = document.getElementsByClassName('hobby-thumb').length + 1;
                for (i = 1; i < iMax; i++) {
                    document.getElementById('thumb-' + i).addEventListener('click', gallery);
                }
            }
        }
        i++;
    }
    while (i < 7);
    window.scrollTo(0, document.getElementById('header').clientHeight + document.getElementById('intro').clientHeight);
}

function skillFunction() {
    closeFunction();
    var i = 1;
    var skItem;
    if (event.target.id.length == 7) {
      skItem = event.target.id.charAt(6);
    } else {
      skItem = event.target.id.charAt(6).concat(event.target.id.charAt(7));
    }
    document.getElementById('desc-' + skItem).style.display = 'block';
    var iconPos = event.target.offsetTop;
    document.getElementById('skill-' + skItem).style.top = iconPos + 30 + 'px';
    event.target.style.backgroundColor = 'rgba(50, 50, 50, .5)';
    var descLeft = document.getElementById('desc-' + skItem).offsetLeft;
    var descWidth = document.getElementById('desc-' + skItem).clientWidth;
    var clBtTop = document.getElementById('desc-' + skItem).offsetTop + 13;
    var clBtleft = descLeft + descWidth - 65;
    document.getElementById('close-button').style.top = clBtTop + 'px';
    document.getElementById('close-button').style.left = clBtleft + 'px';
    document.getElementById('close-button').style.display = 'block';
    for (; i <= 12; i++) {
        if (i != skItem) {
            document.getElementById('desc-' + i).style.display = 'none';
        }
    }
}

function excelPic() {
    scrollStop();
    document.getElementById('excel-function').style.display = 'block';
    var excScrTop = (window.innerHeight - document.getElementById('excel-function').clientHeight) / 2;
    var excScrLeft = document.getElementById('excel-function').offsetLeft;
    var excScrWidth = document.getElementById('excel-function').clientWidth;
    var piClLeft = excScrLeft + excScrWidth - 65;
    document.getElementById('excel-function').style.top = excScrTop + 'px';
    document.getElementById('pic-close-button').style.display = 'block';
    document.getElementById('pic-close-button').style.top = excScrTop + 12 + 'px';
    document.getElementById('pic-close-button').style.left = piClLeft + 'px';
}

function gallery(event) {
    scrollStop();
    document.getElementById('fixed-nav').style.display = 'none';
    var gallery = document.getElementById('gallery');
    var currentPic = document.getElementById('current-pic');
    var bigPic = document.getElementById('big-pic');
    var picCap = document.getElementById('pic-cap');
    document.getElementById('thumbs').className = 'gallery-thumbs';
    bigPic.src = event.currentTarget.src;
    bigPic.alt = event.currentTarget.alt;
    picCap.innerHTML = event.currentTarget.alt;
    gallery.style.display = 'flex';
    galleryItems = gallery.children;
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.display = 'flex';
    }
}

function changeLeft(event) {
    var bigPic = document.getElementById('big-pic');
    var picIndex = bigPic.src.charAt(bigPic.src.length - 5);
    var picCap = document.getElementById('pic-cap');
    var picTotal = document.getElementsByClassName('hobby-thumb').length;
    if (picIndex == 1) {
        bigPic.src = bigPic.src.replace(picIndex, picTotal);
        picCap.innerHTML = document.getElementById('thumb-' + picTotal).alt;
    } else {
        bigPic.src = bigPic.src.replace(picIndex, picIndex - 1);
        picCap.innerHTML = document.getElementById('thumb-' + (picIndex - 1)).alt;
    }
}

function changeRight(event) {
    var zeroIndex = 0;
    var bigPic = document.getElementById('big-pic');
    var picIndex = bigPic.src.charAt(bigPic.src.length - 5);
    var picCap = document.getElementById('pic-cap');
    var picTotal = document.getElementsByClassName('hobby-thumb').length;
    if (picIndex == picTotal) {
        bigPic.src = bigPic.src.replace(picIndex, 1);
        picCap.innerHTML = document.getElementById('thumb-' + 1).alt;
    } else {
        bigPic.src = bigPic.src.replace(picIndex, picIndex - (0 - 1));
        picCap.innerHTML = document.getElementById('thumb-' + (picIndex - (0 - 1))).alt;
    }
}

function closeGallery() {
    var gallery = document.getElementById('gallery');
    gallery.style.display = 'none';
    galleryItems = gallery.children;
    for (i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.display = 'block';
    }
    document.getElementById('thumbs').className = 'thumb-box';
    scrollStart();
}

function picScroll() {
    var evt = window.event || e;
    var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;

    if (delta < 0) {
        changeRight();
    } else {
        changeLeft();
    }
}