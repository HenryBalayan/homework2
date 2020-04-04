//ex1

/*
function biggerElements(arr,num){
	      let arr1=[]
	for(let i=0;i<arr.length;i++){
	      	if(arr[i]>num){
	         arr1.push(arr[i])
	      	                   }
	                             }
	if(arr1.length==0){
		
		   return  "such number does not exist"
	}
	  return arr1
}
console.log(biggerElements([8,2,15,5,4,],10))

*/

//ex2

/*
function getEvenDigits(num1,num2) {
  var startNumber = num1;
  var endNumber = num2;
  
  if (startNumber > num2) {
    startNumber = num2;
    endNumber =num1;
    
  }
    var newArray = [];
 
  for (var i = startNumber; i<= endNumber; i++) {
   var newI = "" +i;
  
    var pushOrNot = true;
    var currentNumber = i;
    
    for (var j = 0; j < newI.length; j++) {
      var currentDigit = currentNumber%10;
      currentNumber = (currentNumber - currentDigit)/10;
      if (currentDigit%2 !== 0) {
        pushOrNot = false;
        break;
      }
    }
    if (pushOrNot) {
      newArray.push(i);
    }
  }
  
       if (newArray.length === 0) {
         return "not exist"
       }
return newArray;
}
console.log(getEvenDigits(19, 42))
*/

//ex3
/*
function wrongElement(arr){
	      
	      for(let i=0;i<arr.length;i++){
	      	
	      	
	      	     if(arr[i]>arr[i+1]){
	      	     	 return i+1;
	      	     	
	      	     }
	  }    
}
console.log(wrongElement([8,10,14]))
*/

//ex4
/*
function adacentElemsProduct(arr){
	 let result=0
	  for(let i =0;i<arr.length;i++){
	  	
	  	   if(arr[i]*arr[i+1]>result){
	  	   	
	  	   	   result=arr[i]*arr[i+1]
	  	   }
	  	
	  }
	return result
}


console.log(adacentElemsProduct([2,4,8,20,8,9]))
*/

//ex5 optimized version
 /* 
function arrSeq(arr){
	   
return Math.max.apply(null,arr)-Math.min.apply(null,arr)-(arr.length-1)
	  
}

console.log(arrSeq([1,7,9,20]))

*/
//ex5
/*
    function arrMissingSeq(arr){
	     arr.sort(function(a,b){
	  	  return a-b;
	     })
       let result=0;
	    let newarr=[];
	    for(let i=0;i<arr.length;i++){
	  	     if(arr[i]!==arr[i+1]-1){
               if(arr[i+1]-arr[i]==2){
                               
                newarr.push(arr[i+1]-arr[i]-1)
                               }
             else{
               newarr.push(arr[i+1]-arr[i]-1)
             }
	  	     	 
           }
	  }
	    newarr.pop()
      
      for(let j=0;j<newarr.length;j++){
        
          result=result+newarr[j]
      }
    	return result
       }

   console.log(arrMissingSeq([1,3,5,9,11,14]))
*/



//ex6
/*
function myfunc(arr){
        let result=0;
        let newarr=[];
       for(let i=0;i<arr.length;i++){
         
           
             for(let j=0;j<arr[i].length;j++){
               
               result=result+arr[i][j];
                 
             }
           newarr.push(result);
             result=0;
       }
    
   return newarr
}

console.log(myfunc([[1,2,3],[8,14]]))

*/

//ex7
/*
function oddArrNumPlusNewarrLength(arr){
          let newarr=[];
         for(let i=0;i<arr.length;i++){
              if(arr[i]%2!==0){
                
                 newarr.push(arr[i])
              }
            
         }
     for(let j=0;j<newarr.length;j++){
       
           newarr[j]=newarr[j]*newarr.length
     }
  return newarr
}


console.log(oddArrNumPlusNewarrLength([4,8]))

*/









