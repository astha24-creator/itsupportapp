import logo from "../assets/images/logo.png";
import main from "../assets/images/main.svg";
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="itsupport" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            IT <span>Supporting</span> app
          </h1>
          <p>
            As we move ever further into the digital age, the business need for
            in-house technical expertise has become universal. No longer is
            information technology the sole responsibility of tech-based
            organizations.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="support" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
