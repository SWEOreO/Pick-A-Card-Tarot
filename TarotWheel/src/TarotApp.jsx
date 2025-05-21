// TarotApp.jsx
import { useState } from "react";

const tarotDeck = [
  {
    name: "The Fool",
    meaning: "New beginnings, optimism, trust in life.",
    image: "/img/thefool.jpg"
  },
  {
    name: "The Magician",
    meaning: "Action, the power to manifest.",
    image: "/img/themagicians.jpg"
  },
  {
    name: "The High Priestess",
    meaning: "Inaction, going within, the subconscious.",
    image: "/img/thehighpriestess.jpg"
  },
  {
    name: "The Empress",
    meaning: "Abundance, nurturing, fertility, life in bloom!",
    image: "/img/theempress.jpg"
  },
  {
    name: "The Emperor",
    meaning: "Structure, stability, rules and power.",
    image: "/img/theemperor.jpg"
  },
  {
    name: "The Hierophant",
    meaning: "Institutions, tradition, society and its rules.",
    image: "/img/thehierophant.jpg"
  },
  {
    name: "The Lovers",
    meaning: "Sexuality, passion, choice, uniting.",
    image: "/img/thelover.png"
  },
  {
    name: "The Chariot",
    meaning: "Movement, progress, integration.",
    image: "/img/thechariot.png"
  },
  {
    name: "Strength",
    meaning: "Courage, subtle power, integration of animal self.",
    image: "/img/thestrength.jpg"
  },
  {
    name: "The Hermit",
    meaning: "Meditation, solitude, consciousness.",
    image: "/img/thehermit.jpg"
  }
];

function getRandomCard() {
  const index = Math.floor(Math.random() * tarotDeck.length);
  return tarotDeck[index];
}

export default function TarotApp() {
  const [card, setCard] = useState(null);
  const [visible, setVisible] = useState(false);

  const drawCard = () => {
    setVisible(false);
    setTimeout(() => {
      setCard(getRandomCard());
      setVisible(true);
    }, 300);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔮 Tarot Card Reader</h1>
      <button
        onClick={drawCard}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Draw a Card
      </button>
      {card && (
        <div
          style={{
            ...styles.cardContainer,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.5s ease-in-out"
          }}
        >
          <img src={card.image} alt={card.name} style={styles.image} />
          <h2>{card.name}</h2>
          <p>{card.meaning}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #4b0082, #8a2be2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem"
  },
  button: {
    backgroundColor: "#ffd700",
    color: "black",
    padding: "15px 30px",
    borderRadius: "25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    border: "none",
    transition: "transform 0.2s"
  },
  cardContainer: {
    backgroundColor: "white",
    color: "black",
    padding: "20px",
    borderRadius: "20px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
  },
  image: {
    width: "100%",
    borderRadius: "15px",
    marginBottom: "15px"
  }
};
