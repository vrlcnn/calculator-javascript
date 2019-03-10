<!DOCTYPE html>
<html>

    <head>

        <title>Hesap Makinesi - Vural Can ŞİŞMAN</title>

        <script src="js/makina.js" type="text/javascript"></script>

        <style type="text/css">

            .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            }
            .btn-primary {
            color: #fff;
            background-color: #2d2d2d;
            border:none;
            }
            table {
            border-spacing: 0;
            border-collapse: collapse;
            }

        </style>

    </head>
    
    <body>

        <input type="button" class="btn btn-primary" value="Hesap Makinesi" onclick="hesap_makinesi();" name="" style="position: absolute;left:0;bottom:40px;" />
        
        <div id="araclar" style="display: none;" onkeypress='klavye();' style=""></div>
    
    </body>

</html>