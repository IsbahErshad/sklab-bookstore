import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Carousel, Card, Modal, Row, Col } from 'react-bootstrap';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const books = [
    {
      title: "Macbeth",
      author: "Shakespear",
      price: "$50",
      description: "Macbeth, a tragedy by William Shakespeare, follows the ambitious Scottish general Macbeth. Spurred by a prophecy and his wife, he murders King Duncan to become king. Consumed by guilt and paranoia, Macbeth's tyrannical rule leads to more violence and his eventual downfall. The play delves into themes of ambition, power, and guilt.",
      cover: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKFyowmFxmXkgM8yi9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU1MTk0YTM0ZDc5MWJjYWFkYjc0ZThlMDc5NTIxM2MxBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dmacbethbooks%26ei%3DUTF-8%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D2&w=1633&h=2502&imgurl=d28hgpri8am2if.cloudfront.net%2Fbook_images%2Fcvr9781451694727_9781451694727_hr.jpg&rurl=https%3A%2F%2Fwww.simonandschuster.com%2Fbooks%2FMacbeth%2FWilliam-Shakespeare%2FFolger-Shakespeare-Library%2F9781451694727&size=3144.4KB&p=macbethbooks&oid=55194a34d791bcaadb74e8e0795213c1&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Macbeth+%7C+Book+by+William+Shakespeare%2C+Dr.+Barbara+A.+Mowat%2C+Paul+...&b=0&ni=100&no=2&ts=&tab=organic&sigr=uQl2klaAuXXz&sigb=8uisPvqn6AAB&sigi=0FXNqFeIxLp9&sigt=5kYFpJyeE3p.&.crumb=BgkayneIRjv&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211IN714G0"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah",
      price: "$20",
      description: "Sapiens: A Brief History of Humankind by Yuval Noah Harari traces human history from the emergence of Homo sapiens to the present, examining how cognitive, agricultural, and scientific revolutions shaped societies and cultures. Harari explores the impacts of capitalism, religion, and imperialism, and considers the future of humanity.",
      cover: "https://in.images.search.yahoo.com/images/view;_ylt=Awrx.9cGmVxmQ4YNDc.9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgzZmQzYzMwOWI1YjVjMjEwNDhiYmUxYjg3NjU5ZjMyBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsapiens%2Bbook%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=877&h=1024&imgurl=www.blog.sindibad.tn%2Fwp-content%2Fuploads%2F2021%2F01%2FBook-Sapiens-A-Brief-History-of-Humankind-by-Yuval-Noah-Harari-pdf-877x1024.png&rurl=https%3A%2F%2Fwww.blog.sindibad.tn%2Fbook-sapiens-a-brief-history-of-humankind-by-yuval-noah-harari-pdf%2F&size=443.5KB&p=sapiens+book&oid=83fd3c309b5b5c21048bbe1b87659f32&fr2=piv-web&fr=mcafee&tt=Book+Sapiens%3A+A+Brief+History+of+Humankind+by+Yuval+Noah+Harari+PDF+...&b=0&ni=21&no=2&ts=&tab=organic&sigr=UJhupQwXAQJJ&sigb=qgANYi0bEcZO&sigi=PUerzatHoWXt&sigt=90y5fiwhnX2l&.crumb=BgkayneIRjv&fr=mcafee&fr2=piv-web&type=E211IN714G0"
    },
    {
      title: "The da vinci code ",
      author: "Dan brown",
      price: "$25",
      description: "The Da Vinci Code by Dan Brown follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a murder mystery at the Louvre. Their investigation uncovers secrets about the Holy Grail and a hidden society, challenging established religious beliefs. The novel blends art, history, and religion in a thrilling adventure.",
      cover: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKFypImlxmekAJ7M69HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJjNDE5OGJiY2Q5N2Q3NDRjZTc3MmIyN2IyMzRiODgwBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dda%2Bvinci%2Bcode%2Bbook%26ei%3DUTF-8%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26tab%3Dorganic%26ri%3D1&w=1520&h=2370&imgurl=cdn2.penguin.com.au%2Fcovers%2Foriginal%2F9780552159715.jpg&rurl=https%3A%2F%2Fwww.penguin.com.au%2Fbooks%2Fthe-da-vinci-code-9780552159715&size=1299.0KB&p=da+vinci+code+book&oid=2c4198bbcd97d744ce772b27b234b880&fr2=sa-gp-search&fr=mcafee&tt=The+Da+Vinci+Code+by+Dan+Brown+-+Penguin+Books+Australia&b=0&ni=100&no=1&ts=&tab=organic&sigr=5B8tYUI8ibCS&sigb=t8T8tHuD.siG&sigi=4MUucqRvNAFJ&sigt=qKu6yFjpLkFy&.crumb=BgkayneIRjv&fr=mcafee&fr2=sa-gp-search&type=E211IN714G0"
    }
  ];

  return (
    <div>
      {/* Header with Navbar */}
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">Book Nook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#books">Books</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#fiction">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#nonfiction">Non-Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#bestsellers">Best Sellers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact" onClick={handleShowContact}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="primary" className="ms-2" onClick={handleShowSignIn}>
              Sign In
            </Button>
            <Button variant="secondary" className="ms-2" onClick={handleShowSignUp}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKFyoll1xmV18LdZu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzcwYTRkODQ5YTQ3YzkyOTRhYjkxNmE0MjAwYTA2NDYzBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbooks%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=1600&h=1200&imgurl=s1.1zoom.me%2Fb5050%2F499%2FMany_Book_Library_468620_1600x1200.jpg&rurl=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F468620%2Fz1369%2F1600x1200&size=1211.7KB&p=books&oid=70a4d849a47c9294ab916a4200a06463&fr2=piv-web&fr=mcafee&tt=Papeis+de+parede+1600x1200+Muitas+Livro+Biblioteca+baixar+imagens&b=0&ni=21&no=12&ts=&tab=organic&sigr=SmB2HVfxN4tb&sigb=IYEEwVwSvPg_&sigi=NUo2kRZjFvWd&sigt=UxP5kHy188KV&.crumb=BgkayneIRjv&fr=mcafee&fr2=piv-web&type=E211IN714G0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKFyoll1xmV18Ldpu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQxNmU3OWFmMmM2ZDhjMDQ3OGE3ZDU0ZDlhMGQ3OTkzBGdwb3MDMTMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbooks%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D13&w=474&h=355&imgurl=www.realsimple.com%2Fthmb%2FKrGb42aamhHKaMzWt1Om7U42QsY%3D%2F1500x0%2Ffilters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%2Fgreat-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg&rurl=https%3A%2F%2Fwww.realsimple.com%2Fwork-life%2Fentertainment%2Fwhat-to-read-right-now&size=144.1KB&p=books&oid=416e79af2c6d8c0478a7d54d9a0d7993&fr2=piv-web&fr=mcafee&tt=34+Great+Books+to+Read+Right+Now+for+Any+Mood+or+Interest&b=0&ni=21&no=13&ts=&tab=organic&sigr=iHP9C2kuGJr_&sigb=2FjrCdvIWN_d&sigi=pRgmyJWXntCZ&sigt=o2VFnHbnlctE&.crumb=BgkayneIRjv&fr=mcafee&fr2=piv-web&type=E211IN714G0"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKFyoll1xmV18Lg5u9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgyZjk0NTJlZjc3MDNhZTg3NTRhYzk3MDRmNTY3ZDY3BGdwb3MDMjYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbooks%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D26&w=474&h=296&imgurl=www.wrbh.org%2Fwp-content%2Fuploads%2F2015%2F06%2FBooks2.jpg&rurl=https%3A%2F%2Fwww.dictio.id%2Ft%2Fbuku-apa-yang-menjadi-favorit-kalian%2F161240&size=262.4KB&p=books&oid=82f9452ef7703ae8754ac9704f567d67&fr2=piv-web&fr=mcafee&tt=Buku+Apa+Yang+Menjadi+Favorit+Kalian%3F+-+Refreshing+-+Dictio+Community&b=0&ni=21&no=26&ts=&tab=organic&sigr=XuWkl5j2Tc1h&sigb=LmxFFJ0gGEU0&sigi=0xXf8XGmSeZH&sigt=7LVoawQJjvFE&.crumb=BgkayneIRjv&fr=mcafee&fr2=piv-web&type=E211IN714G0"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Book Cards */}
      <Container className="mt-4">
        <Row>
          {books.map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={book.cover} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>by {book.author}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                  <Button variant="primary" className="me-2">Add to Cart</Button>
                  <Button variant="secondary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Contact Modal */}
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="footer mt-auto py-3">
        <div className="container">
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Terms of Service</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">FAQ</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Book Nook
        </div>
      </footer>
    </div>
  );
}

export default App;
