export default function Services() {
  const services = [
    {
      title: "Private Tours",
      icon: "🚐",
      text: "Luxury private tours all over Thailand."
    },
    {
      title: "Airport Transfer",
      icon: "✈️",
      text: "Professional airport pickup and drop off."
    },
    {
      title: "Island Tours",
      icon: "🏝️",
      text: "Koh Samui, Krabi, Phi Phi and more."
    },
    {
      title: "Adventure",
      icon: "⛰️",
      text: "Hiking, waterfalls, elephant sanctuary and zipline."
    },
    {
      title: "VIP Van",
      icon: "🚖",
      text: "Comfortable VIP transportation."
    },
    {
      title: "Custom Trip",
      icon: "⭐",
      text: "Build your own itinerary."
    }
  ];

  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#f8f8f8"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "15px"
        }}
      >
        Our Services
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "60px"
        }}
      >
        Premium travel experiences across Thailand
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px"
        }}
      >
        {services.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              textAlign: "center"
            }}
          >
            <div
              style={{
                fontSize: "55px"
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p style={{ color: "#666" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}