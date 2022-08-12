//We would like to know if what you need in on the menu

const food = "Pie"

switch (food) {
    case "Bean":
        console.log('Not on the menu');
        break;
    case "Egg":
        console.log('Still not on the menu');
        break;
    case "Pie":
        console.log('Now we can dine');
        break;
    default:
        console.log('Input a food type')
        break;
}
