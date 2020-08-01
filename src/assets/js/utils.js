export function UrlSearch(){
        let name,value,str=location.href,num=str.indexOf("?");
        str=str.substr(num+1);
        let arr=str.split("&");
        for(let i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
            }
        }
    }