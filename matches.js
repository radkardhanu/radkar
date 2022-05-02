// write js code here corresponding to matches.html
var favouriteArr=JSON.parse(localStorage.getItem("schedule")) 
displayData(favouriteArr);

function coverFilter(){
    var selected = document.getElementById("filterVenue").value;
    console.log(selected);
    // console.log("favouriteArr",favouriteArr);
    var filteredList = favouriteArr.filter(function(ele){
       if(ele.Venue===selected){
           console.log("ele",ele)
       }
        return ele.Venue == selected;
    });
    // console.log(filteredList);
    displayData(filteredList);
}

var matchArr =JSON.parse(localStorage.getItem("favourites"))  

function displayData(Data){
    document.querySelector("tbody").innerHTML="";
    Data.forEach(function(ele ,index){
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
        col6.innerText="Add as Favourites";
        col6.style.color="green";
        col6.style.cursor="pointer";
        col6.addEventListener("click", function() {
            favouriteFun(ele)
        })
        row.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row)
        function favouriteFun(ele){
            console.log(matchArr)
            matchArr.push(ele)
            // favouriteArr.push(ele)
           
            localStorage.setItem("favourites",JSON.stringify(matchArr));
            // window.location.href="./favourites.html"
        }

    });
}