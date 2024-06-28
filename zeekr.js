
function qora() {
    var img =  document.getElementById('op');
    img.src = 'zeekr1_qora.png'
}

function seri() {
    var img =  document.getElementById('op');
    img.src = 'zeekr2_seri.png'
}

function oq() {
    var img =  document.getElementById('op');
    img.src = 'zeekr3_oq.png'
}

function kok() {
    var img =  document.getElementById('op');
    img.src = 'zeekr4_kok.png'
}

function sariq() {
    var img =  document.getElementById('op');
    img.src = 'zeekr5_sariq.png'
}

// ===

var hh = document.querySelector('.hh');
var bb = document.getElementById('b1');
var bb2 = document.getElementById('b2');
var bb3 = document.getElementById('b3');
function brinchi() {
    var img = document.getElementById("qq");
    img.src = "slide_1p.png";
    bb.classList.add('exu');
    bb2.classList.remove('exu');
    bb3.classList.remove('exu');
} 
function ikkinchi() {
    var img = document.getElementById("qq");
    img.src = "slide_2p.png";
    hh.classList.remove('exu');
    bb.classList.remove('exu');
    bb2.classList.add('exu');
    bb3.classList.remove('exu');
} 
function uchinchi() {
    var img = document.getElementById("qq");
    img.src = "slide_3p.png";
    bb3.classList.add('exu');
    bb2.classList.remove('exu');
    bb.classList.remove('exu');
}


















// ===========


function koko() {
    var img = document.getElementById('salon');
    img.src = 'salon1.png';
}

function so() {
    var img = document.getElementById('salon');
    img.src = 'salon2.png';
}

// =========


var hhh = document.querySelector('.hh2');
var bbb = document.getElementById('bp1');
var bbb2 = document.getElementById('bp2');
var bbb3 = document.getElementById('bp3');
function br1() {
    var img = document.getElementById("pasgi");
    img.src = "interior-slide1.png";
    bbb.classList.add('exu2');
    bbb2.classList.remove('exu2');
    bbb3.classList.remove('exu2');
}

function ikki2() {
    var img = document.getElementById("pasgi");
    img.src = "interior-slide2.png";
    hhh.classList.remove('exu2');
    bbb.classList.remove('exu2');
    bbb2.classList.add('exu2');
    bbb3.classList.remove('exu2');
   
} 

function uch3() {
    var img = document.getElementById("pasgi");
    img.src = "interior-slide3.png";
    bbb3.classList.add('exu2');
    bbb2.classList.remove('exu2');
    bbb.classList.remove('exu2');
  
}



var swiper = new Swiper(".mySwiper", {});
var swiper = new Swiper(".mySwip", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   =====







var h123 = document.querySelector('.hh2');
var bbp = document.getElementById('bbp11');
var bbp2 = document.getElementById('bbp22');
var bbp3 = document.getElementById('bbp33');
function smart1() {
    var img = document.getElementById("smart");
    img.src = "smart-cockpit-slide-01.png";
    bbp.classList.add('exu3');
    bbp2.classList.remove('exu3');
    bbp3.classList.remove('exu3');
} 

function smart2() {
    var img = document.getElementById("smart");
    img.src = "smart-cockpit-slide-02.png";
    h123.classList.remove('exu3');
    bbp.classList.remove('exu3');
    bbp2.classList.add('exu3');
    bbp3.classList.remove('exu3');
} 

function smart3() {
    var img = document.getElementById("smart");
    img.src = "smart-cockpit-slide-03.png";
    bbp3.classList.add('exu3');
    bbp2.classList.remove('exu3');
    bbp.classList.remove('exu3');
} 
