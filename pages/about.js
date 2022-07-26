import Image from 'next/image'
import Footer from './components/footer';
import Header from './components/header';
 function AboutUs() {
    return (
        <>
        <Header/>
    {/* <!-- HERO SECTION --> */}
    <section className="about-us">
        {/* <!-- <div class="about">
            <h2>Get To Know Us</h2>
        </div> --> */}
    </section>








    <div className="history">
        <div className="column left">
            <h2>The Background</h2>
            <p>The organization was founded in November 2018 by a group of children home owners under the dedicated and able leadership of <b>Bishop Hannah Njoroge</b>.

                <p className="p_1"><br />These Children home owners met for several weeks looking and agonizing on the problems that children homes owners go through, day in day out, as they take care of the children.</p>
                <p className="p_2"><br/>They eventually came up with the idea of forming a strong organization as a support group to share their challenges, voice their grievances and to work together for the common goal of the welfare of the children homes founders for
                    the best interest if the children.</p>
                <p><br/>Thus, Children Home Founders Association of Kenya was born and subsequently registered as a society.</p>

            </p>


        </div>
        <div className="column right">
            {/* <!-- <div class="wrapper_3">
                
                <div class="wrappedimage1">
                    <img src="sew.jpg" alt="">
                </div>
                <div class="wrappedimage2">
                    <img src="winnow.jpg" alt="">
                </div>
            </div> --> */}
            <Image  src="/assets/DSC_0308.jpg" layout='fill' alt=""/>
        </div>
        {/* <!-- <div class="wrapper">
            <img src="indoor.jpg" alt="">
            <img src="playing.jpg" alt="">
            <img src="modelling.jpg" alt="">
        </div>
        <div class="column-left1">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consectetur quo quasi temporibus quisquam exercitationem iure ad! Iusto, ut facilis.</p>
        </div>
        <div class="column-right1">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consectetur quo quasi temporibus quisquam exercitationem iure ad! Iusto, ut facilis.</p>
        </div> --> */}
    </div>

    <section className="container-statements ">
        <div className="container-state_content grid">
            <div className="card">
                <h4 className="text">MISSION STATEMENT</h4>
                <p>To unite Charitable Children Institutions (CCI’s) founders to speak in one voice and work in harmony with all stakeholders to promote the welfare of both the children and vulnerable groups.
                </p>
            </div>
            <div className="card">
                <h4 className="text">VISION STATEMENT</h4>
                <p>To speak in one voice for the best interest of the children and vulnerable groups, advocating and lobbying for their rights.
                </p>
            </div>
            <div className="card">
                <h4 className="text">CORE VALUES</h4>
                <div className="listed">
                    <div className="list">
                        <input type="radio13" id="radio13" />
                        <span className="text1">Integrity</span>
                    </div>
                    <div className="list">
                        <input type="radio14" id="radio14" />
                        <span className="text1">Accountability</span>
                    </div>
                    <div className="list">
                        <input type="radio15" id="radio15" />
                        <span className="text1">Diversity & Inclusion </span>
                    </div>
                    <div className="list">
                        <input type="radio16" id="radio16" />
                        <span className="text1">Teamwork</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- BOARD MEMBERS --> */}
    <section className="board-members" id="board-members">
        <div className="title">
            <h2>THE CHFAK LEADERSHIP.</h2>

        </div>
        <div className="board-content">
            <div className="card">
                <div className="box">
                    <div className="imgbox">
                        <Image  src="/assets/leadership/c.jpeg" layout='fill' alt="" />
                    </div>
                    <h3>REV. HANNAH WAIRIMU</h3>
                    <h5>CHAIRPERSON</h5>

                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="imgbox"> 
                        <Image  src="/assets/leadership/vc.jpeg" layout='fill' alt="" />
                    </div>
                    <h3>MR. MARTIN KOIGU</h3>
                    <h5>VICE CHAIRPERSON</h5>

                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="imgbox">
                        <Image  src="/assets/leadership/sec.jpeg" layout='fill' alt="" />
                    </div>
                    <h3>MRS. MARY MUIRURI</h3>
                    <h5>SECRETARY</h5>

                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="imgbox">
                        <Image  src="/assets/leadership/tr.jpeg" layout='fill' alt="" />
                    </div>
                    <h3>MRS. GRACE MBITHI</h3>
                    <h5>TREASURER</h5>

                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="imgbox">
                        <Image  src="/assets/leadership/cor.jpeg" layout='fill' alt="" />
                    </div>
                    <h3>MR. PAUL KARANJA</h3>
                    <h5>CO-ORDINATOR</h5>

                </div>
            </div>

            {/* <!-- <div class="card">
                <div class="box">
                    <div class="imgbox">
                        <img src="smiley.jpg" alt="">
                    </div>
                    <h3>JOHN DOE</h3>
                    <h5>POSITION</h5>

                </div>
            </div> --> */}
        </div>
        {/* <!-- <a href="member-homes.html" class="btn">MEMBER HOMES</a> --> */}

    </section>
    <Footer/>
                </>
    );
  }
  
  export default AboutUs