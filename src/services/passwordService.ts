export default function generatePass(size: number){

    let lowercaseChars: string = 'abcdefghijklmnopqrstuvwxyz'
    let uppercaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numericChars: string = '0123456789'
    let specialChars: string = '!@#$%^&*()_+-='
    let allChars: string = lowercaseChars+uppercaseChars+numericChars+specialChars
    let chosenChars: string = ''

    let password: string = ''
    let passwordLength = size

    console.log("chosenChars: "+chosenChars);

    chosenChars += lowercaseChars.charAt(Math.floor(Math.random()*lowercaseChars.length))
    console.log("chosenChars: "+chosenChars);
    chosenChars += uppercaseChars.charAt(Math.floor(Math.random()*uppercaseChars.length))
    console.log("chosenChars: "+chosenChars);
    chosenChars += numericChars.charAt(Math.floor(Math.random()*numericChars.length))
    console.log("chosenChars: "+chosenChars);
    chosenChars += specialChars.charAt(Math.floor(Math.random()*specialChars.length))
    console.log("chosenChars: "+chosenChars);

    for(let index = 4; index < passwordLength; index++){
        chosenChars += allChars. charAt(
        Math. floor(Math.random() * allChars. length)
        )
    }

    console.log("chosenChars após for: "+chosenChars);
    
    const shuffledChars = shuffleArray(chosenChars.split(''));

    password = shuffledChars.join('');

    console.log("password: "+password);
    console.log("-----------");


return password }

function shuffleArray<T>(array: T[]): T[] {
  const result = array.slice(); // cria uma cópia para não alterar o original
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}