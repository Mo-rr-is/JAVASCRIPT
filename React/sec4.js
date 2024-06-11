let names = ["Morris", "Stella", "Dennis", "Morris", "Morris"];

// Add a number 1 to each element
names.map((name) => {
    return name + "1";
});

// Remove other Morris element in the array
names.filter((name) => {
    return name !== "Morris"
})