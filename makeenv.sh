echo VITE_GIT_COMMIT_HASH=$(git rev-parse --short HEAD) >> .env
echo VITE_APP_PASSWORD=$(cat .apppassword) >> .env