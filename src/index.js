  module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 1){
		return false;
	}
 	let arr = str.split('');
 	let arr1 = [];
 	for ( let i = 0; i < arr.length; i++){
 		for ( let j = 0; j < bracketsConfig.length; j++ ){
 			if (arr[i] == bracketsConfig[j][1] && arr1[arr1.length-1] == bracketsConfig[j][0]){
 				arr1.pop();
 			} else if (arr[i] == bracketsConfig[j][0]){
 				arr1.push(arr[i]);
 			}
 		}
 	}

 	if (arr1.length == 0){
 		return true;
 	}
 	return false;
}

  
 check = (str, bracketsConfig) => {
  if (str.length % 2 == 1){
		return false;
	}
 	let arr = str.split('');
 	let arr1 = [];
 	for ( let i = 0; i < arr.length; i++){
 		for ( let j = 0; j < bracketsConfig.length; j++ ){
 			if (arr[i] == bracketsConfig[j][1] && arr1[arr1.length-1] == bracketsConfig[j][0]){
 				arr1.pop();
 			} else if (arr[i] == bracketsConfig[j][0]){
 				arr1.push(arr[i]);
 			}
 		}
 	}

 	if (arr1.length == 0){
 		return true;
 	}
 	return false;
}