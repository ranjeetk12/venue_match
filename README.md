# VenueMatch India

## How to Publish to GitHub

Since you are seeing "not able to push", follow these steps exactly in your terminal (Command Prompt or Terminal):

### 1. Initialize Git (If you haven't already)
```bash
git init
```

### 2. Add Files
This stages all your files. The `.gitignore` file will ensure `node_modules` are not included.
```bash
git add .
```

### 3. Commit Files
```bash
git commit -m "Initial deployment ready"
```

### 4. Rename Branch
Ensure your main branch is named 'main' (GitHub's default).
```bash
git branch -M main
```

### 5. Connect to GitHub
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual details.
*(Create a new repository on GitHub.com first if you haven't! Do not check "Add README" or "Add .gitignore" during creation)*.
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 6. Push Code
```bash
git push -u origin main
```

---

## Post-Push Steps

1. Go to your GitHub Repository.
2. Click **Settings** > **Secrets and variables** > **Actions**.
3. Add a New Repository Secret:
   - Name: `VITE_API_KEY`
   - Value: *[Paste your Gemini API Key here]*
4. Go to **Settings** > **Pages**.
5. Change Source to **GitHub Actions**.
6. The deployment will start automatically (check the "Actions" tab).
