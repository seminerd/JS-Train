
var badwords = ["fuck", "shit", "damn", "pussy", "dick", "asshole", "dumbass", "bastard", "slut", "poop", "fucking", "motherfucker", "bitch", "nigga", "nigger", "mohamed"];

var alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// var special = "~",!@#$%^&*()_+{}:<>?|+-,./;'[]."
function makeid()
{
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));

    return id;
}
function create()
{

    class register
    {
        constructor(name, birth, job, number, org, email, password)
        {

            this.fname = name;
            this.birth = birth;
            this.job = job;
            this.number = number;
            this.org = org;
            this.email = email;
            this.password = password;

        }
        check()
        {
            var alertn = "";
            var t = 0;
            var success = 1;
            var numbalert = "";
            var mailalert = "";
            var passalert = "";
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (this.fname == "")
            {
                alertn += "\nEmpty name ";
                // alert(alertn);
                success = 0;

            }

            if (this.fname.length > 30)
            {
                alertn += "\nName too long";
                // alert(alertn);
                success = 0;
            }
            var bad = badwords.length;
            // var spe = special.length;

            for (var i = 0; i < bad; i++)
            {
                if ((this.fname.toLowerCase().includes(badwords[i])) == true)
                {
                    alertn += "\n Don't use bad word ";
                    t = 1;
                }

            }
            if (this.fname.replace(/[^a-zA-Z ]/g, "") != this.fname)
            {
                alertn += "\n Don't use special characters ";
                success = 0;
            }
            // for (var i = 0; i < spe; i++)
            // {
            //     if ((this.fname.toLowerCase().includes(spe[i])) == true)
            //     {
            //         alertn += "\n Don't use special characters ";
            //         t = 1;
            //     }

            // }
            if (t == 1)
            {
                // alert(alertn);
                success = 0;
            }

            if (!(alphabet.includes(this.fname.charAt(0))))
            {
                alertn += " \n Your name should start with a letter ";
                // alert(alertn);
                success = 0;
            }

            if (this.number.toString() != "")
            {
                if (!(this.number.length <= 30 && 8 <= this.number.length))
                {
                    numbalert += " \n Phonenumber must have 8 to 30 digits ";
                    // alert(numbalert);
                    success = 0;
                }
            }
            // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(this.email) == false)
            {
                mailalert += " \n Invalid email";
                // alert(mailalert);
                success = 0;
            }
            if (this.password == this.password.toLowerCase() || this.password == this.password.toUpperCase())
            {
                passalert += " \nPassword must contain  uppercase and lower case";
                // alert(passalert);
                success = 0;

            }
            if (document.getElementById("confirmpass").value != this.password)
            {
                passalert += " \nInvalid password confirmation";
                // alert(passalert);
                success = 0;
            }
            if (success == 1)

            {
                alert("Information valid");
            }
            else
            {
                alert(alertn + numbalert + mailalert + passalert)
            }

        }
    }
    var n = document.getElementById("name").value;
    var b = document.getElementById("birth").value;
    var j = document.getElementById("job").value;
    var nu = document.getElementById("number").value;
    var o = document.getElementById("org").value;
    var e = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var newperson = new register(n, b, j, nu, o, e, pass);
    newperson.check();
    alert("ID : " + makeid());

    // alert(newperson.number);
    // alert(newperson.fname);

    // }
    // if (typeof(number) == "number" && number.toString().length >= 8 && number.toString().length <= 30)
    // {
    //     this.number = number;
    // }

}
