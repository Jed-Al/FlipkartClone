import './CategoryNavBar.css';

function CategoryNavBar() {
    return (
        <div className='categoryNavBar'>
            <div className="imageButton">
                <img height="80" src="groceryIcon.png"></img>
                <p class="imageName">Grocery</p>
            </div>

            <div className="imageButton">
                <img height="80" src="mobileIcon.png"></img>
                <p class="imageName">Mobiles</p>
            </div>

            <div className="imageButton">
                <img height="80" src="fashionIcon.png"></img>
                <p class="imageName">Fashion</p>
            </div>

            <div className="imageButton">
                <img height="80" src="electronicsIcon.png"></img>
                <p class="imageName">Electronics</p>
            </div>

            <div className="imageButton">
                <img height="80" src="homeIcon.png"></img>
                <p class="imageName">Home</p>
            </div>

            <div className="imageButton">
                <img height="80" src="appliancesIcon.png"></img>
                <p class="imageName">Appliances</p>
            </div>

            <div className="imageButton">
                <img height="80" src="travelIcon.png"></img>
                <p class="imageName">Travel</p>
            </div>

            <div className="imageButton">
                <img height="80" src="offerIcon.png"></img>
                <p class="imageName">Top Offers</p>
            </div>

            <div className="imageButton">
                <img height="80" src="moreIcon.png"></img>
                <p class="imageName">Beauty, Toys & More</p>
            </div>

            <div className="imageButton">
                <img height="80" src="twoWheelerIcon.png"></img>
                <p class="imageName">Two Wheelers</p>
            </div>
            
        </div>
    );
}

export default CategoryNavBar;