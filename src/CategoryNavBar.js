import './CategoryNavBar.css';
import Card from './Card';

function CategoryNavBar() {
    return (
        <div className='categoryNavBar'>

            <Card image="groceryIcon.png" text="Grocery" />
            <Card image="mobileIcon.png" text="Mobile" />
            <Card image="fashionIcon.png" text="Fashion" />
            <Card image="electronicsIcon.png" text="Electronics" />
            <Card image="homeIcon.png" text="Home" />
            <Card image="appliancesIcon.png" text="Appliances" />
            <Card image="travelIcon.png" text="Travel" />
            <Card image="offerIcon.png" text="Offers" />
            <Card image="moreIcon.png" text="Beauty, Toys & More" />
            <Card image="twoWheelerIcon.png" text="Two Wheelers" />

        </div>
    );
}

export default CategoryNavBar;