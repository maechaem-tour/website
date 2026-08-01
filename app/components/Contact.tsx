export default function Contact() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#433838"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "20px"
        }}
      >
        Contact Us
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#ccc444",
          marginBottom: "50px"
        }}
      >
        We'd love to help plan your Thailand adventure.
      </p>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px"
        }}
      >
        <div>
          <h3>MaeChaem Tour & Travel</h3>

          <p>📍 Chiang Mai, Thailand</p>

          <p>📱 +66 95 829 1463</p>

          <p>💬 WhatsApp: +66 95 829 1463</p>

          <p>✉️ mylovevers@gmail.com</p>
        </div>

        <iframe
          src="https://www.google.com/maps?q=Chiang+Mai&output=embed"
          width="100%"
          height="300"
          style={{
            border: 0,
            borderRadius: "20px"
          }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}