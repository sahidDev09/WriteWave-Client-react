/* eslint-disable react/no-unescaped-entities */
import "./OurTeam.css";

const OutTeam = () => {
  return (
    <div className="page5">
      <div className="page5LE">
        <div className="meet">
          <h1>Meet</h1>
        </div>
        <div className="ourteam">
          <h1>
            Our <br />
            team
          </h1>
          <p>
            Discover the Team Crafting Your Content! Meet the Faces and Minds
            Fueling Our Platform. From seasoned experts to fresh perspectives,
            each member brings their unique flair to our blogosphere. Get to
            know the individuals driving our passion for creativity and
            knowledge sharing., ...
          </p>
        </div>
      </div>
      <div className="card_container">
        <div
          className="card"
          style={{
            "--image":
              "url('https://i.ibb.co/XWYVMbw/istockphoto-1399565382-612x612.jpg')",
            "--angle": "-5deg",
            "--x": "5%",
            "--y": "15%",
            "--caption": "Navid_Director",
          }}></div>
        <div
          className="card"
          style={{
            "--image": "url('https://i.ibb.co/pKPkfph/professionalgirls.jpg')",
            "--angle": "-1deg",
            "--x": "-10%",
            "--y": "-20%",
            "--caption": "Israt Mona- Designer",
          }}></div>
        <div
          className="card"
          style={{
            "--image":
              "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww')",
            "--angle": "-4deg",
            "--x": "-20%",
            "--y": "5%",
            "--caption": "Sopia _ Product manager",
          }}></div>
        <div
          className="card"
          style={{
            "--image":
              "url('https://i.ibb.co/20zrzQf/416370250-1142030053458343-6255738892083708710-n-2.jpg')",
            "--angle": "-7deg",
            "--x": "10%",
            "--y": "-7%",
            "--caption": "SAHID-Founder",
          }}></div>
      </div>
    </div>
  );
};

export default OutTeam;
