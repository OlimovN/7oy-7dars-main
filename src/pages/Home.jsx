import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="home">
      <header className="hero">
        <h1>Bizning Maktabga Xush Kelibsiz</h1>
        <p>Yuqori darajadagi ta'lim uchun sayohatingizni shu yerda boshlang.</p>
      </header>
      <section className="highlights">
        <h2>Asosiy Yutuqlarimiz</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Zamonaviy Infratuzilma</h3>
            <p>
              Maktabimiz eng yaxshi o'quv muhitini ta'minlash uchun zamonaviy
              infratuzilma bilan jihozlangan.
            </p>
          </div>
          <div className="card">
            <h3>Malakali O'qituvchilar</h3>
            <p>
              Bizning tajribali va malakali o'qituvchilar ta'limning yuqori
              sifatini ta'minlaydi.
            </p>
          </div>
          <div className="card">
            <h3>Qo'shimcha Faoliyatlar</h3>
            <p>
              Biz turli qo'shimcha faoliyatlarni taklif etamiz, bu esa
              o'quvchilarning ko'nikmalarini va qiziqishlarini oshiradi.
            </p>
          </div>
        </div>
      </section>
      <section className="news">
        <h2>So'nggi Yangiliklar</h2>
        <ul>
          <li>
            <h3>Maktabning Yillik Tadbiri</h3>
            <p>
              Har yili o'tkaziladigan tadbirda chiqishlar va mukofotlar bilan
              ishtirok eting.
            </p>
          </li>
          <li>
            <h3>Yangi Kutubxona Ochilishi</h3>
            <p>
              Kelasi oy yangi kutubxonamiz ochiladi, unda keng ko'lamli kitoblar
              va resurslar mavjud bo'ladi.
            </p>
          </li>
        </ul>
      </section>
      <section className="contact-info">
        <h2>Biz Bilan Bog'lanish</h2>
        <p>Har qanday savollar uchun biz bilan bog'laning:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@maktab.uz">info@maktab.uz</a>
        </p>
        <p>
          <strong>Telefon:</strong> +123-456-7890
        </p>
      </section>
      <section className="wikipedia-link">
        <h2>Qo'shimcha Ma'lumot</h2>
        <a
          href="https://uz.wikipedia.org/wiki/Yozyovon_tumani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yozyovon tumani haqida qo'shimcha ma'lumot uchun bu yerga bosing.
        </a>
      </section>
    </main>
  );
};

export default Home;
