import React, { useState, useEffect, useRef } from "react";

function App() {
  const [tab, setTab] = useState("About Me");
  const [width, setWidth] = useState(window.innerWidth);
  const gallery = useRef(null);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const mobile = width < 768;

  const goLeft = () => {
    if (gallery.current) {
      gallery.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const goRight = () => {
    if (gallery.current) {
      gallery.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const pics = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
    "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400"
  ];

  return (
    <div style={{ 
      display: "flex", 
      minHeight: "100vh",
      height: "100vh",
      background: "#1a1a1a", 
      color: "#fff",
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      
      <style>
        {`::-webkit-scrollbar { height: 6px; }
          ::-webkit-scrollbar-thumb { background: #555; border-radius: 4px; }
          ::-webkit-scrollbar-track { background: #1a1a1a; }`}
      </style>

      {!mobile && <div style={{ width: "50vw", minWidth: "50vw" }}></div>}

      <div style={{
        width: mobile ? "100vw" : "50vw",
        minWidth: mobile ? "100vw" : "50vw",
        maxWidth: mobile ? "100vw" : "50vw",
        padding: mobile ? "20px" : "2vw 2vw 2vw 3vw",
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "15px" : "1.2vw",
        boxSizing: "border-box",
        height: "100vh",
        overflow: "hidden"
      }}>
        
        <div style={{
          background: "#2a2a2a",
          borderRadius: mobile ? "15px" : "1.2vw",
          padding: mobile ? "20px" : "1.5vw",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          minHeight: 0
        }}>
          
          <div style={{
            display: "flex",
            background: "#1a1a1a",
            borderRadius: "50px",
            padding: mobile ? "4px" : "0.4vw",
            marginBottom: mobile ? "20px" : "1.5vw"
          }}>
            <button
              onClick={() => setTab("About Me")}
              style={{
                flex: 1,
                padding: mobile ? "10px 15px" : "0.8vw 1.5vw",
                borderRadius: "50px",
                border: "none",
                background: tab === "About Me" ? "#3a3a3a" : "transparent",
                color: tab === "About Me" ? "#fff" : "#888",
                fontSize: mobile ? "13px" : "1vw",
                fontWeight: tab === "About Me" ? 500 : "normal",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              About Me
            </button>
            <button
              onClick={() => setTab("Experiences")}
              style={{
                flex: 1,
                padding: mobile ? "10px 15px" : "0.8vw 1.5vw",
                borderRadius: "50px",
                border: "none",
                background: tab === "Experiences" ? "#3a3a3a" : "transparent",
                color: tab === "Experiences" ? "#fff" : "#888",
                fontSize: mobile ? "13px" : "1vw",
                fontWeight: tab === "Experiences" ? 500 : "normal",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              Experiences
            </button>
            <button
              onClick={() => setTab("Recommended")}
              style={{
                flex: 1,
                padding: mobile ? "10px 12px" : "0.8vw 1.5vw",
                borderRadius: "50px",
                border: "none",
                background: tab === "Recommended" ? "#3a3a3a" : "transparent",
                color: tab === "Recommended" ? "#fff" : "#888",
                fontSize: mobile ? "12px" : "1vw",
                fontWeight: tab === "Recommended" ? 500 : "normal",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              Recommended
            </button>
          </div>

          <div style={{ 
            flex: 1, 
            overflowY: "auto", 
            fontSize: mobile ? "14px" : "1vw",
            lineHeight: 1.8, 
            color: "#aaa" 
          }}>
            <hr style={{ border: "1px solid #444", margin: "0 0 15px 0" }} />
            
            {tab === "About Me" && (
              <p style={{
                background: "#363C43",
                borderRadius: "10px",
                border: "2px solid #4A5055",
                padding: mobile ? "15px" : "1vw",
                margin: 0
              }}>
                Hi! I'm Rehan, a passionate frontend developer currently pursuing my first internship in web development. 
                I love building modern, user-friendly web applications using React, Tailwind CSS, and TypeScript. 
                My core strengths lie in HTML, CSS, and JavaScript, which form the foundation of my frontend skills. 
                During my internship, I've been focusing on creating responsive UI layouts, optimizing performance, and improving user experience. 
                Apart from coding, I enjoy exploring design systems and experimenting with animation libraries like GSAP and Framer Motion.
              </p>
            )}
            
            {tab === "Experiences" && (
              <p style={{
                background: "#363C43",
                borderRadius: "10px",
                border: "2px solid #4A5055",
                padding: mobile ? "15px" : "1vw",
                margin: 0
              }}>
                🚀 Frontend Developer Intern (Current)<br/>
                Currently pursuing my first internship, building responsive web components with React and Tailwind CSS.<br/>
                Applying strong HTML, CSS, JavaScript, and TypeScript skills to real-world projects.<br/><br/>
                💻 Skills: React.js • HTML5 • CSS3 • JavaScript (ES6+) • TypeScript • Tailwind CSS • GSAP • Framer Motion • Git • Vite
              </p>
            )}
            
            {tab === "Recommended" && (
              <p style={{
                background: "#363C43",
                borderRadius: "10px",
                border: "2px solid #4A5055",
                padding: mobile ? "15px" : "1vw",
                margin: 0
              }}>
                ⭐ "Rehan has shown great dedication and enthusiasm during his internship. 
                His strong fundamentals in HTML, CSS, JavaScript. 
                He is eager to learn new technologies and improve his skills every day."<br/><br/>
                🎯 Future Goal: To continue growing as a frontend developer, mastering TypeScript, advanced React patterns, and modern animation libraries like GSAP and Framer Motion.
              </p>
            )}
          </div>
        </div>

        <div style={{ 
          background: "#2a2a2a",
          borderRadius: mobile ? "15px" : "1.2vw",
          padding: mobile ? "20px" : "1.5vw",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          flex: "0 0 auto",
          maxHeight: mobile ? "auto" : "35vh"
        }}>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: mobile ? "20px" : "1.5vw",
            gap: "10px"
          }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: mobile ? "18px" : "1.3vw",
              fontWeight: 600,
              background: "#171717",
              borderRadius: mobile ? "12px" : "1vw",
              padding: mobile ? "12px 24px" : "0.8vw 2vw",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)"
            }}>
              Gallery
            </h3>
            
            <div style={{ display: "flex", gap: mobile ? "8px" : "0.8vw", flexShrink: 0 }}>
              <button style={{ 
                padding: mobile ? "10px 16px" : "0.7vw 1.5vw",
                borderRadius: "50px", 
                border: "none", 
                background: "#3a3a3a", 
                color: "#fff", 
                cursor: "pointer",
                fontSize: mobile ? "12px" : "0.9vw",
                fontWeight: 500,
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap"
              }}>
                + ADD IMAGE
              </button>
              
              <button 
                onClick={goLeft}
                style={{ 
                  width: mobile ? "36px" : "2.5vw",
                  height: mobile ? "36px" : "2.5vw",
                  borderRadius: "50%", 
                  border: "none", 
                  background: "#3a3a3a", 
                  color: "#fff", 
                  cursor: "pointer",
                  fontSize: mobile ? "16px" : "1.2vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  flexShrink: 0
                }}
                onMouseDown={(e) => e.target.style.background = "#4a4a4a"}
                onMouseUp={(e) => e.target.style.background = "#3a3a3a"}
              >
                ←
              </button>
              
              <button
                onClick={goRight}
                style={{
                  width: mobile ? "36px" : "2.5vw",
                  height: mobile ? "36px" : "2.5vw",
                  borderRadius: "50%",
                  border: "none",
                  background: "#3a3a3a",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: mobile ? "16px" : "1.2vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  flexShrink: 0
                }}
                onMouseDown={(e) => e.target.style.background = "#4a4a4a"}
                onMouseUp={(e) => e.target.style.background = "#3a3a3a"}
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            ref={gallery} 
            style={{ 
              display: "flex", 
              gap: mobile ? "12px" : "1vw",
              overflowX: "auto",
              paddingBottom: "10px" 
            }}
          >
            {pics.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Gallery ${i + 1}`} 
                style={{ 
                  width: mobile ? "150px" : "13vw",
                  height: mobile ? "150px" : "13vw",
                  borderRadius: mobile ? "12px" : "1vw",
                  objectFit: "cover", 
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;