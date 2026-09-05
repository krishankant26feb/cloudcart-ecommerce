const products=[
{id:1,name:"CloudBook Pro",cat:"Electronics",price:69999,icon:"💻",desc:"High-performance laptop for cloud and creative workloads."},
{id:2,name:"CloudPhone X",cat:"Electronics",price:42999,icon:"📱",desc:"Modern smartphone with fast performance and great display."},
{id:3,name:"Smart Watch",cat:"Accessories",price:8999,icon:"⌚",desc:"Fitness tracking and smart notifications on your wrist."},
{id:4,name:"Wireless Buds",cat:"Accessories",price:3499,icon:"🎧",desc:"Compact wireless audio with clear sound."},
{id:5,name:"Smart Speaker",cat:"Home",price:5999,icon:"🔊",desc:"Voice-enabled smart speaker for your home."},
{id:6,name:"Cloud Camera",cat:"Home",price:7499,icon:"📷",desc:"Connected camera for simple home monitoring."},
{id:7,name:"Mechanical Keyboard",cat:"Accessories",price:5499,icon:"⌨️",desc:"Comfortable keyboard for developers and creators."},
{id:8,name:"4K Monitor",cat:"Electronics",price:25999,icon:"🖥️",desc:"Sharp 4K display for productivity and entertainment."}
];
let cart=JSON.parse(localStorage.getItem("cloudcart-cart")||"[]");
const grid=document.querySelector("#productsGrid"),search=document.querySelector("#search"),category=document.querySelector("#category");
function money(n){return n.toLocaleString("en-IN")}
function render(){
 const q=search.value.toLowerCase(),c=category.value;
 const list=products.filter(p=>(p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q))&&(c==="all"||p.cat===c));
 grid.innerHTML=list.map(p=>`<article class="product"><div class="productImg">${p.icon}</div><div class="productBody"><small>${p.cat}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="price">₹${money(p.price)}</div><button class="add" onclick="addToCart(${p.id})">Add to Cart</button></div></article>`).join("");
}
function save(){localStorage.setItem("cloudcart-cart",JSON.stringify(cart));updateCount()}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);save();alert(`${p.name} added to cart`)}
function updateCount(){document.querySelector("#cartCount").textContent=cart.length}
function openCart(){document.querySelector("#cartModal").classList.remove("hidden");const items=document.querySelector("#cartItems");items.innerHTML=cart.length?cart.map((p,i)=>`<div class="cartRow"><span>${p.icon} ${p.name}</span><strong>₹${money(p.price)} <button onclick="removeItem(${i})">×</button></strong></div>`).join(""):"<p>Your cart is empty.</p>";document.querySelector("#cartTotal").textContent=money(cart.reduce((a,p)=>a+p.price,0))}
function removeItem(i){cart.splice(i,1);save();openCart()}
search.addEventListener("input",render);category.addEventListener("change",render);
document.querySelector("#cartBtn").onclick=openCart;document.querySelector("#closeCart").onclick=()=>document.querySelector("#cartModal").classList.add("hidden");
document.querySelector("#checkout").onclick=()=>{if(!cart.length)return alert("Your cart is empty.");alert("Demo checkout successful! No real payment was processed.");cart=[];save();openCart()};
render();updateCount();