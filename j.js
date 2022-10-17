const btn = document.getElementById('.b1')

const con = document.getElementById('t');

document.querySelector('.btn').onclick = function()
{
    
    const n = document.createElement('div');
    n.classList.add('to')
    n.innerHTML = getOTP();
    setTimeout(()=>{
        con.appendChild(n);
    },1000)
  

    setTimeout(()=>{
        n.remove();
    },100000)


}

function getOTP()
{

        const o = Math.round(Math.random()*10000)
        const r = o + '';
        if(r.length == 4)
        {
            return o;
        }
        else
        {
            return getOTP()
        }

}



document.querySelector('.button1').onclick = function()
{
    var userInput = document.querySelector('.in').value;
    var O = t.innerText
    console.log(userInput)
    console.log(O)
    if(O == userInput)
    {
        f = document.querySelector('.form');
        f.innerHTML = `<center><p class = "fa fa-check-circle" id ="c" ></p><h2 class = "correct">Your account has been <br/> Verified Successfully.</h2></center>`
    }
    else
    {
        f = document.querySelector('.form');
        f.innerHTML = `<center> <p class = "fa fa-times" id ="w"  > </p> <h2 class = "wrong">Verification failed.</h2></center>`
    }
}


