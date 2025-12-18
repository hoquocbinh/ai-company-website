# Deploying to AWS S3 and CloudFront

This guide explains how to host your React (Vite) application on AWS S3 and serve it via CloudFront for global content delivery and SSL support.

## Prerequisites

1.  **AWS Account**: You need an active AWS account.
2.  **Built Project**: Ensure you have run `npm run build` and have a `dist` folder in your project root.

## Step 1: Create an S3 Bucket

1.  Log in to the **AWS Management Console**.
2.  Navigate to **S3**.
3.  Click **Create bucket**.
4.  **Bucket Name**: Choose a globally unique name (e.g., `my-ai-company-website`).
5.  **Region**: Select a region close to your users (or `us-east-1` if using standard settings).
6.  **Object Ownership**: standard settings (ACLs disabled).
7.  **Block Public Access settings**: 
    *   **Uncheck** "Block all public access".
    *   Check the warning acknowledgment box. (This is required for static website hosting if not using Origin Access Control, though OAC is recommended for CloudFront).
    *   *Note: For better security with CloudFront, you can keep "Block all public access" checked and use Origin Access Control (OAC). However, the simplest setup for beginners often involves public read access initially.*
    *   **Recommendation for CloudFront**: **Keep "Block all public access" CHECKED.** We will use CloudFront OAC to access the bucket securely.
8.  Click **Create bucket**.

## Step 2: Upload Files

1.  Open your newly created bucket.
2.  Click **Upload**.
3.  Drag and drop the **contents** of your `dist` folder (files like `index.html` and the `assets` folder) into the upload area.
4.  Click **Upload**.

## Step 3: Configure CloudFront

1.  Navigate to **CloudFront** in the AWS Console.
2.  Click **Create distribution**.
3.  **Origin Domain**: Select your S3 bucket from the dropdown list.
4.  **Origin Access**:
    *   Select **Origin access control settings (recommended)**.
    *   Click **Create control setting** (keep default name) and click **Create**.
5.  **Viewer Protocol Policy**: Select **Redirect HTTP to HTTPS**.
6.  **Default Root Object**: Enter `index.html`.
7.  **Web Application Firewall (WAF)**: Select "Do not enable security protections" (unless you want to pay extra for WAF).
8.  Click **Create distribution**.

## Step 4: Update S3 Bucket Policy

After creating the distribution, CloudFront will provide a policy to add to your S3 bucket to allow CloudFront to read your files.

1.  In the CloudFront distribution list, you will see a banner or notification about the S3 bucket policy (or copy it from the **Origins** tab > Edit > Copy policy).
2.  Go back to your **S3 Bucket permissions**.
3.  Scroll to **Bucket policy**.
4.  Click **Edit** and paste the policy provided by CloudFront. It looks somewhat like this:
    ```json
    {
        "Version": "2012-10-17",
        "Statement": {
            "Sid": "AllowCloudFrontServicePrincipalReadOnly",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::<YOUR_ACCOUNT_ID>:distribution/<YOUR_DISTRIBUTION_ID>"
                }
            }
        }
    }
    ```
5.  Click **Save changes**.

## Step 5: Handle SPA Routing (Critical)

Since this is a Single Page Application (React), refreshing a page like `/about` will cause a 404/403 error because that file doesn't exist on S3 (only `index.html` exists).

1.  Go to your **CloudFront Distribution** details.
2.  Click on the **Error pages** tab.
3.  Click **Create custom error response**.
4.  **HTTP API Error Code**: Select **403: Forbidden** (S3 returns 403 for missing files when OAC is used).
5.  **Customize Error Response**: Select **Yes**.
6.  **Response Page Path**: Enter `/index.html`.
7.  **HTTP Response Code**: Select **200: OK**.
8.  Click **Create custom error response**.
9.  Repeat the steps for **404: Not Found** (just in case), pointing it to `/index.html` with a 200 OK response.

## Step 6: Verify

1.  Wait for the CloudFront distribution Status to change from **Deploying** to **Enabled**.
2.  Copy the **Distribution Domain Name** (e.g., `d1234.cloudfront.net`).
3.  Paste it into your browser. Your site should load!
