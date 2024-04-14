
console.log('Hello World')
var updateBtns = document.getElementsByName('update-cart')

for (i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function (){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('Product Id:', productId, ' | Action: ', action)
    })
}