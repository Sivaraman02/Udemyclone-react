import '@fortawesome/fontawesome-free/css/all.css';
function Navbar(){
    return(
<div class="navbar">

    <div class="navbar-1">
        <h1 class="navbar-1__title">Udemy</h1>
    </div>
    <div class="navbar-2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="search for anything here Tech,Buisness,Art"></input>
    </div>
    <div class="navbar-3">


        
            <p>courses</p>
            <div class="mylearning">
            <p> My Learning</p>
            <div class="mylearning__popup"><p>you didnot purchase anything yet</p></div></div>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
       
    </div>
    <div class="navbar-4">
        <i class="fa-solid fa-bars"></i>
    </div>
</div>
)
}

export default Navbar