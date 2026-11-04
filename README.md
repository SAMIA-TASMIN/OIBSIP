# Oasis Infobyte Web Development & Designing — Level 1
# LUMORA — Luxury Furniture Landing Page

A modern, responsive landing page for LUMORA, a fictional luxury furniture brand. Built with HTML5 and CSS3 to showcase elegant furniture and refined interior design.

## Live Demo

- **Live Website:** [https://oibsip-webdev-l1-landingpage.vercel.app/]
- **GitHub Repository:** [OIBSIP](https://github.com/SAMIA-TASMIN/OIBSIP)

## Project Overview

LUMORA presents a premium furniture brand through an elegant, responsive website. The design combines high-quality furniture imagery, warm colors, and clean typography to create a refined browsing experience.

Developed for the Oasis Infobyte Web Development and Designing Internship — Level 1, Task 1.

## Features

- Sticky navigation with section links
- Hero section with headline, description, and CTA buttons
- Featured furniture collection
- Product cards with descriptions
- Brand story section
- Contact and social links
- Responsive desktop, tablet, and mobile layouts
- CSS Grid and Flexbox
- Smooth scrolling and hover effects
- Consistent color palette and typography
- Local image assets

## Technologies Used

- HTML5
- CSS3
- CSS Flexbox
- CSS Grid
- Responsive Media Queries

No JavaScript or backend is required.

## Project Structure

```text
WebDev-L1-LandingPage/
├── index.html
├── style.css
├── README.md
└── assets/
    ├── haven-chair.webp
    ├── forma-dining-table.png
    ├── solace-sofa.jpeg
    └── lumora-showcase.jpeg
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SAMIA-TASMIN/OIBSIP.git
   ```

2. Navigate to the project:

   ```bash
   cd OIBSIP/WebDev-L1-LandingPage
   ```

3. Open `index.html` in your browser.

You can also use the Live Server extension in Visual Studio Code.

## Deployment

This static website can be deployed using Netlify or Vercel.

### Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Upload the project folder using [Netlify Drop](https://app.netlify.com/drop).
3. Copy the generated live URL.

### Vercel
1. Import the GitHub repository into [Vercel](https://vercel.com/).
2. Set the root directory to `WebDev-L1-LandingPage`.
3. Choose **Other** as the framework preset.
4. Leave the build command empty and deploy.

## Internship Details

- **Organization:** Oasis Infobyte
- **Track:** Web Development and Designing
- **Level:** Level 1
- **Task:** Task 1 — Landing Page

## Author

**Samia Tasmin Nova**

- [GitHub](https://github.com/SAMIA-TASMIN)
- [LinkedIn](https://www.linkedin.com/in/samia-tasmin-nova)

# Samia Tasmin Nova — Personal Portfolio

A responsive personal portfolio website showcasing my background, technical skills, projects, and contact information.

## Live Demo

- **Live Website:** https://webdev-l1-personalportfolio-tau.vercel.app/
- **GitHub Repository:** [OIBSIP](https://github.com/SAMIA-TASMIN/OIBSIP)

## Project Overview

This portfolio serves as my personal digital résumé and project showcase. It introduces my background as a Computer Science and Engineering student and highlights my skills, projects, and professional links.

Developed for the Oasis Infobyte Web Development and Designing Internship — Level 1, Task 2.

## Features

- Personal hero section with name and role
- Professional profile image
- About Me section
- Technical skills showcase
- Project cards with descriptions and links
- Contact information
- GitHub and LinkedIn links
- Responsive design for desktop and mobile
- Smooth section navigation
- Consistent visual branding

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML5

## Project Structure

```text
WebDev-L1-PersonalPortfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/SAMIA-TASMIN/OIBSIP.git
   ```

2. Navigate to the project:

   ```bash
   cd OIBSIP/WebDev-L1-PersonalPortfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

## Deployment

The portfolio is deployed on Vercel.

For future updates, push changes to the connected GitHub repository. Vercel can automatically rebuild and deploy the website.

## Internship Details

- **Organization:** Oasis Infobyte
- **Track:** Web Development and Designing
- **Level:** Level 1
- **Task:** Task 2 — Personal Portfolio

## Author

**Samia Tasmin Nova**

- [GitHub](https://github.com/SAMIA-TASMIN)
- [LinkedIn](https://www.linkedin.com/in/samia-tasmin-nova)
- Email: samiatasminnova@gmail.com


# Thermo — Temperature Converter

A responsive temperature conversion website that converts values between Celsius, Fahrenheit, and Kelvin using HTML5, CSS3, and vanilla JavaScript.

## Live Demo

- **Live Website:** [https://oibsip-webdev-l1-temperatureconvert.vercel.app/]
- **GitHub Repository:** [OIBSIP](https://github.com/SAMIA-TASMIN/OIBSIP)

## Project Overview

Thermo is a simple, user-friendly temperature conversion tool. Users enter a temperature, select the input unit, and convert it into the other supported units.

Developed for the Oasis Infobyte Web Development and Designing Internship — Level 1, Task 3.

## Features

- Numeric temperature input
- Celsius, Fahrenheit, and Kelvin unit selection
- Conversion between all three temperature scales
- Convert button to trigger calculations
- Results displayed with unit labels
- Input validation for empty and invalid values
- Absolute-zero validation
- Clear error messages
- Responsive desktop and mobile layout
- Clean, centered user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

No external libraries or backend are required.

## Conversion Formulas

| Conversion | Formula |
|---|---|
| Celsius to Fahrenheit | °F = (°C × 9/5) + 32 |
| Fahrenheit to Celsius | °C = (°F − 32) × 5/9 |
| Celsius to Kelvin | K = °C + 273.15 |
| Kelvin to Celsius | °C = K − 273.15 |
| Fahrenheit to Kelvin | K = (°F − 32) × 5/9 + 273.15 |
| Kelvin to Fahrenheit | °F = (K − 273.15) × 9/5 + 32 |

### Absolute Zero Limits

- Celsius: −273.15 °C
- Fahrenheit: −459.67 °F
- Kelvin: 0 K

Temperatures below absolute zero are rejected with a validation message.

## Project Structure

```text
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SAMIA-TASMIN/OIBSIP.git
   ```

2. Navigate to the project:

   ```bash
   cd OIBSIP/WebDev-L1-TemperatureConverter
   ```

3. Open `index.html` in your browser.

You can also use the Live Server extension in Visual Studio Code.

## Deployment

This static website can be deployed using Netlify or Vercel.

### Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Upload the project folder using [Netlify Drop](https://app.netlify.com/drop).
3. Copy the generated live URL.

### Vercel
1. Import the GitHub repository into [Vercel](https://vercel.com/).
2. Set the root directory to `WebDev-L1-TemperatureConverter`.
3. Choose **Other** as the framework preset.
4. Leave the build command empty and deploy.

## Internship Details

- **Organization:** Oasis Infobyte
- **Track:** Web Development and Designing
- **Level:** Level 1
- **Task:** Task 3 — Temperature Converter Website

## Author

**Samia Tasmin Nova**

- [GitHub](https://github.com/SAMIA-TASMIN)
- [LinkedIn](https://www.linkedin.com/in/samia-tasmin-nova)
