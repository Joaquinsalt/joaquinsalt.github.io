# Joaquin Barrera | Portfolio

My personal portfolio website. It introduces who I am and documents my UTRGV research, NASA HUNCH work, and personal projects.

## Link to website


## Built with

- [React](https://react.dev): builds the page from reusable components
- [TypeScript](https://www.typescriptlang.org): adds types to catch mistakes early
- [Vite](https://vite.dev): runs the development server and builds the site
- [React Router](https://reactrouter.com): handles navigation between pages

## Project structure

```
src/
├── main.tsx          Starts the app and sets up the router
├── App.tsx           Navbar and the list of page routes
├── components/       Reusable pieces (Navbar, WordCard, WorkChip, StatusPill)
├── data/homeData.ts     All homepage text and content
├── pages/            One file per page
└── styles/index.css  Colors, layout, and phone styles
```

## Editing content

Homepage text lives in `src/data/homeData.ts`, so content can be updated without touching the layout code. Project statuses must be one of: `planned`, `in progress`, `tested`, or `completed`.

Colors are defined as variables at the top of `src/styles/index.css`. The phone layout is in the `@media (max-width: 900px)` section at the bottom.

## Pages

| Page | Status |
|---|---|
| Home | In progress |
| About Me and Goals | Planned |
| Internships and Work Experience | Planned |
| UTRGV Research | Planned |
| NASA HUNCH | Planned |
| Projects and Technical Skills | Planned |
| Resume and Credentials | Planned |
| Activities, Leadership and Service | Planned |
| Contact | Planned |

