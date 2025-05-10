# auth-app

A full-stack authentication and authorization boilerplate using **Node.js**, **Express**, and **Next.js (v12)**. Built with a modular microservice architecture, designed for scalability, rapid development, and modern DevOps workflows using **Docker**, **Kubernetes**, and **MongoDB**.

This app provides a solution for handling user registration, login, and JWT-based authentication across services. It is a starter template for building secure Express.js/Next.js-based application.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Next.js v12** (SSR)
- **MongoDB** (separate pod)
- **Docker** for containerization
- **Kubernetes** for orchestration
- **Skaffold** for development workflow
- **@okorg/auth-utils** – custom authentication middlewares & errors

---

## 📦 Project Structure

This app follows a basic microservices-style layout. Key components include:

- `auth` – handles user authentication logic (Express + MongoDB)
- `client` – SSR React app built with Next.js 12
- `infra` – Kubernetes manifests and Skaffold configuration
- Shared JWT handling and middleware via `@okorg/auth-utils`

---

## 🔐 Features

- JWT-based authentication across services
- Secure route protection middleware
- Reusable custom error handling
- Cookie-based session management
- Fully dockerized, ready to run in Kubernetes
- MongoDB-backed user storage

---

## 🚀 Getting Started (Locally with Kubernetes)

Before you begin, ensure you have the following tools installed:

- [Docker](https://www.docker.com/)
- [Kubernetes (e.g., via Docker Desktop)](https://kubernetes.io/docs/tasks/tools/)
- [Skaffold](https://skaffold.dev/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/)

### Start Project

1. **Create JWT Secret**

   ```bash
   kubectl create secret generic jwt-secret --from-literal=JWT_KEY=yoursecret

   ```

2. **(Optional) Configure `/etc/hosts` for Local Domain Access**

To access the app locally via `https://okorg-auth.com`, map the domain to your Kubernetes ingress IP:

2.1. Run the following to get your local Kubernetes ingress IP:

```bash
kubectl get ingress
```

2.2. Open your /etc/hosts file and add:

```bash
<INGRESS-IP> okorg-auth.com
```

3. **Start the app**
   Run Skaffold in the folder containing your skaffold.yaml:

```bash
skaffold dev
```

4. **You can now access the app at https://okorg-auth.com**
