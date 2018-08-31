<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Code Example</title>
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="container mt-5">
        <h2 style="text-align: center; margin-top:150px;">Code Example</h2>
        <div class="row justify-content-lg-center">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Welcome!
                    </div>
                    <div class="card-body">

                        <a href="{{ route('login') }}" class="btn btn-primary">Login</a>
                        <a href="{{ route('register') }}" class="btn btn-info float-right">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{mix('js/app.js')}}"></script>
</body>
</html>
