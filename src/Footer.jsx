import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
       <div className="section1">
         <img className="logo" src="/Shaurya_Logo.png" alt="Shaurya Logo" />
         <div className="text">
            <p className='para'> <p className="yellow ">Shaurya</p> is not just a sports fest; its a vibrant celebration of athleticism and camaraderie, where the spirit of competition ignites passion and unity among colleges nationwide. Join us to witness the thrill of sports as we elevate the game together!</p>
            <h2><h2 className='yellow'>Explore</h2> On </h2>
            <div className="icons">
                <a href="https://www.facebook.com/shauryaiitkgp?mibextid=qi2Omg%2F&rdid=DFVPp2kU23jOMiQw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FHFLKcLA25psDVxjR%2F%3Fmibextid%3Dqi2Omg%252F#"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA%3D%3D"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com/@shauryaiitkharagpur"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
         </div>
       </div>
       <div className="divider"></div>
       <div className="section2">
         <h2  >Contact Us</h2>
         <div className="images">
            <div className="person1">
                <img className="image" src="/Tuhsin.jpg" alt="Tuhsin" />
                <h3>Tuhsin Suhana </h3>
                <h4>Publicity and Marketing Head</h4>
                <div className="icons">
                 <a href="https://www.facebook.com/people/Tuhsin-Suhana-Rahman/pfbid0CRxfTsnKr87b2dY3C4vxbATT97JS4kxd9wL2x2v7xVLekvDnM8ru6BQZVYG61AtDl/"><i class="fa-brands fa-facebook"></i></a>
                 <a href="https://www.instagram.com/tuhsin13?igsh=MWF0MXptbnBjaXQ2Nw%3D%3D"><i class="fa-brands fa-instagram"></i></a>
                 <a href="mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                 <a href="https://www.linkedin.com/in/tuhsin-suhana-rahman-5573a8251/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <h4>Contact: 6002515029</h4>
            </div>
            <div className="person2">
                <img className="image" src="/Hemant.jpg" alt="Hemant" />
                <h3>Hemant Kamble</h3>
                <h4>Publicity and Marketing Head</h4>
                <div className="icons">
                 <a href="https://www.facebook.com/hemant.kamble.9803150?mibextid=kFxxJD"><i class="fa-brands fa-facebook"></i></a>
                 <a href="https://www.instagram.com/__h_e_m_a_n_t__k__/profilecard/?igsh=cWU4Z3Qzb25oNDZt"><i class="fa-brands fa-instagram"></i></a>
                 <a href="mailto:hemant.kamble@shauryaiitkgp.in"><i class="fa-solid fa-envelope"></i></a>
                 <a href="https://www.linkedin.com/in/hemant-kamble-7b5378229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <h4>Contact: 9372838349</h4>
            </div>
         </div>
       </div>
    </footer>
  )
}