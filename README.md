# Scrape

A lightweight utility function to scrape app data from Google Play or the App
Store.

### Request

```
$ curl -X POST -H "Content-Type: application/json" -d '{ "url": "https://play.google.com/store/apps/details?id=com.vokal.dscout" }' https://950bxr0yk0.execute-api.us-east-1.amazonaws.com/prod/scrape
```

### Response

```json
{
  "app_type": "Android",
  "company": "dscout",
  "name": "dscout",
  "icon": "https://lh3.ggpht.com/JAzNGzx6uMwHj8C4RL7FkjHWXrsRaNhgzUwUeS8Ljs9ASJvBf9VYKLPu86mU33nyll4=w300",
  "price": "0",
  "free": true,
  "rating": "3.8",
  "version": "2.82",
  "description": "Dscout helps you improve the products and services you love — while getting paid to do it. After you've downloaded dscout, check out the 'apply' tab for a list of opportunities to get paid for sharing photos, videos and commentary about your everyday experiences! Questions? Visit [our site] (https://dscout.com/scouts) or [drop us a line] (mailto:help@dscout.com).",
  "thumbnails": [
    "https://lh3.ggpht.com/4E2UShtesPpZ0MeKqahhp-3XgUUuEdJJRUT9bEmyFBpi0DKvVAVsMPrN5SAUVbyxoq0=h310",
    "https://lh3.ggpht.com/TsV-s6xzRIkGDzkinnxhiTWrHMtD_41oo4gYhk1eL7R7oIl8e9VJh4DTgoZPq_iU5oY=h310",
    "https://lh3.ggpht.com/fwhYcRR2yif39lJskiCJJuOZ98vGQMy5sYBZu0mlJw_2dY7xI1pmWyZr5EFChUtvSA=h310",
    "https://lh4.ggpht.com/2vcI9smwmfLw9xhW-hICwTNs6cFWFM7_FZJmBKG3leMqot15hz0GaiUlEOfTXaOu7do=h310",
    "https://lh3.ggpht.com/ZMYknk1UgKtNVvfGa9Ybg3AIRR7c6y69wTEiotcTnrXqaf-6idj7haOAzD0aR43w-A=h310"
  ]
}
```

### Deployment

Create a new .zip archive using the script
```
$ npm run zip
```

Navigate to the [AWS Lambda dashboard](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/scrape)

Click the "Upload" button and select the newly created .zip archive
![Upload](/screenshots/lambda-1.png)

Click the "Test" button to invoke the function, or make a request to the API endpoint
![API](/screenshots/lambda-2.png)
