import './NavBar.css';


function NavBar() {
    return (
        <div className='NavBar'>
            <img className='flipkartIcon' width="85" src="flipkart-plus_8d85f4.png" />
            <input className='searchBar' placeholder='Search for products, brands and more' />
            <img className="searchIcon" height="20" src="searchIcon.png"></img>
            <button className='loginButton navButton blockButton'>Login</button>
            <button className='sellerButton navButton'>Become a Seller</button>
            <button className='moreButton navButton'>More</button>
            <button className='cartButton navButton'>Cart</button>
        </div>
    );
}

export default NavBar;
