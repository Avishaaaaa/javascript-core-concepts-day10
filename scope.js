// Global Scope
let college = "Upes";

function studentInfo() {

    // Function Scope
    let name = "Avisha";

    console.log("Inside Function:");
    console.log(college);
    console.log(name);

    if (true) {

        // Block Scope
        let course = "B.Tech";

        console.log(course);
    }

  
}

studentInfo();

console.log("\nOutside Function:");
console.log(college);

