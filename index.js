// switch case

const x = Number(prompt("enter your marks:     "))


switch (true) {
    case x>80:
        console.log("a grade")
        break;
    case x>60:
        console.log("b grade")
        break;
    case x>35:
        console.log("c grade")

    default:
        console.log("fail")
        break;
}