let counter=0
let title = document.getElementById('title')
function increment(){
    counter++;
    title.textContent = counter
}
function decrement(){
    counter--;
    title.textContent = counter

}
function reset(){
    count = 0;
    title.textContent =count

}