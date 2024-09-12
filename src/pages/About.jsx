import React from "react";
import "../styles/About.css";
// import { Pie } from "react-chartjs-2"; // Pie diagrammasini import qilish

const About = () => {
  // Pie diagrammasi uchun ma'lumotlar
  const pieData = {
    labels: ["Matematika", "Fan", "Adabiyot", "Sport"], // Turli bo'limlar
    datasets: [
      {
        label: "Bo'limlar",
        data: [40, 30, 20, 10], // Bo'limlar bo'yicha foizlar
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <main className="about">
      <h1>Biz Haqimizda</h1>
      <section className="history">
        <h2>Maktab Tarixi</h2>
        <p>
          Bizning maktab 1985-yilda tashkil etilgan bo'lib, mintaqamizdagi
          talabalarga yuqori sifatli ta'lim berish maqsadida ochilgan. Yillar
          davomida biz hamjamiyatimizning o'zgaruvchan ehtiyojlariga mos
          ravishda rivojlandik va o'zgardik.
        </p>
      </section>
      <section className="achievements">
        <h2>Maktab Yutuqlari</h2>
        <ul>
          <li>Milliy Fanlar Yarmarkasi G'olibi (2022)</li>
          <li>Hududiy Sport Musobaqalarida Top 5 (2023)</li>
          <li>Eng Yaxshi Innovatsion Ta'lim Mukofoti (2024)</li>
        </ul>
      </section>
      <section className="teacher-achievements">
        <h2>O'qituvchilar Yutuqlari</h2>
        <ul>
          <li>Yilning O'qituvchisi Mukofoti (2023)</li>
          <li>Eng Yaxshi Matematika O'qituvchisi (2022)</li>
          <li>O'quvchilarni Rivojlantirishdagi Mukammal Hissasi (2024)</li>
        </ul>
      </section>
      <section className="images">
        <h2>Maktab Rasmlari</h2>
        <div className="images-container">
          <img src="https://example.com/old-school.jpg" alt="Eski Maktab" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80_-CG7un9dYQYwOHT46o2lDegtlHlEyhMQ&s"
            alt="Yangi Maktab"
          />
        </div>
      </section>
      <section className="current-status">
        <h2>Hozirgi Holat</h2>
        <p>
          Hozirgi kunda maktabimiz 1500 dan ortiq o'quvchini turli sinflarda
          ta'lim olmoqda. Biz o'quv dasturimiz va infratuzilmamizni doimiy
          ravishda takomillashtirib boramiz, talabalarimiz uchun eng yaxshi
          o'quv muhitini yaratishga intilamiz.
        </p>
      </section>
      <section className="statistics">
        <h2>Bo'limlar Taqsimoti</h2>
        <div className="chart">
          {/* Pie diagrammasini chiqarish */}
          {/* <Pie data={pieData} /> */}
        </div>
        <div className="additional-info">
          <p>
            <strong>O'qituvchilar Son:</strong> 45
          </p>
          <p>
            <strong>O'quvchilar Son:</strong> 1500
          </p>
          <p>
            <strong>Bilim Olish Darajasi:</strong> 85% - O'quvchilarning bilim
            olish darajasi umumiy baholash asosida.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
