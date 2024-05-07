python -m venv .venv
source  .venv/bin/activate
pip3 install --upgrade pip
pip3 install -r requirements.txt
rm -rf public
reflex init
API_URL=https://python-web-4a2y.onrender.com reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
deactivate
