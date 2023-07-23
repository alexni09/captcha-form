# Captcha Form

## Using Captcha with Laravel and Vue

![Captcha Form](/gitimages/captchaform01.png)

Usage: http://localhost:8000/captchaform

## Installation

This uses mewebstudio/captcha. So, install it via Composer:

composer require mews/captcha

And update the config/app.php file according to the instructions there.

Publish config:

php artisan vendor:publish

Copy the relevant files:
- /config/captcha.php
- /app/Http/Controllers/CaptchaController.php
- /app/Http/Controllers/Api/CaptchaReloadController.php
- /resources/js/Pages/CaptchaForm.vue

Add these lines to /routes/web.php:

```use App\Http\Controllers\CaptchaController;```
```Route::get('/captchaform', [CaptchaController::class, 'display'])->name('captcha.display');```
```Route::post('/captchaform', [CaptchaController::class, 'verify'])->name('captcha.verify');```


Add these lines to /routes/api.php:

use App\Http\Controllers\Api\CaptchaReloadController;

Route::get('captchareload', [CaptchaReloadController::class, 'show'])->name('captcha.reload');
