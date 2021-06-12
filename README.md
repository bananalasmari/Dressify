# Dressify
![wireframe](/dressify/src/assets/logo.png)
#### Developed With ❤️ by Fullstackers

## Project Discription
#### E-commerce webiste BUY. SELL. DISCOVER UNIQUE FASHION Designers. Vintage, High Fashion Brands. 

### Team Members:

- Banan Alasmari 

- Rawan Alshehri

- Manal Alotaibi


---


## Technologies & Tools used 

* JavaScript/jQuery
* HTML/CSS
* React
* Express
* Node.js
* react-bootstrap-v5
* styled-components
* Ajax
* MongoDB
* AOS
* sweetalert2
* @fortawesome
* moqups used for designing the Wireframe

---
## application architecture
### ER diagram

![ ](/dressify/src/assets/imges/Dressify-ERD.png)

## User Stories

* As a user, i want to login/register, so that i can interact with the website
* As a user, i want press more info button , so i can see all available items.

* As a user, I want to be able to choose a Categories, so that I can start shopping.

* As a user, I want to press cart button. so that I can view my shopping cart. 

* As a user, I want to press the order button to buy my selected items.

* As a user, i want to see my shopping cart and choose the required payment method.




## Wireframe

![ ](/dressify/src/assets/imges/Dressify-Prototype.png)


---

### Unsolved Problems
```Python
def quiz(request, title):
    cat=Category.objects.get(title=title)
    quiz=Quiz.objects.filter(category=cat)
    return render(request,‘quizes/main.html’,{‘quiz’:quiz})
    
   ```
