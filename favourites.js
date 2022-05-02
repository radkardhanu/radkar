// write js code here corresponding to favourites.html
var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

displayData(favouriteArr)

function displayData(Data){
    Data.forEach(function(ele, index){
        
        var row=document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=ele.MatchNum;

        var col2=document.createElement("td");
        col2.innerText=ele.TeamA;

        var col3=document.createElement("td");
        col3.innerText=ele.TeamB;

        var col4=document.createElement("td");
        col4.innerText=ele.Date;

        var col5=document.createElement("td");
        col5.innerText=ele.Venue;

        var col6=document.createElement("td");
        col6.innerText = "Delete";
        col6.style.color="red";
        col6.style.cursor="pointer"
        col6.setAttribute("class","deleteText");
        col6.addEventListener("click", function(){
            deleteItem(ele, index);
        });

        row.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row)
    });
}

function deleteItem(ele, index) {
    favouriteArr.splice(index, 1);
    // favouriteArr.pop(ele,index)
    localStorage.setItem("favourites", JSON.stringify(favouriteArr));
    window.location.reload();
}