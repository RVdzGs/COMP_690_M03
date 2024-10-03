/*
The Word Translator

Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde
*/

const languageCode = prompt('Select from the following language code: \n\n"es", "de", "en", and "fr"\n');

// The conditional "if statement" generates output based on the variable value from the prompt.
if(languageCode === 'es'){
    alert('Hello World translated in Spanish is: Hola mundo.');
} else if (languageCode === 'de'){
    alert('Hello World translated in German is: Hallo welt.');
} else if (languageCode === 'en'){
    alert('Hello World translated in English is: Hello world.');
} else if (languageCode === 'fr'){
    alert('Hello World translated in French is: Bonjour le monde.');
} else {
    alert('Hello World translated in English is: Hello world.');
};

console.log(languageCode);