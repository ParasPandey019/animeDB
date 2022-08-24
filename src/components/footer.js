import React from 'react'
import './stylesheets/footer.css'

function Footer() {
  return (
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><span >Web design</span></li>
                            <li><span >Development</span></li>
                            <li><span >Hosting</span></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><span >Company</span></li>
                            <li><span >Team</span></li>
                            <li><span >Careers</span></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Anime DB</h3>
                        <p>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
                    </div>
                    <div className="col item social"><span ><i className="fa-brands fa-facebook-f"></i></span><span ><i className="fa-brands fa-twitter"></i></span><span ><i className="fa-brands fa-snapchat"></i></span><span ><i className="fa-brands fa-instagram"></i></span></div>
                </div>
                <p className="copyright">Anime DB © 2022</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer