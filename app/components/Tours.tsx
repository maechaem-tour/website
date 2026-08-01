import TourCard from "./TourCard";

export default function Tours() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#f5f7fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "60px",
        }}
      >
        Popular Tours
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        <TourCard
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          title="Doi Inthanon"
          description="Thailand's highest mountain with waterfalls and nature."
        />

        <TourCard
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          title="Koh Samui"
          description="Luxury island tours and crystal-clear beaches."
        />

        <TourCard
          image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
          title="Bangkok"
          description="Private city tours, temples and floating markets."
        />
      </div>
    </section>
  );
}