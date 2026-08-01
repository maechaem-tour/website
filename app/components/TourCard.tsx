type Props = {
  image: string;
  title: string;
  description: string;
};

export default function TourCard({
  image,
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: 25 }}>
        <h2>{title}</h2>

        <p
          style={{
            color: "#666",
            marginTop: 10,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>

        <button
          style={{
            marginTop: 20,
            background: "#25D366",
            color: "#fff",
            border: "none",
            padding: "14px 30px",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}