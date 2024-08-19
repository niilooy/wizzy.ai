# Wizzy.ai

Wizzy.ai is a powerful SaaS platform that leverages Artificial Intelligence to provide a wide array of content generation templates, boosting productivity for creators and businesses alike.

## ✨ Features

- 🔐 **Secure Authentication**: Robust sign-in process powered by Clerk Authentication.
- 📄 **Diverse Templates**: A plethora of AI-powered templates to supercharge your content creation.
- 📊 **Comprehensive Content History**: Detailed tracking of all generated content for each user.
- 💳 **Flexible Credit System**: Purchase additional credits to expand your content generation capabilities.
- 🛡️ **Secure Payments**: Seamless and safe credit purchases via Stripe Payment Gateway.
- 📱 **Responsive Design**: Optimized user experience across all devices.

## Demo

### Dashboard
https://github.com/user-attachments/assets/3370d44f-b752-41b7-a40f-f151be00208d

### Content Generation and History
https://github.com/user-attachments/assets/8a12c80f-27ca-4474-a0c8-2e1b58b6cb2d

### Purchasing Credits
https://github.com/user-attachments/assets/64c88d24-5b27-4a2b-967b-945b420215c9

### Mobile Responsive UI
https://github.com/user-attachments/assets/5ad11491-281d-4713-abf6-7d7d73539c82



## 🌍 Environment Variables
Create a .env.local in the root directory with the following structure:
```.env.local
# Database
DATABASE_URL="your_database_connection_string"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Feel free to try the app here:

[wizzy.ai](https://wizzy-ai.vercel.app)

