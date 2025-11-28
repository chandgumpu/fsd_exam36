index.html – Home Page
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MITS | Home</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>Madanapalle Institute of Technology and Science</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="departments.html">Departments</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Welcome to MITS</h2>
      <p>MITS is an autonomous institution and Deemed University located in Madanapalle, Andhra Pradesh, offering a wide range of undergraduate, postgraduate, and doctoral programs in engineering and sciences.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 MITS. All rights reserved.</p>
  </footer>
</body>
</html>

about.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MITS | About Us</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>Madanapalle Institute of Technology and Science</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="departments.html">Departments</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>About Us</h2>
      <p>Established in 1998, MITS is recognized by UGC and AICTE. The institution is known for academic excellence and innovation in research and development. The campus is Wi-Fi enabled and equipped with state-of-the-art facilities.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 MITS. All rights reserved.</p>
  </footer>
</body>
</html>

departments.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MITS | Departments</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>Madanapalle Institute of Technology and Science</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="departments.html">Departments</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Departments</h2>
      <ul>
        <li>Computer Science and Engineering</li>
        <li>Electronics and Communication Engineering</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Civil Engineering</li>
        <li>Artificial Intelligence and Data Science</li>
        <li>Physics, Chemistry, Mathematics & Humanities</li>
      </ul>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 MITS. All rights reserved.</p>
  </footer>
</body>
</html>

contact.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MITS | Contact</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>Madanapalle Institute of Technology and Science</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="departments.html">Departments</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> Angallu, Madanapalle, Andhra Pradesh – 517325</p>
      <p><strong>Email:</strong> info@mits.ac.in</p>
      <p><strong>Phone:</strong> +91-8571-280255</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 MITS. All rights reserved.</p>
  </footer>
</body>
</html>

css/style.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background-color: #004080;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 30px;
  background-color: #ffffff;
  margin: 20px auto;
  max-width: 900px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

section h2 {
  margin-bottom: 15px;
  color: #004080;
}

footer {
  text-align: center;
  background-color: #222;
  color: white;
  padding: 15px;
  position: relative;
  bottom: 0;
  width: 100%;
}

