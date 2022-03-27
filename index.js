const getImage = async () => {
    return await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=<api key here>&count=1"
    );
};

(async function () {
    const imageDiv = document.getElementById("imageContainer");
    imageDiv.innerHTML = "hello world";

    const result = await getImage();
    console.log("result: ", result);

    var elem = document.createElement("img");
    elem.setAttribute("src", result.url);
    elem.setAttribute("height", "768");
    elem.setAttribute("width", "1024");
    imageDiv.appendChild(elem);
})()

// [
//     {
//         date: "1996-09-21",
//         explanation:
//             "The Plane of the Ecliptic is illustrated in this Clementine star tracker camera image which reveals (from right to left) the Moon lit by Earthshine, the Sun's corona rising over the Moon's dark limb, and the planets Saturn, Mars, and Mercury. The ecliptic plane is defined as the imaginary plane containing the Earth's orbit around the Sun. In the course of a year, the Sun's apparent path through the sky lies in this plane. The planetary bodies of our solar system all tend to lie near this plane, since they were formed from the Sun's spinning, flattened, proto-planetary disk. The snapshot above nicely captures a momentary line-up looking out along this fundamental plane of our solar system.   Information: Thursday, September 26 - A Total Lunar Eclipse",
//         hdurl: "https://apod.nasa.gov/apod/image/ecliptic_clem_big.gif",
//         media_type: "image",
//         service_version: "v1",
//         title: "The Ecliptic Plane",
//         url: "https://apod.nasa.gov/apod/image/ecliptic_clem.gif",
//     }
// ];
