
# Dmarg Production Mono Repo

> 🚨 **Important:** This repository is maintained by **Manoj**.  
> ⚠️ **Do not** make any unauthorized code changes or commits. Unauthorized modifications can **break the production environment**.

## 🌐 Live Site

Production is hosted at:  
**[dmarg.skoegle.com](https://dmarg.skoegle.com)**

To verify if the site is live, use the health check endpoint:  
**[dmarg.skoegle.com/ping](https://dmarg.skoegle.com/ping)**

---

## 📦 About

This is a **mono repo** that runs both **React (Frontend)** and **Node.js (Backend)** on a **single port**. The entire application is packaged and deployed as one unified service.

### Structure Overview


---

## ⚙️ Production Rules

- ✅ Only maintainer  is authorized to make code changes.
- 🚫 **Do not** commit, push, or merge code without permission.
- 🛑 Unauthorized code changes can **spoil the production environment**.

---

## 🛠 Deployment Notes

- Single-port deployment using combined React and Node.js build.
- Managed via NGINX and deployed on an Ubuntu EC2 instance.
- Health check endpoint: `/ping`

