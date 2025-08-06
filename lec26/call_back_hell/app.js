// ---------------------------------CALL BACK HELL-------------------------------------------------------
function step1(fn) {
    console.log("please wait seleting image");
    setTimeout(function () {
        console.log("image selected successfully");
        fn("image selected");
    }, 4000);
}
function step2(image, fn) {
    console.log(`please wait applying filter to ${image}...`);
    setTimeout(function () {
        // return "filtered selected";
        fn("filtered image");

    }, 2000);
}

function step3(filter,fn) {
    console.log(`please wait adding caption of ${filter} image...`);
    setTimeout(function () {
        console.log("image saved successfully");
        fn("caption added");
    }, 5000);
}

function step4(caption) {
    console.log(`please  wait adding caption of ${caption} `);
    setTimeout(function () {
        console.log("image added successfully");
    }, 3000);
};

step1(function (image) {
    step2(image,function (filter) {
        step3(filter,function (caption) {
            step4(caption);
        })
    })

});
