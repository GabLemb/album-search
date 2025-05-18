# Album Search Application

A simple album search application built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## Features

- Search for albums using a query string.
- Add new albums via a dedicated form.
- Responsive UI with Tailwind CSS.
- Routing powered by Vue Router.

## Project Structure

```
album-search/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.vue
    ├── index.css
    ├── main.ts
    ├── vite-env.d.ts
    ├── assets/
    │   └── vue.svg
    ├── components/
    │   ├── Form.vue
    │   └── SearchBar.vue
    ├── router/
    │   └── index.ts
    └── views/
        ├── AddAlbum.vue
        └── SearchAlbum.vue
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (or yarn)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/GabLemb/album-search.git
   cd album-search
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Development Server

Start the development server with:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

### Build

To build the project for production, run:

```sh
npm run build
```

Then preview the production build with:

```sh
npm run preview
```

## API Endpoints

- **GET /api/albums/?title=**: Search for albums by title.
- **POST /api/albums/**: Add a new album.

Make sure your backend API is running at `http://localhost:8000` when testing these features.

## Technologies Used

- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/) ([tailwind.config.js](tailwind.config.js))
- [PrimeIcons](https://primevue.org/icons/)

## License

This project is licensed under the MIT License.
