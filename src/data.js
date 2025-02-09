const apiKey="AIzaSyBEiXzPEd1t5ylXlufzRxKoVmiFjmQiX7c";

const valueConverter=(value)=>{
        if(value>1000000){
            return Math.floor(value/1000000)+"M"
        }else if(value>=1000){
            return Math.floor(value/1000)+"K"
        }else{
            return value
        }
    }

export {apiKey,valueConverter}