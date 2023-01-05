const container = document.querySelector('.container')
const id = localStorage.getItem('id')
const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`


   fetch(URL)
   .then(Response => Response.json())
   .then(json =>{
      let html = '';
           if (json.meals){
               json.meals.map((e)=>{
                  html += `<div class="img-container">
                  <img src="${e.strMealThumb}">
              </div>
               <h1>${e.strMeal}</h1>
              <h3>Ingridaints</h3>
              <h4>
              ${e.strIngredient1}, ${e.strIngredient2}, ${e.strIngredient3}, ${e.strIngredient4},
              ${e.strIngredient5},${e.strIngredient6}, ${e.strIngredient7}, ${e.strIngredient8},
              ${e.strIngredient9}, ${e.strIngredient10}, ${e.strIngredient11}, ${e.strIngredient12},
              ${e.strIngredient13}, ${e.strIngredient14}, ${e.strIngredient15}, ${e.strIngredient16},
              
              </h4>
              <div class="text">
                  <p>
                    ${e.strInstructions}
                  </p>
              </div>`
               })
           }
           container.innerHTML = html
            console.log(html)
      
   
    })



//     dateModified
// : 
// null
// idMeal
// : 
// "53048"
// strArea
// : 
// "Malaysian"
// strCategory
// : 
// "Seafood"
// strCreativeCommonsConfirmed
// : 
// null
// strDrinkAlternate
// : 
// null
// strImageSource
// : 
// null
// strIngredient1
// : 
// "Peanuts"
// strIngredient2
// : 
// "Chilli"
// strIngredient3
// : 
// "Prawns"
// strIngredient4
// : 
// "Oil"
// strIngredient5
// : 
// "Water"
// strIngredient6
// : 
// "Tamarind Paste"
// strIngredient7
// : 
// "Potatoes"
// strIngredient8
// : 
// "Red Onions"
// strIngredient9
// : 
// "Garlic Clove"
// strIngredient10
// : 
// "Cabbage"
// strIngredient11
// : 
// "Chinese Broccoli"
// strIngredient12
// : 
// "Tofu"
// strIngredient13
// : 
// "Soy Sauce"
// strIngredient14
// : 
// "Noodles"
// strIngredient15
// : 
// "Egg"
// strIngredient16
// : 
// ""
// strIngredient17
// : 
// ""
// strIngredient18
// : 
// ""
// strIngredient19
// : 
// ""
// strIngredient20
// : 
// ""
// strInstructions
// : 
// "Heat oil in a pan at medium heat. Then, add peanuts, dried chilies, dried shrimps and dhal. Fry the aromatics until fragrant. Remove from pan and leave aside.\r\n\r\nBlend fried ingredients with tamarind paste and water until fine. Then, sauté the blended ingredients in oil heated over low heat. Continue cooking until the oil separates from the paste and turns a darker shade.\r\n\r\nSkin and cut potatoes into small chunks and boil them in a pot of water until knife-tender. Once ready, remove them from the pot and leave aside. Discard water.\r\n\r\nSlice onion and fried tofu, mince garlic, cut some cabbage and Chinese flowering cabbage (choi sam). Prepare prawn fritters and cut them. Boil noodles to soften them if bought dried. Also mix black soy sauce with water.\r\n\r\nTo fry one portion of mee goreng mamak, heat oil and add 1/4 of the following ingredients in this order: garlic, onion, paste. Sauté until fragrant. Optionally, add prawns.\r\n\r\nAdd in 1/4 amount of tofu, boiled potatoes, cabbage, Chinese flowering cabbage and prawn fritters. Sauté for another 30 seconds.\r\n\r\nAdd noodles to the wok. Add 3 tablespoons of dark soy sauce mixture. Mix evenly for the next 1 minute. Then, move the noodles to the side of the wok. Stir in an egg. Garnish with a slice of lime and slices of green chilies. To cook another plate of noodles, repeat from step 5 onwards."
// strMeal
// : 
// "Mee goreng mamak"
// strMealThumb
// : 
// "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg"
// strMeasure1
// : 
// "50g"
// strMeasure2
// : 
// "15g"
// strMeasure3
// : 
// "10g"
// strMeasure4
// : 
// "5 tbs"
// strMeasure5
// : 
// "750 ml "
// strMeasure6
// : 
// "1/2 tbs"
// strMeasure7
// : 
// "250g"
// strMeasure8
// : 
// "2"
// strMeasure9
// : 
// "4"
// strMeasure10
// : 
// "30g"
// strMeasure11
// : 
// "30g"
// strMeasure12
// : 
// "1"
// strMeasure13
// : 
// "1 tbs"
// strMeasure14
// : 
// "4"
// strMeasure15
// : 
// "1"
// strMeasure16
// : 
// " "
// strMeasure17
// : 
// " "
// strMeasure18
// : 
// " "
// strMeasure19
// : 
// " "
// strMeasure20
// : 
// " "
// strSource
// : 
// "https://www.nyonyacooking.com/recipes/mee-goreng-mamak~BkTLRjTuX"
// strTags
// : 
// null
// strYoutube
// : 
// "https://www.youtube.com/watch?v=pOJEmDBgtSk"