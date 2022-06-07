window.onload=function(){
    let inpnum =document.getElementById("inputbar")
    let btnprint=document.getElementById("btn")
    let btnlist = document.getElementById("btnlist")  
    btnprint.onclick = function() {
        let start = Date.now()
        let N = parseInt(inpnum.value)
         for (let i = 1; i<=N; i++) {
            let lis = document.createElement('li')
            let list = ""
             if(i%3==0)list+="Fizz"
             if(i%5==0)list+="Buzz"
             if(list=='')list= i
            lis.textContent=list
            btnlist.appendChild(lis)
        }
        console.log('time taken ',Date.now()-start)
    }
}