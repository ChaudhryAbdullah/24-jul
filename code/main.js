
function getData()
    {
var userName= document.getElementById('username');
document.getElementById('result').innerHTML=userName;
$.ajax({
    url:'',
    success: function(data){
        console.log(data);
    },
    error: function(e){
console.log(e);
    }
})

    }
