export default function BookingForm() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#111",
        color: "white"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "15px"
        }}
      >
        Book Your Tour
      </h2>

      <p
        style={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "50px"
        }}
      >
        Tell us your travel plan and we'll contact you shortly.
      </p>

      <form
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gap: "20px"
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="WhatsApp Number"
          style={inputStyle}
        />

        <input
          type="date"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>Choose Destination</option>
          <option>Chiang Mai</option>
          <option>Bangkok</option>
          <option>Pattaya</option>
          <option>Krabi</option>
          <option>Koh Samui</option>
        </select>

        <textarea
          rows={5}
          placeholder="Tell us about your trip..."
          style={inputStyle}
        />

        <button
          style={{
            padding: "18px",
            background: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Book Now
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "none",
  width: "100%",
  boxSizing: "border-box" as const
};