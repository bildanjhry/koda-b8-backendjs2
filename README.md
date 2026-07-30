# Pulse Notes Manager

![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=000000)
![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=646CFF)
![bcrypt](https://img.shields.io/badge/bcryptjs-3.0.3-3382C4?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-9.0.3-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=FFFFFF)
![Swagger](https://img.shields.io/badge/Swagger-5.0.1-85EA2D?style=for-the-badge&logo=swagger&logoColor=85EA2D)
![Redux](https://img.shields.io/badge/Redux-9.3.0-764ABC?style=for-the-badge&logo=redux&logoColor=764ABC)


Program Management notes berbasis web dimana user dapat melihat semua notes, menyimpan, mengedit dan menghapus note

### Features:
- Show all notes
- Add note
- Update note
- Pin note
- Delete note

### API Endpoints:
| Method | Endpoint | 
|--------|----------|
| GET | /users |
| GET | /users/:id |
| POST | /register |
| POST | /login |
| GET | /notes/all |
| GET | /notes/:idUser |
| PATCH | /notes/:idUser/:id |
| POST | /notes/:idUser |
| DELETE | /notes/:idUser/:id |

### Client-side deps:
```json
  "dependencies": {
    "@reduxjs/toolkit": "^2.12.0",
    "@tailwindcss/vite": "^4.3.3",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-icons": "^5.7.0",
    "react-redux": "^9.3.0",
    "react-router": "^8.3.0",
    "redux-persist": "^6.0.0",
    "tailwindcss": "^4.3.3"
  },
```

### Server-side deps:
```json
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.2.0",
    "pg": "^8.22.0",
    "swagger-jsdoc": "^6.3.0",
    "swagger-ui-express": "^5.0.1"
  }
```

### Previews :
![alt text](demo.gif)