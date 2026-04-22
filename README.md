# ⚰️ Eternal Rest Funeral Services

Full-stack funeral management system — Node.js + MySQL, serving **General Santos** and **Bohol** branches.

## 🚀 Local Development

```bash
git clone https://github.com/your-username/eternal-rest.git
cd eternal-rest
cd backend && npm install
cp .env.example .env   # fill in your DB credentials
cd .. && npm start
```

| Page | URL |
|------|-----|
| Public Site | http://localhost:3000 |
| Staff Login | http://localhost:3000/login |
| Admin Panel | http://localhost:3000/admin |
| Super Admin | http://localhost:3000/superadmin |

## 👥 Default Credentials

| Role | Username | Password |
|------|----------|----------|
| Super Admin | `superadmin` | `admin123` |
| Admin (Gensan) | `msantos` | `admin123` |
| Admin (Bohol) | `jreyes` | `admin123` |

## 🌐 Deploy to Railway

1. Push this repo to GitHub
2. [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add **MySQL** plugin
4. Set environment variables in Railway → Variables tab:
   - `NODE_ENV` = `production`
   - `DB_HOST` = `${{MySQL.MYSQL_HOST}}`
   - `DB_PORT` = `${{MySQL.MYSQL_PORT}}`
   - `DB_USER` = `${{MySQL.MYSQL_USER}}`
   - `DB_PASSWORD` = `${{MySQL.MYSQL_PASSWORD}}`
   - `DB_NAME` = `${{MySQL.MYSQL_DATABASE}}`
   - `JWT_SECRET` = *(long random string)*
   - `CORS_ORIGINS` = `https://yourapp.railway.app`
5. Import `database/schema.sql` into Railway MySQL
6. Redeploy ✅

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for Render and VPS options.
