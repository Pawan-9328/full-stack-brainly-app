
export function random(len: number) {
     let options = "qwertyhfgsbhdyuosnnudown112345@#";
     let length = options.length; 

     let ans = "";

     for(let i = 0; i< len; i++){
         ans+=options[Math.floor((Math.random() * length))]; // 0.123 
     }
     return ans; 

}