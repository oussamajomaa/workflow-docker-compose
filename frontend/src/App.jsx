import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("...");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg("Erreur API"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Frontend</h1>
      <p>Réponse backend: <b>{msg}</b></p>
    </div>
  );
}
