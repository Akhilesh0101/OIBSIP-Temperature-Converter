
   function Temp(){

        var val,a,uone,utwo;


        val=parseInt(document.getElementById("input_value").value);
        uone=document.getElementById("input").value;
        utwo=document.getElementById("output").value;


        if(uone=='cel' && utwo=='far'){
            a=((val)*9/5)+32;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone==="cel" && utwo==="kel") {
            a=(val)+273.15;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone=="cel" && utwo=="cel") {
            a=val;
            document.getElementById("r").value=a;
        }
        if (uone=="far" && utwo=="cel") {
            a=((val-32)*5)/9;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone=="far" && utwo=="kel") {
            a=((val-32)*5/9)+273.15;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone=="far" && utwo=="far") {
            a=val;
            document.getElementById('r').value=a.toFixed(3);
        }
        if (uone=="kel" && utwo=="cel") {
            a=val-273.15;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone=="kel" && utwo=="far") {
            a=((val-273.15)*9/5)+32;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if (uone=="kel" && utwo=="kel") {
            a=val;
            document.getElementById('r').value=a.toFixed(3);
        }
        else if(uone=="select" && utwo=="select"){
          toastr.error("error");
        }
    }

