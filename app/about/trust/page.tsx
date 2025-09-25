import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function OurTrust() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-65"></div>
            

            {/* start: Founder Message Section */}
            <section className="tj-about-section h8-about section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-12">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="sec-heading style-3">
                        <div className="row">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-left">
                              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className="fas fa-heart"></i> From Our Founder
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-content-inner">
                              <h2 className="sec-title title-highlight">
                                Founder's Message - A Vision for Education and Empowerment
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <img src="/assets/images/hero/slider-thumb-1.jpg" alt="Founder" />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-item-wrapper">
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">
                                    In sixties, the female children in Kumarapalayam had to walk 2.5 k.m. for their schooling to the nearby town Bhavani. Some parents hesitated to send, some ceased their children schooling. All resulted them to stay either at homes or to work in handlooms and dyeing industries. Realizing the need of women education, a visionary philanthropist of the zone, Shri.J.K.K.Natarajah, initiated a girls school in the town in 1965, four years before the inception of the trust.
                                  </p>
                                  <p className="desc">
                                    The Trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 with the motif of providing literacy, women empowerment resulting to upgraded socio-economic status of the people. Walking on the footprints of her father, Smt.N.Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders. Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, Nursing, Education, Engineering, Arts and Science colleges and Govt. Aided Girls School, Matriculation schools.
                                  </p>
                                  <p className="desc">
                                    The Trust involves itself in many social service activities inclusive of health oriented services such as free dental camps, free treatments and surgeries, blood donation camps, motivational and entrepreneurship awareness camps. The trust also extends its charitable hands; medical support to the impoverished, helping destitute, natural calamities support, education and scholarship support to poor students and culture support. A pioneering establishment of the zone, since from its inception, its grandeur service to the society not only in terms of educational but also community welfare activities is still immense.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            {/* end: Faq Section */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
