export function renderHeaderNav() {
    document.querySelector('.headernav-container').innerHTML +=
        `<header>
            <div class="fakelogo">LOGO</div>
            <div class="login-box">
                <form action="/login" method="post">
                    <div class="inputbox">
                        <input class="input username-input" required="required" type="text" id="username" name="username" required>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputbox">
                        <input class="input password-input" type="password"  id="password" name="password" required>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <button class="button login-button"><span><a href="">Sign in</a></span></button>
                    <button class="button create-account-button"><span><a href="/register.html">Create an account</a></span></button>
                </form>
            </div>
            <div class="subscribe-box">
                <button class="subscribe-button button"><a href="/subscribe.html"><span>S'abonner</span></a></button>
            </div>
        </header>
        <nav>
            <div class="menu">
                <div class="menu-item"><a href="/cfat.html">Accueil</a></div>
                <div class="menu-item"><a href="#about">À propos</a></div>
                <div class="menu-item dropdown">
                    <a href="/games/getgud/getgud.html" class="dropbtn">Games</a>
                    <div class="dropdown-content">
                        <a class="dropdown-content-games" href="/games/getgud/getgud.html">Get Gud</a>
                        <a class="dropdown-content-games" href="/games/quizz.html">Quizz</a>
                        <a class="dropdown-content-games" href="/games/rpg/rpg.html">RPG</a>
                    </div>
                </div>
                <div class="menu-item"><a href="#contact">Contact</a></div>
                <div class="menu-item"><a href="/subscribe.html">Subscribe</a></div>
            </div>
        </nav>`;
}