import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <section className="hero_sec">
          <div className="hero_text">
            <div>
              <p className="hero_text1">
                Show Them <br /> Don’t Just Tell
              </p>
              <p className="hero_text2">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
            </div>
            <button className="install"> Install HelpMeOut </button>
          </div>
          <div className="hero_image"></div>
        </section>
      </div>
      <div className="container">
        <section className="landing_features">
          <div className="feature_p">
            <p className="p1"> Features </p>
            <p className="p2">Key Highlights Of Our Extension</p>
          </div>

          <div className="feature_info">
            <div className="feature_text">
              <div className="one">
                <img src="" alt="icon" />
                <div>
                  <p className="text1">Simple Screen Recording</p>
                  <p className="text2">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className="two">
                <img src="" alt="icon" />
                <div>
                  <p className="text1">Easy-to-Share URL</p>
                  <p className="text2">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className="three">
                <img src="" alt="icon" />
                <div>
                  <p className="text1">Revisit Recordings</p>
                  <p className="text2">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature_video"></div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="instruction">
          <p className="instruction_p"> How It Works</p>
          <div className="cont">
            <div className="cont_div">
              <div className="up">
                <img src="" alt="icon1" />
                <div>
                  <p className="header_p">Record Screen</p>
                  <p className="lower_p">
                    Click the &quot;Start Recording&quot; button in our
                    extension. choose which part of your screen to capture and
                    who you want to send it to.
                  </p>
                </div>
              </div>
              <div className="down"></div>
            </div>
            <div className="cont_div">
              <div className="up">
                <img src="" alt="icon2" />
                <div>
                  <p className="header_p">Share Your Recording</p>
                  <p className="lower_p">
                    We generate a shareable link for your video. Simply send it
                    to your audience via email or copy the link to send via any
                    platform.{" "}
                  </p>
                </div>
              </div>
              <div className="down"></div>
            </div>
            <div className="cont_div">
              <div className="up">
                <img src="" alt="icon3" />
                <div>
                  <p className="header_p">Learn Effortlessly</p>
                  <p className="lower_p">
                    Recipients can access your video effortlessly through the
                    provided link, with our user-friendly interface suitable for
                    everyone.
                  </p>
                </div>
              </div>
              <div className="down"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
