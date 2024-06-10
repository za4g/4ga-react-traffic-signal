export default function Hero() {
  return (
    <div
      class="p-4 shadow-4 rounded-3"
      style={{
        backgroundColor: "lightgray",
        marginBottom: "30px",
        marginTop: "30px",
      }}
    >
      <p style={{ fontSize: "96px" }}>A Warm Welcome!</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
        asperiores temporibus magnam ipsum illum, doloribus pariatur
        repudiandae. Laborum adipisci alias nobis obcaecati quis. Consequatur
        quibusdam omnis iure sequi modi. Illum?
      </p>

      <button
        type="button"
        data-mdb-button-init
        data-mdb-ripple-init
        class="btn btn-primary btn-lg"
        style={{ marginBottom: "20px" }}
      >
        Call to action!
      </button>
    </div>
  );
}
