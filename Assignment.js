var rindex=null;


function addingrow()
{
    //See Sir Usman Akram Lectures
    //Very helpful for Bindings...
    //Thier channel link:https://www.youtube.com/channel/UC2wF8Lw2OA6CIPcJ5pCOwJg

    var table=document.getElementById("table"),
    newrow=table.insertRow(table.length),
    cell1=newrow.insertCell(0),
    cell2=newrow.insertCell(1),
    cell3=newrow.insertCell(2),
    cell4=newrow.insertCell(3),
    cell5=newrow.insertCell(4),
    
    
    
    name=document.getElementById("name").value,
    gender=document.getElementById("gender").value,
    age=document.getElementById("age").value,
    city=document.getElementById("city").value;
   
    if(name!="" && gender!="" && age!="" && city!=""){

    cell1.innerHTML=name;
    cell2.innerHTML=gender;
    cell3.innerHTML=age;
    cell4.innerHTML=city;
    cell5.innerHTML='<button onclick="selectedrow()")>Edit</button>||<button onclick="deleteRow(this)")>Delete</button>';
    }
    else{
        alert("Oops some field required information!!");
    }
    selectedrow();
   
}

function selectedrow()
{
    //To be honest i take little help from google just to implement last part of this...
    var table=document.getElementById("table"),index;
    for(var i=1;i<table.rows.length;i++)
    {
        table.rows[i].onclick=function()
        {
            
            index=this.rowIndex;
            console.log(index);
            document.getElementById("name").value=this.cells[0].innerHTML;
            document.getElementById("gender").value=this.cells[1].innerHTML;
            document.getElementById("age").value=this.cells[2].innerHTML;
            document.getElementById("city").value=this.cells[3].innerHTML; 
            
           
        };
       
    }
}

//This Function takes too much time
//But good for me as I have learned many things and still learning.....

    selectedrow();
function updating()
{

    var row=document.getElementById("table").getElementsByTagName("tr"),index;
    
   
    for(var i=1;i<row.length;i++)
    {
        index=row[i].rowIndex;
        console.log(":",index)

    
    }
    row.rows[index].cells[0].innerHTML=document.getElementById("name").value;
    row.rows[index].cells[1].innerHTML=document.getElementById("gender").value;
    row.rows[index].cells[2].innerHTML=document.getElementById("age").value;
    row.rows[index].cells[3].innerHTML=document.getElementById("city").value;
    
    

};
  
 //expermenting so i can sort out what is problem with updating()
//     console.log(document.getElementById("name").value);
//     console.log(document.getElementById("gender").value);
//     console.log(document.getElementById("age").value);
//     console.log(document.getElementById("city").value); 


    //Document not load and script load first. 
   

        
    


function ResetForm()
{
    //just to reset form to take new input
    document.getElementById("name").value=""
    document.getElementById("gender").value=""
    document.getElementById("age").value=""
    document.getElementById("city").value=""
}

function deleteRow(r) 
{
    //delete row with button in the row
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }

  
