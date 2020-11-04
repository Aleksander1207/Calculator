var flag="";
var memFlag;
var result=0.0;
var z=document.getElementById("memory");
var y=document.getElementById("input");
function memoryFunctions(x)
{
    var z=document.getElementById("memory");
    var y=document.getElementById("input");
    memFlag=x;
    switch(memFlag)
    {
        case "M+":
            z.value=parseFloat(y.value)+parseFloat(z.value);
        break;
        case "M-":
            z.value=parseFloat(z.value)+(parseFloat(y.value)*-1);
        break;
        case "MC":
            z.value=0;
        break;
        case "MS":
            z.value=parseFloat(y.value);
        break;
        case "MR":
            y.value=parseFloat(z.value);
        break;
    } 
}
function operation(x)
{
    var z=document.getElementById("memory");
    var y=document.getElementById("input");
    var btnA=document.getElementById("+");
    var btnS=document.getElementById("-");
    var btnM=document.getElementById("*");
    var btnD=document.getElementById("/");
    switch(x)
    {
        case "+":
            if((y.value!=0 && z.value==0) || (y.value==0 && z.value==0) || (y.value!=0 && z.value!=0))
            {
                z.value=y.value;
                y.value="";
                flag=x;
                btnA.style.backgroundColor="wheat";
                btnA.style.color="black";
                btnA.style.border="8px solid black";
            }
            break;
        case "-":
            if(y.value==0 && z.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if((y.value==0 && z.value==0 && y.value.indexOf(".")!=-1) || (y.value!=0 && z.value!=0))
            {
                z.value=parseFloat(y.value);
                y.value="";
                flag=x;
                btnS.style.backgroundColor="wheat";
                btnS.style.color="black";
                btnS.style.border="8px solid black";
            }
            else if(y.value!=0 && z.value==0)
            {
                z.value=y.value;
                y.value="";
                flag=x;
                btnS.style.backgroundColor="wheat";
                btnS.style.color="black";
                btnS.style.border="8px solid black";
            }
            else{}
        break;
        case "*":
            if((y.value!=0 && z.value==0) || (y.value==0 && z.value==0) || (y.value!=0 && z.value!=0))
            {
                z.value=y.value;
                y.value="";
                flag=x;
                btnM.style.backgroundColor="wheat";
                btnM.style.color="black";
                btnM.style.border="8px solid black";
            }
        break;
        case "/":
            if((y.value!=0 && z.value==0) || (y.value==0 && z.value==0) || (y.value!=0 && z.value!=0))
            {
                z.value=y.value;
                y.value="";
                flag=x;
                btnD.style.backgroundColor="wheat";
                btnD.style.color="black";
                btnD.style.border="8px solid black";
            }
        break;
    }
}
function calculate()
{
    
    var label=document.getElementById("label2");
    var z=document.getElementById("memory");
    var y=document.getElementById("input");
    var btnA=document.getElementById("+");
    var btnS=document.getElementById("-");
    var btnM=document.getElementById("*");
    var btnD=document.getElementById("/");
    switch(flag)
    {
        
        case "+":
            result=parseFloat(z.value) + parseFloat(y.value);
            btnA.style.backgroundColor="black";
            btnA.style.color="white";
        break;
        case "-":
            result=parseFloat(z.value) - parseFloat(y.value);
            btnS.style.backgroundColor="black";
            btnS.style.color="white";
        break;
        case "*":
            result=parseFloat(z.value) * parseFloat(y.value);
            btnM.style.backgroundColor="black";
            btnM.style.color="white";
        break;
        case "/":
            result=parseFloat(z.value) / parseFloat(y.value);
            btnD.style.backgroundColor="black";
            btnD.style.color="white";
        break;
    }
    if(result<1 && result>0)
    {
        result=String(result);
        var point=result.indexOf(".");
        for(var i=point+1;i<result.length;i++)
        {
            if(Number(result[i])>0)
            {
              var slicePoint=i;
              break;
            }
        }
        result=result.slice(0,slicePoint+1);
    }
    if(y.value!=0 && z.value==0)
    {
        y.value=y.value;
        z.value=z.value;
    }
    else
    {
        y.value=String(result);
        z.value=0;
        label.style.visibility="visible";
    }
}
function inputValue(x)
{
    var y=document.getElementById("input");
    var z=document.getElementById("memory");
    switch(x)
    {
        
        case "0":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "1":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
        break;
        case "2":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }        break;
        case "3":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "4":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "5":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "6":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "7":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "8":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
        case "9":
            if(y.value==0 && y.value.indexOf(".")==-1)
            {
                y.value=x;
            }
            else if(y.value==0 && y.value.indexOf(".")!=-1)
            {
                y.value+=x;
            }
            else
            {
                y.value+=x;
            }
            break;
    }
}
function decimal(x)
{
    var y=document.getElementById("input");
   if(y.value.indexOf(x)==-1 && y.value==0)
   {
       y.value+=x;
   }
   else if(y.value.indexOf(x)==-1 && y.value!=0)
   {
       y.value+=x;
   }
   else{}
}
function clearInput()
{
    var y=document.getElementById("input");
    y.value=0
    flag="";
}
function clearAll()
{
    var z=document.getElementById("memory");
    var y=document.getElementById("input");
    z.value=0;
    y.value=0;
    flag="";
}
function new_memory()
{
    var x=document.getElementById("input").value;
    document.getElementById("memory").value=x;
}
function deleteInput()
{
    document.getElementById("input").value=0;
    document.getElementById("memory").value=0;
}
function reverse()
{
    var y=document.getElementById("input");
    y.value*=-1;
}
function percentage()
{
    var y=document.getElementById("input");
    y.value/=100;
}
function oldBG(x)
{
    var btn=document.getElementById(x);
    btn.style.backgroundColor="wheat";
    btn.style.color="black";
    btn.style.border="8px solid black";
}
function newBG(x)
{
    var btn=document.getElementById(x);
    btn.style.backgroundColor="black";
    btn.style.color="white";
}
// function newValue(x)
// {
//     switch(x)
//     {
//         case "0":
//             if(y.value==0){
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "1":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "2":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "3":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "4":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "5":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "6":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "7":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "8":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         case "9":
//             if(y.value==0)
//             {
//                 if(z.value==0)
//                 {
//                     if(y.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else
//                     {
//                         y.value+=x;
//                         z.value+=x;
//                     }
//                 }
//                 else
//                 {
//                     if(z.value.indexOf(".")==-1)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         if(y.value.indexOf(".")==-1)
//                         {
//                             y.value=x;
//                             z.value+=x;
//                         }
//                         else
//                         {
//                             y.value+=x;
//                             z.value+=x;
//                         }
//                     }
//                 }
//             }
//             else
//             {
//                y.value+=x;
//                z.value+=x;
//             }
//         break;
//         break;
//         case ".":
//             if(y.value==0 && y.value.indexOf(".")==-1)
//             {
//                 y.value+=x;
//                 z.value+=x;
//             }
//             else
//             {
//                 if(y.value.indexOf(".")==-1)
//                 {
//                     y.value+=x;
//                     z.value+=x;
//                 }
//                 else{}
//             }
//         break;
//         case "+":
//             if(y.value.indexOf("+")==-1)
//             {
//                 if(z.value.indexOf("+")==-1)
//                 {
//                     y.value="";
//                     z.value+=x;
//                 }
//             } 
//         break;
//         case "-":
//             if(y.value.indexOf("-")==-1)
//             {
//                 if(z.value.indexOf("-")==-1)
//                 {
//                     if(y.value==0 && z.value==0)
//                     {
//                         y.value=x;
//                         z.value=x;
//                     }
//                     else if(y.value==0 && z.value!=0)
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }
//                     else
//                     {
//                         y.value=x;
//                         z.value+=x;
//                     }

//                 }
//                 else
//                 {
//                     if(z.value.indexOf("-")==0)
//                     {
//                         z.value+=x;
//                         y.value=x;
//                     }
//                     else{}
//                 }
//             }   
//             else
//             {
//                 if(y.value=="-"){}
//                 else
//                 {
//                     z.value+=x;
//                     y.value=x;
//                 }
//             }       
//         break;
//         case "*":
//             if(y.value.indexOf("*")==-1)
//             {
//                 if(z.value.indexOf("*")==-1)
//                 {
//                     y.value="";
//                     z.value+=x;
//                 }
//             }    
//         break;
//         case "/":
//             if(y.value.indexOf("/")==-1)
//             {
//                 if(z.value.indexOf("/")==-1)
//                 {
//                     y.value="";
//                     z.value+=x;
//                 }
//             }
//         break;
//         case "=":
//         if(y.value==z.value)break;
//         if(z.value=="0/0")
//         {
//             z.value="Infinity";
//             y.value="Infinity";
//             label.style.visibility="visible";
//         }
//         var a="",b;
//         var result=0;
//         if(z.value.indexOf("+")!=-1)
//         {
//             var index=z.value.indexOf("+");
//             for(var i=0;i<z.value.length;i++)
//             {
//                 if(z.value[i]==z.value[index])
//                 {
//                     break;
//                 }
//                 a+=z.value[i];
//             }
//             a=Number(a);
//             b=Number(y.value);
//             result=a+b;
//             if(result<1 && result>0)
//             {
//                 result=String(result);
//                 var point=result.indexOf(".");
//                 for(var i=point+1;i<result.length;i++)
//                 {
//                     if(Number(result[i])>0)
//                     {
//                         var slicePoint=i;
//                         break;
//                     }
//                 }
//                 result=result.slice(0,slicePoint+1);
//             }
//             y.value=String(result);
//             z.value=String(result);
//         }
//         else if(z.value.indexOf("*")!=-1)
//         {
//             var index=z.value.indexOf("*");
//             for(var i=0;i<z.value.length;i++)
//             {
//                 if(z.value[i]==z.value[index])
//                 {
//                     break;
//                 }
//                 a+=z.value[i];
//             }
//             a=Number(a);
//             b=Number(y.value);
//             result=a*b;
//             if(result<1 && result>0)
//             {
//                 result=String(result);
//                 var point=result.indexOf(".");
//                 for(var i=point+1;i<result.length;i++)
//                 {
//                     if(Number(result[i])>0)
//                     {
//                         var slicePoint=i;
//                         break;
//                     }
//                 }
//                 result=result.slice(0,slicePoint+1);
//             }
//             label.style.visibility="visible";
//             y.value=String(result);
//             z.value=String(result);
//         }
//         else if(z.value.indexOf("/")!=-1)
//         {
//             var index=z.value.indexOf("/");
//             for(var i=0;i<z.value.length;i++)
//             {
//                 if(z.value[i]==z.value[index])
//                 {
//                     break;
//                 }
//                 a+=z.value[i];
//             }
//             a=Number(a);
//             b=Number(y.value);
//             result=a/b;
//             if(result<1 && result>0)
//             {
//                 result=String(result);
//                 var point=result.indexOf(".");
//                 for(var i=point+1;i<result.length;i++)
//                 {
//                     if(Number(result[i])>0)
//                     {
//                         var slicePoint=i;
//                         break;
//                     }
//                 }
//                 result=result.slice(0,slicePoint+1);
//             }
//             label.style.visibility="visible";
//             y.value=String(result);
//             z.value=String(result);
//         }
//         else if(z.value.indexOf("-")!=-1)
//         {
//             var index=z.value.indexOf("-");
//             if(index==0)
//             {
//                 a+="-";
//                 index=z.value.lastIndexOf("-");
//                 for(var i=1;i<z.value.length;i++)
//                 {
//                     if(z.value[i]==z.value[index])
//                     {
//                         break;
//                     }
//                     a+=z.value[i];
//                 }
//             }
//             else
//             {
//                 for(var i=0;i<z.value.length;i++)
//                 {
//                     if(z.value[i]==z.value[index])
//                     {
//                         break;
//                     }
//                     a+=z.value[i];
//                 }
//             }
//             a=Number(a);
//             b=Number(y.value);
//             if((a<0 && b<0)||(a>0 && b<0))
//             {
//                 result=a+b;
//             } 
//             else
//             {
//                 result=a-b;
//             }
//             if(result<1 && result>0)
//             {
//                 result=String(result);
//                 var point=result.indexOf(".");
//                 for(var i=point+1;i<result.length;i++)
//                 {
//                     if(Number(result[i])>0)
//                     {
//                         var slicePoint=i;
//                         break;
//                     }
//                 }
//                 result=result.slice(0,slicePoint+1);
//             }
//             label.style.visibility="visible";
//             y.value=String(result);
//             z.value=String(result);
//         }
//         break;
//     }
// 