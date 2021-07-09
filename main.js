Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode : "environment"
    }
})

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
    }
}
