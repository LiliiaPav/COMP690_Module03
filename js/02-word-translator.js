/*
The Word Translator

 Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde
*/

const dict = { "es": "Hello World translated in Spanish is: Hola Mundo" , 
                "de" : "Hello World translated in German is: Hallo Welt" , 
                "en" : "Hello World translated in English is: Hello World", 
                "fr": "Hello World translated in French is: Bonjour le monde" };
let userInput = prompt ("Enter a language code: es, de, en, fr ");
userInput=userInput.trim();

 if (userInput in dict){
    console.log(dict[userInput]);
 }
 else {
    console.log(dict["en"]);
 }


/*
let userInput = prompt ("Enter a language code: es, de, en, fr ");
userInput=userInput.trim();

if (userInput === 'es'){
    console.log("Hello World translated in Spanish is: Hola Mundo");
 }
 else if (userInput === 'de'){
    console.log("Hello World translated in German is: Hallo Welt");
 }
 else if (userInput === 'fr'){
    console.log("Hello World translated in French is: Bonjour le monde");
 }
 else {
    console.log("Hello World translated in English is: Hello World");
 }
*/

