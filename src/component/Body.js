import React from 'react'

function Body() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide w-75 m-auto" data-bs-ride="carousel">
            <div class="carousel-inner rounded-3">
                <div class="carousel-item active">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/index1-1663167194.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://i.ytimg.com/vi/bSNIHAJLD_w/maxresdefault.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.rappler.com/tachyon/2022/10/Screen-Shot-2022-10-06-at-11.05.20-AM.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Body