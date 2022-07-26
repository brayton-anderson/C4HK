import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/footer';
import Header from './components/header';
 function C4c() {
    return (
        <>
        <Header/>
   
        {/* <!-- HERO SECTION --> */}
    <div className="campaign">
        <h2>Campaign Mechanics</h2>
        <div className="container">
            <div className="mechanics">
                <p>The CHFAK C4C Campaign will be carried out in four phases over a period of 1 year - from July 2022 to June 2023.
                    <br/>The Campaign targets to raise KES 200 Million in cash and in-kind contributions to cater for food and educational needs of the children under the CHFAK umbrella.
                </p>
                <div className="content">
                    <div className="card">
                        <div className="header">
                            <h4>PHASE 1</h4>
                        </div>
                        <div className="sub-header">
                            <p>Corporates for Children</p>
                            <span>July - Sept</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="disabled">
                            <div className="header">
                                <h4>PHASE 2</h4>
                            </div>
                            <div className="sub-header">
                                <p>Communities for Children</p>
                                <span>Oct - Dec</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="disabled">
                            <div className="header">
                                <h4>PHASE 3</h4>
                            </div>
                            <div className="sub-header">
                                <p>Children for Children</p>
                                <span>Jan - March</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="disabled">
                            <div className="header">
                                <h4>PHASE 4</h4>
                            </div>
                            <div className="sub-header">
                                <p>Citizens for Children</p>
                                <span>April - June</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <!-- HERO SPECIFITIES --> */}
            <div className="need">
                <h2>The Need</h2>
                <div className="container">
                    <div className="left">
                        <h4>FOOD</h4>
                        <p>The annual cost of feeding 5,000 children at an estimated individual cost of KES 250 per day per child is KES 456,250,000.
                            <br/>CHFAK intends to set up a food bank where children homes can access food throughout the year, ensuring no child goes hungry.</p>

                        <a href="">FEED A CHILD</a>
                    </div>
                    <div className="right">
                        <Image layout='fill' src="/assets/cereals.jpg" alt=""/>
                    </div>
                </div>
                {/* <!-- section 2 --> */}
                <div className="container">
                    <div className="left_1">
                    <Image layout='fill' src="/assets/study.jpg" alt=""/>
                    </div>
                    <div className="right_1">
                        <h4>EDUCATION</h4>
                        <p>While tuition fees is currently free in Kenya, it still costs between KES 30,000 and KES 55,000 in school fees to admit students to high school.
                            <br/>In order to ensure and enhance future self-reliance of every child, CHFAK intends to set up an education fund to cater for educational needs of children joining high schools and institutions of higher learning.</p>
                            <Link href="/donations">
                        <a >EDUCATE</a>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="container">
                <h2>TO support</h2>
                <div className="content_info">
                    <div className="left">
                        <div className="info">
                            <h5>01.</h5>
                            <h4>Feed a child a day</h4>

                        </div>
                        <p>Donate cash or actual food items.</p>
                        <div className="info">
                            <h5>02.</h5>
                            <h4>Keep a child in school</h4>

                        </div>
                        <p>Donate cash or directly cater for school items.</p>
                        <div className="info">
                            <h5>03.</h5>
                            <h4>Organize and/or Sponsor a fundraising event</h4>

                        </div>
                        <p>Partner with us during fundraising events and activities.</p>
                        <div className="info">
                            <h5>04.</h5>
                            <h4>Buy our merchandise</h4>

                        </div>
                        <p>Visit our online store to purchase merchandise.</p>
                        <div className="info">
                            <h5>05.</h5>
                            <h4>Be our voice</h4>

                        </div>
                        <p>Spread the word.</p>
                    </div>

                    <div className="right_4">
                    <div className="btn-button">
                    <Link href="/donations">
                        <a>Donate Now</a>
                        </Link>
                    </div>
                        {/* <!-- BANK DETAILS --> */}
                        {/* <h3>Bank Account Details</h3>
                        <div className="info_2">
                            <h4>Bank:</h4>
                            <p className="detail_1">Cooperative Bank of Kenya</p>
                        </div>
                        <div className="info_2">
                            <h4>Name:</h4>
                            <p className="detail_1">Children Homes Founders Association</p>
                        </div>
                        <div className="info_2">
                            <h4>Acc. No:</h4>
                            <p>01134756320201</p>
                        </div> */}
                        {/* <div className="info_2">
                            <h4>Branch:</h4>
                            <p>Ridgeways</p>
                        </div> */}
                        {/* <!-- MPESA DETAILS --> */}
                        <h3 className="paybill">Mpesa</h3>
                        <div className="info_2">
                            <h4>Lipa Na Mpesa</h4>

                        </div>
                        <div className="info_2">
                            <h4>Paybill No:</h4>
                            <p>400200</p>
                        </div>
                        <div className="info_2">
                            <h4>Acc. No:</h4>
                            <p className="detail_2">4003202</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


    <Footer/>
                </>
    );
  }
  
  export default C4c