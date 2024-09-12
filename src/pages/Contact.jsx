import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <h1>Biz bilan Bog'laning</h1>
      <form>
        <label htmlFor="name">Ism:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Xabar:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Yuborish</button>
      </form>
      <div className="director-info">
        <h2>Direktor Aloqa Ma'lumotlari</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:director@example.com">director@example.com</a>
        </p>
        <p>
          <strong>Telefon:</strong> +123-456-7890
        </p>
        <p>
          <strong>Manzil:</strong> 123 Maktab Ko'chasi, Shahar, Mamlakat
        </p>
      </div>
      <div className="hours">
        <h2>Maktab Ish Soatlari</h2>
        <p>
          <strong>Dushanba - Juma:</strong> 8:00 - 16:00
        </p>
        <p>
          <strong>Shanba - Yakshanba:</strong> Dam olish kunlari
        </p>
      </div>
      <div className="social-media">
        <h2>Bizni Ijtimoiy Tarmoqlarda Kuzating</h2>
        <ul>
          <li>
            <a href="https://facebook.com/school" className="link">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/school" className="link">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/school" className="link">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="map">
        <h2>Bizning Joylashuvimiz</h2>
        <iframe
          src="https://www.google.com/maps/place/%D0%AF%D0%B7%D1%8A%D1%8F%D0%B2%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A4%D0%B5%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.6274793,71.2820861,10z/data=!3m1!4b1!4m6!3m5!1s0x38bb6d0270085da7:0x241535a75448d9d4!8m2!3d40.6533908!4d71.6436028!16s%2Fm%2F04f2qpm?hl=ru-RU&entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
        ></iframe>
      </div>
      <div className="wikipedia-link">
        <h2>Yozyovon Tumani Haqida Ko'proq Ma'lumot</h2>
        <a
          href="https://uz.wikipedia.org/wiki/Yozyovon_tumani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yozyovon Tumani Wikipedia’da
        </a>
      </div>
    </main>
  );
};

export default Contact;
