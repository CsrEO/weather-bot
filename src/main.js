import { getTemperature } from "./Weather.js";

async function main(){
    const temp = await getTemperature("zipcode");
    
     console.log(temp);
}

main();