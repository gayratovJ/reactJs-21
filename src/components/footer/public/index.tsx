const PublicFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "lightblue",
        position: "absolute",
        bottom: "0px",
        border:"1px solid black"
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0px 32px" }}
      ></div>
      <h1 style={{fontSize:"30px",lineHeight:"40px",color:"blue",fontWeight:"700"}}><span style={{
        color:"red",
      }}>E</span>-commerce</h1>
    </footer>
  );
};

export default PublicFooter;
