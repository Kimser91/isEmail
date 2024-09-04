updateView()
function updateView() 
{
    document.getElementById('app').innerHTML = /*html*/ 
    `
    <div class="main">
    <div id="display">This is an Email: ${answer}</div>
    <input type="text" onchange="checkEmail(this.value)">
    </div>
    `
}