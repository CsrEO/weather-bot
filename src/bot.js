import * as Discord from "discord.js";
import { getTemperature } from "./Weather.js";


const token
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});


async function onMessage(message){
    if(message.author.bot ==  false){
        
       
       
        const numbers = message.content.match(/\d+/);
        const zipcode = numbers[0]
        const temp = await getTemperature(zipcode)
        message.reply(`This is the temperature: ${temp}*f`);
        
        console.log(numbers);
    }

}



async function onReady(){
    if(!weather == 64086){
        console.log("the temperature is");
    } else{
        console.log("try again");
    }
}
client.on("onReady", onReady);
client.on("messageCreate", onMessage);
client.login(token);
