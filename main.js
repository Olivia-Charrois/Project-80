names_of_people_array= [];

var names_of_people = document.getElementById("enter_name");

function submit()
{
    var GuestName = document.getElementById("name 1");
    names_of_people.push(GuestName);
    document.getElementById("names_of_people").innerHTML = names_of_people;

    console.log(names_of_people_array);

    document.getElementById("display_submited").innerHTML = names_of_people_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function show()
{ 
    document.getElementById("names_of_people").innerHTML = display_showed;
}

function sort()
{
    names_of_people.sort();
    document.getElementById("display_sorted").innerHTML = names_of_people;
}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}