import React from "react";
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            For your everyday tech related queries WE are here for you. Keeping
            up the standards is our motto. It is the obligation to keep the
            general public well aware of all innovations groundbreaking or
            ground smothering we want to take them all to you.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>ABout us</h1>
          <p>
            Jawahar Navodaya Vidyalaya, Kottayam is a fully residential &
            co-educational school administered by Navodaya Vidyalaya Samiti, an
            autonomous organization under the Ministry of Education, Department
            of School Education and Literacy, Government of India. The Vidyalaya
            is affiliated to CBSE, New Delhi and having classes from VI to XII.
            Admission to Jawahar Navodaya Vidyalaya is made to Class VI on the
            basis of a Selection Test, designed and conducted by the CBSE. The
            test is c alled the Jawahar Navodaya Vidyalaya Selection Test
            (JNVST). It is of non-verbal nature, class-neutral and designed so
            as to ensure that talented children from rural areas are able to
            compete without facing any disadvantage.
            <br /> The education in the school is free including boarding &
            lodging, uniforms and textbooks etc. However, a sum of Rs. 600/- per
            month is to be paid only by the students of classes IX to XII
            towards Vidyalaya Vikas Nidhi (VVN). The students belonging to SC/ST
            categories, all Girl students, and the students whose family income
            is below poverty line (BPL) are exempted from paying this VVN. In
            the case of children of Govt. Employees, other than the exempted
            category (Students of classes V to VIII, all SC/ST & Girls students
            and the wards of BPL families), VVN to be paid @ Rs. 1500/- per
            month.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
