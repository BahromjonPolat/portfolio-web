# Portfolio Website - Bakhromjon Polat

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ⚡ Fast and lightweight (no frameworks)
- 🎭 Smooth animations and transitions
- 🌙 Dark theme
- 📋 Sections: Hero, About, Skills, Experience, Education, Projects, Contact

## Technologies Used

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (Poppins, Montserrat)

## Structure

```
portfolio-web/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── data.js         # Data (skills, experience, projects)
│   └── main.js         # Main JavaScript functionality
└── assets/
    └── images/         # Images folder
```

## How to Use

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

## Customization

### Update Personal Information

Edit the following files:

1. **index.html** - Update name, title, social links
2. **js/data.js** - Update skills, experience, education, and projects
3. **css/style.css** - Customize colors in `:root` variables

### Color Scheme

Main colors are defined in CSS variables (`:root`):
```css
--bg-primary: #212428;      /* Background */
--bg-secondary: #22262A;    /* Cards background */
--color-primary: #3053D1;   /* Primary color */
--color-white: #FFFFFF;     /* White */
--color-text: #C4CFDE;      /* Text color */
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- No external libraries or frameworks
- Optimized images (lazy loading)
- Minimal CSS and JS
- Fast load times

## License

MIT License - feel free to use this for your own portfolio!

## Author

**Bakhromjon Polat**
- GitHub: [@BahromjonPolat](https://github.com/BahromjonPolat)
- LinkedIn: [Bakhromjon Polat](https://linkedin.com/in/bahromjon-polat)
- Telegram: [@BahromjonPolat](https://t.me/BahromjonPolat)

---

Made with ❤️ using vanilla HTML, CSS, and JavaScript
