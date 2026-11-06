/**
 * SERVER-SIDE ONLY. This file lives in the Java function, never in the `client` folder,
 * so browsers can never download it. Environment variables with the same names override these values.
 * Do NOT upload this file to GitHub or share it.
 */
public final class Secrets {
    private Secrets() {}
    public static final String QUICKML_URL          = "https://api.catalyst.zoho.in/quickml/v1/project/84405000000016025/endpoints/predict";
    public static final String QUICKML_ENDPOINT_KEY = "2f92c3e2e1e70206dce172a85c581fb59235a307410a5b1a2069a037af4258d479261c767a8e9c78f8052d88e4536a73";
    public static final String CATALYST_ORG         = "60092144905";
    public static final String CATALYST_ENV         = "Development";
    public static final String ZOHO_CLIENT_ID       = "1000.VFQRXSWNG9QJJMDGD29WCIZ0FUEBCR";
    public static final String ZOHO_CLIENT_SECRET   = "8ea583485435d135dafc8c2d145b659a6c2ba1bcec";
    /** Generate once from your Self Client (see README step 2) and paste it here. */
    public static final String ZOHO_REFRESH_TOKEN   = "PASTE_YOUR_REFRESH_TOKEN_HERE";
    public static final String ZOHO_ACCOUNTS_URL    = "https://accounts.zoho.in";
}
