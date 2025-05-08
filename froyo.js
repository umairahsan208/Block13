function convertOrderToArray(commaSeparatedFlavors) {
    // Split the string of flavors into an array of strings.
    const strings = commaSeparatedFlavors.split(",");

    const flavors = [];
    for (const s of strings) {
        const flavor = s.trim();
        flavors.push(flavor);
    }
    return flavors;
}
const userInputString = prompt(
    "Please enter the froyo flavors for your order separated by commas. You may repeat a froyo flavor to order it again",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee, pistachio, coffee, vanilla, pistachio"
  );

const orderarray = convertOrderToArray(userInputString);

let countFlavors = {}
for (let i=0; i<orderarray.length; i++){ 
    let key = orderarray[i]
    if (key in countFlavors) {
      countFlavors[key] += 1;
    } else countFlavors[key] = 1;
}
console.log(countFlavors);