
let topnav = document.getElementById('topnav');
if (topnav) {
  let sticky = topnav.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
      topnav.classList.add('sticky');
    } else {
      topnav.classList.remove('sticky');
    }
  };
}

let accordions = document.getElementsByClassName('accordion');
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.display == 'block')
      panel.style.display = 'none';
    else
      panel.style.display = 'block';
    });
}

function readMore(pt) {
  let more = document.getElementById('more-' + pt);
  let btn = document.getElementById(pt);
  if (!more.style.display || more.style.display == 'none') {
    more.style.display = 'block';
    btn.innerHTML = '-';
  } else {
    more.style.display = 'none';
    btn.innerHTML = '+';
  }
}
