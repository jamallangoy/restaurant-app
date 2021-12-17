
import React from "react";
import Image from "next/image"
import contactPic from '/public/images/mypic.png'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const cardStyle = { width: "33rem", margin: '40px auto', padding: "20px", textAlign: "center", border:"2.5px solid black",borderRadius:"18%", backgroundColor: "rgb(65,182,230)", color:"white", fontSize:"1.7rem"};

const pic = <Image src={contactPic}></Image>

export default function Contact() {
  return (
    <>

      <Card style={cardStyle}>
      <h3 style={{padding: "20px"}}>Contact Me...</h3>
      <div style={{borderRadius:"29%", border:'2.5px solid black', backgroundColor:"white"}}>
        <Image
          alt="..."
          src={contactPic}
          width={275}
          height={350}
          top= "true"
        ></Image>
        </div>
        <CardBody>
          <CardTitle>Jamall Angoy</CardTitle>
          <CardTitle>jamallangoy@gmail.com</CardTitle>
          <CardText>
          Inspired by my personal palette!  Fresh selection, Fresh eating!
          </CardText>
          <Button color="light" href="http://www.twitter.com/jamall_angoy" style={{marginRight:'20px'}}>
            Twitter
          </Button>
          <Button color="light" href="http://www.github.com/jamallangoy">
            GitHub
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

// export default function Contact(){
    
//     return(
//         <>
            
//             <div className="card bg-dark" style={{width: "28rem", margin: "20px"}}>
//                 <div className="card-body">
//                     <h5 className="card-title">Developed By:</h5>
//                     <h6 className="card-subtitle mb-2 text-muted">Jamall Angoy</h6>
//                     <h6 className="card-subtitle mb-2 text-muted">jamallangoy@gmail.com</h6>
//                     <p className="card-text">Inspired by my personal palette!  Enjoy our selection!</p>
//                     <a href="http://www.twiiter.com/jamallangoy" className="card-link" style={{marginRight: "20px"}}>Twitter</a>
//                     <a href="http://www.github.com/jamallangoy" className="card-link">GitHub</a>
//                 </div>
//             </div>
                    
                
//         </>
//     )
// }