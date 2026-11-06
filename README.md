# ConcreteAI Web (5 pages, yellow/black)

client/             index.html, predict.html, app.html, science.html, dam.html, style.css, common.js, predict.js, images/
functions_java/     ConcreteProxy.java + Secrets.java -> Catalyst Advanced I/O Java function named `concrete_proxy`

## Setup
1. Self Client (api-console.zoho.in), scope QuickML.deployment.READ. Generate Code -> exchange it for a refresh token:
   POST https://accounts.zoho.in/oauth/v2/token  grant_type=authorization_code, client_id, client_secret, code
   Copy `refresh_token` into Secrets.java (ZOHO_REFRESH_TOKEN).
2. Create the Java function `concrete_proxy` in your Catalyst project and add both .java files.
3. Copy everything in `client/` into your Catalyst client folder.
4. catalyst deploy, open the client URL, go to Predict.

Test the function alone: open .../server/concrete_proxy/ in a browser. JSON saying "POST only" means it is live.

SECURITY: credentials are only in Secrets.java (server side). They were also pasted in chat, so rotate the client
secret and endpoint key in Zoho/QuickML when the project is submitted.
