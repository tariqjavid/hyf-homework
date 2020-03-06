
function getFullname(fullname1,fullname2,tr)

{
 
    if(tr==1)
    {
        return fullname1+" "+fullname2 +" "+"lord";
    }
    else
    {
    return fullname1+" "+fullname2;

    }

}
tr=1; //if send here 1, then add Formal fullname otherwise normal
let res=getFullname("tariq","javid" ,tr);
console.log(res);