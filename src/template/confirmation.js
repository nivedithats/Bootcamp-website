const UserEmail = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .header{
                background-color: blue;
                color: #fff;
                text-align: center;
                padding: 20px;
            }
            .logo{
                width: 200px;
            }
            button{
                border: 0;
                padding: 10px 20px;
                border-radius: 10px;
                font-size:1.2rem;
                background-color: #e4f52d;
            }
            .body{
                padding: 20px;
                margin-bottom: 20px;
            }
            .attenction{
                background-color: #4400e3;
                padding: 20px;
                color: #fff;
                text-align: center;
            }
            ul{
                padding: 20px;
            }
            ul li{
                margin-bottom: 10px;
                font-size: 1.1em;
            }
            ul li::marker{
                content:"✅"
            }
        </style>
    </head>
    <body>
        <div class="header">
            <img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696400519/webinar/wuxjubwtp8csymfqv28t.png" alt="" class="logo">
            <h1>Thanks for Registering Python workshop</h1>
          
            
        </div>
        <div class="body" style="padding: 50px 10px;">
            <h2 style="margin-bottom: 20px;">Here is What you will Learn over 4 Hours</h2>
           <ul>
            <li>Blue print for High-paid Python  Career.</li>
            <li>Live Q&A Session With Experts.</li>
            <li>Get Python  Career Industry Demands.</li>
            <li>Get E-certificate and Study Material.</li>
            </ul>
        </div>
        <div>
            <h3>We Are Excited To See You Live</h3>
    
    
           
            <div style="background-color: #000; padding: 10px;">
               <p style=""> <b>Note: </b> Workshop Link Will be Shared soon...</p>
            </div>
        </div>
    
          
            </div>
         
        </div>
        <footer style="background-color: #0c0110; padding:20px;">
            <div style=" text-align:center">
                <a href="tel:+919242079119" style="text-decoration: none;"><button class="call" style="background-color: #00f857;">Call us for more info</button></a> 
            </div>
        </footer>
    </body>
    </html>
    `;
  };
  
  module.exports = UserEmail;
  