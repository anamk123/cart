var large = document.getElementById('large');
var medium = document.getElementById('medium');
var cart = document.getElementById('myCart');
var cartItems = document.getElementById('cartItems');
var small = document.getElementById('small');
var button = document.getElementById("btn").addEventListener("click", buttonCicked);
var sizeValue = document.getElementById('selectedSize');     


//settign attribute of size small and change bg colour onclick, changing size beside label
function smallClicked(){

    small.setAttribute( 'name' , 'small')
    console.log(small.getAttribute('name'));

    small.style.color = 'red';
    large.style.color = 'black';
    medium.style.color = 'black';
    medium.removeAttribute('name');
    large.removeAttribute('name');
    sizeValue.innerHTML = 'S'


}

//settign attribute of size small and change bg colour onclick, changing size beside label

function medClicked(){

    medium.setAttribute( 'name' , 'medium')

    console.log('medium');
    medium.style.color = 'red';
    small.style.color = 'black';
    large.style.color = 'black';
    small.removeAttribute('name');
    large.removeAttribute('name');
    sizeValue.innerHTML = 'M'


    
}
//settign attribute of size small and change bg colour onclick, changing size beside label

function largeClicked(){

    large.setAttribute( 'name' , 'large')

    small.removeAttribute('name');
    console.log('large');
    large.style.color = 'red';
    medium.style.color = 'black';
    small.style.color = 'black';
    small.removeAttribute('name');
    medium.removeAttribute('name');    
    sizeValue.innerHTML = 'L'

}

//show and hide carts
function cartToggle() {
    cartItems.classList.toggle('noDisplay');
}

function buttonCicked() {
    // seeing if button is cicked based on the attribute set from previous functions and then appnding to a list item to show on cart
    if(small.getAttribute('name')==='small'){
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode("smallItem");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        cartItems.appendChild(node);
     }

     else if(medium.getAttribute('name')==='medium'){
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode("mediumITems");         // Create a text node
        node.appendChild(textnode);
        cartItems.appendChild(node);
     
         }

         else if(large.getAttribute('name')==='large'){
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode("largeItem");         // Create a text node
            node.appendChild(textnode);
            cartItems.appendChild(node);
            
             }
            
             else alert('no size selected');    
            //updating the count of items for cart to display
             var spanValue = document.getElementById('spanValue');     

             spanValue.innerHTML = '&nbsp' + +(cartItems.childElementCount + -1);
    }
   