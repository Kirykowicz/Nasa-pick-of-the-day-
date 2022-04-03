const getImage = async () => {
    console.log("before request");
    
    return await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${secrets.API_KEY}&count=1`
    );
};

(async function () {
    const imageDiv = document.getElementById("imageContainer");

    const result = await getImage();
    console.log("after request", result)
    const data = await result.json();
    console.log("after result.json()", data)
    console.log("result: ", data[0]);

    var imageElem = document.createElement("img");
    imageElem.setAttribute("src", await data[0].url);
    imageElem.setAttribute("height", "auto");
    imageElem.setAttribute("width", "700");
    imageElem.setAttribute("class", "nasaImage");

    var title = document.createElement("h3");
    title.innerHTML = await data[0].title;
    title.setAttribute("class", "nasaTitle");
    var desc = document.createElement("div");
    desc.setAttribute("class", "nasaDescription");
    desc.innerHTML = await data[0].explanation;

    imageDiv.appendChild(title);
    imageDiv.appendChild(imageElem);
    imageDiv.appendChild(desc);
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
