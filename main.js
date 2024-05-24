const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector (".theme-toggler");
//show slidebar
menuBtn.addEventListener('click', () => { sideMenu.style.display = 'block'; });
//close slidebar
closeBtn.addEventListener('click', () => { sideMenu.style.display = 'none'; });

//color theme
themeToggler.addEventListener('click', () => {
 document.body.classList.toggle('dark-theme-variables');

 themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
 themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//fill orders on table
Orders.forEach(order => {
 const tr = document.createElement('tr');
 const trContent = `
   <td>${order.productName}</td>
   <td>${order.productNumber}</td>
   <td>${order.productStatus}</td>
   <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
   <td class="primary">Delivered</td>
 `;
 tr.innerHTML = trContent;
 document.querySelector('table tbody').appendChild(tr);
})
