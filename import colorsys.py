<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>3D Animation World</title>

    <!-- CSS CONNECT -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <nav>
            <div class="logo">3D WORLD</div>

            <div class="menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#ai">AI</a>
                <a href="#html">HTML</a>
                <a href="#css">CSS</a>
            </div>
        </nav>
    </header>

    <main id="home">

        <section class="hero">

            <div class="hero-text">
                <p class="small-title">INTERACTIVE 3D EXPERIENCE</p>

                <h1>
                    Welcome to<br>
                    <span>3D World</span>
                </h1>

                <p class="description">
                    Explore an interactive 3D animation website
                    with HTML, CSS, JavaScript and AI.
                </p>

                <div class="buttons">
                    <button id="changeBtn">Change Animation</button>
                    <button id="stopBtn">Stop Animation</button>
                </div>
            </div>

            <!-- 3D OBJECT -->
            <div class="scene">
                <div class="cube" id="cube">

                    <div class="face front">3D</div>
                    <div class="face back">WEB</div>
                    <div class="face right">AI</div>
                    <div class="face left">HTML</div>
                    <div class="face top">CSS</div>
                    <div class="face bottom">JS</div>

                </div>
            </div>

        </section>

    </main>

    <!-- JAVASCRIPT CONNECT -->
    <script src="script.js"></script>

</body>
</html>