let food = document.querySelector('#food-container')
let search = document.querySelector('.search')
let filter =  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
let ul= document.querySelector('.ul')
const nav = document.querySelector('.nav-value')

window.addEventListener('scroll',(()=>{
  const value = window.pageYOffset
  const nv = nav.getBoundingClientRect().height
  if (value > nv) {
      nav.classList.add('fixed')
  }
  
}))









let closebtn = document.querySelector('#closebtn').addEventListener('click',(()=>{
     ul.classList.remove('active')
}))

let click = document.querySelector('.click').addEventListener('click',(()=>{
       ul.classList.toggle('active')
}))


const qury =(food,filter)=>{
    fetch(filter)
.then(response => response.json())
.then(json => { 
     let html = ''
     if (json.meals) {
         json.meals.forEach((meal)=>{
            html += ` <div class="pro-container onclick" data-id='${meal.idMeal}'>
            <div class="pro">
            <a href="/ONCLICK/onclick.html" target="_blank">
               <img class='picture' src="${meal.strMealThumb}">
             </a> 
               <div class="des">
                 <span>recipies</span>
                 <h4>${meal.strMeal}</h4>
                 <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                 </div>
                 <div class="react">
                 <i id='cart' class="fa-solid fa-cart-shopping"></i>
                     <i id='heart' class="fas fa-heart"></i>
                 </div>
               </div>
            </div> 
         </div>`
         })
         
     }
    
     food.innerHTML = html

     const click = document.querySelectorAll('.picture')
     click.forEach((e)=>{
         e.addEventListener('click',((item)=>{
                const value = item.target.parentElement.parentElement.parentElement.dataset.id
                console.log(value)
                localStorage.setItem('id', value)
                
                 
         }))
     })

     const cart = document.querySelectorAll('#cart')
     cart.forEach((e)=>{
         e.addEventListener('click',((item)=>{
                const value = item.target.parentElement.parentElement.previousElementSibling.innerHTML
                localStorage.setItem('img', value)
               
                
                 
         }))
     })
     
}) 

} 
qury(food,filter)  

search.addEventListener('keyup',(()=>{
  const value = document.querySelector('.text').value
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}` 
  qury(food,url)
     
}))


// strMealThumb
// idMeal
