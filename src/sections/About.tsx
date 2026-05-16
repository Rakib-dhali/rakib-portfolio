export default function AboutSection() {
  return (
    <>
      <h2 className="sr-only">
        About me section with animated tech skills network
      </h2>

      <div className="aw">
        <div className="al">
          <div className="badge">About Me</div>

          <h1 className="heading">
            Everything <br /> About Rakib
          </h1>

          <p className="bio">
            Hi, <em>Rakib</em>, a passionate{" "}
            <strong>Full Stack Developer</strong> who loves crafting modern web
            applications that are both beautiful on the surface and powerful
            under the hood.
          </p>

          <p className="bio">
            With expertise in <strong>React, Next.js, Node.js, Express</strong>,
            and <strong>MongoDB</strong>, I bring together intuitive design and
            efficient functionality. My experience with auth systems and cloud
            deployment makes me confident in delivering production-ready
            solutions.
          </p>

          <button className="cta">More About Me</button>
        </div>

        <div style={{ flex: "0 0 auto", width: 380, maxWidth: "100%" }}>
          
        </div>
      </div>
    </>
  );
}