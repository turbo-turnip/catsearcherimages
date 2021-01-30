const { log, error, info } = console;
const { scrollY, innerHeight } = window;

const slider = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const newCat = document.querySelector(".new-cat");

async function displaySlider()
{
    await fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            slide.innerHTML = `<img src=${data[0].url} alt=Cat Image: ${data[0].id} />`;
        });
}


displaySlider();

newCat.addEventListener("click", () => {
   displaySlider();             
});












const galleryContainer = document.querySelector(".gallery-container");
let imageLoadingIncrementCount = 20;

const loadImages = () => {
    for (let i = 0; i < 20; i++) {
        const fetchImg = async () => {
            await fetch("https://api.thecatapi.com/v1/images/search")
                .then(response => response.json())
                .then(data => {
                    galleryContainer.innerHTML += `
                        <div class="gallery-col">
                            <div class="gallery-image">
                                <img class="gallery-img" src=${data[0].url} />
                            </div>
                        </div>
                    `;
                });
        }

        fetchImg();
        
    }
    
}


loadImages();




document.querySelector(`.load-more-imgs`).addEventListener("click", () => {
    const fetchImgs = async () => {
        for (let i = 0; i < imageLoadingIncrementCount; i++) {
            const fetchImg = async () => {
                await fetch("https://api.thecatapi.com/v1/images/search")
                    .then(response => response.json())
                    .then(data => {
                        galleryContainer.innerHTML += `
                            <div class="gallery-col">
                                <div class="gallery-image">
                                    <img class="gallery-img" src=${data[0].url} />
                                </div>
                            </div>
                        `;
                    });
            }
    
            fetchImg();
        }
    }

    fetchImgs();
    

    imageLoadingIncrementCount += 5;
});









