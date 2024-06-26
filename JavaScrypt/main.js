let headerContainer= document.querySelector('#header');

function createHeader(){
    let header = `
    <div class="container">
    <div class="header-area d-m-flex justify-content-center align-items-center">
        <div class="header-top d-m-flex justify-content-space-between align-items-center w-100">
            <div class="logo t-c ">
                <a href="home.html">
                    <img src="/Images/logos/logo.png" alt="">
                </a>
                <div class="search-bar t-c">
                    <form action="#" class="p-relative">
                        <input type="text" name="search" placeholder="Search..." class="bg-white c-lightGray ouline-0 b-0 b-rd-3 w-100">
                        <button type="submit" class="bg-gray c-red outline-0 b-0 b-t-r-3 b-b-r-3 pointer p-absolute">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
            <nav id="navbar" class="bg-red p-xl-relative">
                <ul class="d-xl-flex">
                    <li>
                        <a href="home.html" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-home"></i>
                            home
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-building"></i>
                            companies
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-puzzle-piece"></i>
                            projects
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-users"></i>
                            profiles
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-briefcase"></i>
                            jobs
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-envelope"></i>
                            messages
                        </a>
                    </li>
                    <li>
                        <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-center fs-14">
                            <i class="fas fa-bell"></i>
                            notification
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="user-info d-flex align-items-center justify-content-space-between">
                <div class="info d-flex align-items-center">
                    <a href="profile.html" class="info d-flex align-items-center">
                        <img src="/Images/Pimage.png" alt="user" class="b-rd-50">
                        <span class="c-white t-capitalize">Vladyslav</span>
                    </a>
                </div>
                <i class="fas fa-bars c-white pointer d-xl-none"></i>
            </div>
        </div>
    </div>
</div>
    `;
    headerContainer.innerHTML = header;
}

createHeader();

let btnMenu = document.querySelector('.user-info .fa-bars'),
    menu = document.querySelector('#navbar');

btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('active');
})