
---

# 🚀 Job Hunter Pro

**Job Hunter Pro** is a modern, full-stack job search and management platform designed to connect talented individuals with their dream careers. The application features a clean UI, secure authentication, and a seamless job application workflow.

🔗 **Live Site:** [job-hunter-pro-56d38.web.app](https://job-hunter-pro-56d38.web.app/)

---

## ✨ Features

* **User Authentication:** Secure login and registration powered by **Firebase** (Google Social Login & Email/Password).
* **Job Management:** -   Post new job listings with deadlines and salary ranges.
* Update and delete your own job posts.
* Filter jobs by category (On-site, Remote, Hybrid, Part-time).


* **Application Tracking:** Users can apply for jobs and track their "Applied Jobs" in a dedicated dashboard.
* **Dynamic UX:** -   Interactive date picking via `react-datepicker`.
* Instant feedback using `SweetAlert2` and `React Hot Toast`.
* Responsive design using **Tailwind CSS** and **DaisyUI**.


* **SEO Optimized:** Uses `react-helmet-async` for dynamic page titles and meta-tags.

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (Vite-powered)
* **React Router DOM** (Single Page Application routing)
* **Tailwind CSS** & **DaisyUI** (Styling & Components)
* **Firebase Authentication** (Identity management)

### Utilities

* **Axios:** For API communication.
* **React Icons:** For professional iconography.
* **React Datepicker:** For selecting job application deadlines.
* **SweetAlert2 / React-Toastify:** For beautiful user notifications.

---

## 📦 Installation & Local Setup

Follow these steps to run the project locally:

1. **Clone the Repository:**
```bash
git clone https://github.com/najatul6/job-hunter-pro-client-side.git
cd job-hunter-pro-client

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Environment Variables:**
Create a `.env.local` file in the root and add your Firebase configuration:
```env
VITE_FIREBASE_APIKEY=YOUR_API_KEY
VITE_FIREBASE_AUTHDOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECTID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGEBUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGINGSENDERID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APPID=YOUR_APP_ID

```


4. **Start Development Server:**
```bash
npm run dev

```



---

## 🏗️ Available Scripts

* `npm run dev`: Starts the development server with Vite.
* `npm run build`: Bundles the app for production.
* `npm run lint`: Checks for linting errors using ESLint.
* `npm run preview`: Previews the production build locally.

---

## 📂 Project Structure (Key Areas)

```text
├── src
│   ├── hooks        # Axios instance and API calls
│   ├── components # Reusable UI components (Navbar, Footer, JobCard)
│   ├── layouts    # Main layouts (MainLayout)
│   ├── pages      # Page components (Home, AllJobs, MyJobs, AppliedJobs, Login)
│   ├── providers  # AuthProvider for Firebase context
│   └── routes     # React Router configuration
└── public         # Static assets

```

---

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 👤 Author

**Job Hunter Pro Developer**

* Website: [Job Hunter Pro](https://job-hunter-pro-56d38.web.app/)
* GitHub: [@najatul6](https://github.com/najatul6)

---

*Note: This project was built to provide a smooth recruitment experience for both employers and job seekers.*