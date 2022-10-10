import Image from 'next/image'
import Footer from './components/footer';
import Header from './components/header';
const nodemailer = require("nodemailer");
 async function Contacts() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [subjectt, setSubject] = useState('');
    const [message, setMessage] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value);
        console.log(username)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    function onChangeSubject(e) {
        setSubject(e.target.value);
        console.log(e.target.value)
    }
    function onChangeMessage(e) {
        setMessage(e.target.value)
        console.log(location)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('subjectt', subjectt);
        localStorage.setItem('message', message);
    }

    // async..await is not allowed in global scope, must use a wrappe
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: subjectt, // Subject line
        text: message, // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
    
    

    return (
        <>
        <Header/>
        


    {/* <!-- Contacts --> */}
    <section className="about-us">
        {/* <!-- <div class="about">
            <h2>Get To Know Us</h2>
        </div> --> */}
    </section>

    <section className="contacts" id="contacts">
        <div className="contacts-contents ">
            <div className="column-left">
                {/* <!-- <div class="text">Get in Touch</div> --> */}

                <div className="icons">
                    <div className="row">
                        <i className="fas fa-home"></i>
                        <div className="info">
                            <div className="head">Location</div>
                            <div className="sub-title">Mogra Children&rsquo;s Home,</div>
                            <div className="sub-title">Muthaiga North, Off Kiambu Rd,</div>
                            <div className="sub-title">Nairobi, Kenya.</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-phone"></i>
                        <div className="info">
                            <div className="head">Phone No</div>
                            <div className="sub-title">+254 707 431598</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Address</div>
                            <div className="sub-title">P.O BOX 78754 - 00507<br/>Nairobi, Kenya</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email</div>
                            <div className="sub-title">partnership@chfak.or.ke</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="column-right">
                <div className="contactForm">
                    <div className="text">Message us</div>
                    <form action="message.php" method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input 
                                type="text"
                                //name="username"
                                value={username}
                                onChange={onChangeUsername}
                                placeholder="Name" 
                                autoComplete="off" 
                                required
                                />
                                
                            </div>
                            <div className="field email">
                                <input 
                                type="text"
                                //name="username"
                                value={email}
                                onChange={onChangeEmail}
                                placeholder="Email" 
                                autoComplete="off" 
                                required/>
                            </div>

                        </div>
                        <div className="field Project">
                            <input 
                            type="text"
                            //name="username"
                            value={subjectt}
                            onChange={onChangeSubject}
                            placeholder="Subject" 
                            autoComplete="off" 
                            required/>
                        </div>
                        <div className="field textarea">
                            <textarea 
                            cols="30" 
                            rows="10" 
                            value={message}
                            name="message" 
                            type="text"
                            onChange={onChangeMessage}
                            placeholder="user name"
                            required></textarea>
                        </div>
                        <div className="button">
                            <button 
                            type="submit"
                            onClick={() => {
                               info(); /////
                            }}
                            >SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Google map --> */}
    <section className="maps">
        <div className="map-maps">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8907596468007!2d36.84245461427455!3d-1.
                2354940359201732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1641bd1ea751%3A0xb7a2444dc1a1edd6!2s
                Mogra%20Children&#39;s%20Home!5e0!3m2!1sen!2ske!4v1655250879664!5m2!1sen!2ske" style= {{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
    </section>

   
    <Footer/>
                </>
    );
  }
  
  export default Contacts

  Contacts().catch(console.error);