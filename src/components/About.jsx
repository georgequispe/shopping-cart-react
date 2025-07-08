import { Container, Row, Col, Card } from "react-bootstrap";

export const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("/foto3.jpg") center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container className="about my-5">
        <h1 className="mb-4 text-center">Sobre Nosotros</h1>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Historia y Misión</Card.Title>
                <Card.Text>
                  En <strong>La Verdulería "La Saludable"</strong> llevamos más de 10
                  años ofreciendo frutas y verduras frescas, seleccionadas y de la
                  mejor calidad. Nuestra misión es promover una alimentación
                  saludable y accesible para toda la familia, trabajando siempre con
                  productores locales y respetando el medio ambiente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>¿Qué Ofrecemos?</Card.Title>
                <Card.Text>
                  Frutas de estación, verduras frescas, productos orgánicos, combos
                  saludables, hierbas aromáticas, frutos secos y mucho más. Nos
                  especializamos en productos frescos, naturales y de origen local,
                  garantizando la mejor calidad y sabor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Compromiso</Card.Title>
                <Card.Text>
                  Nos comprometemos con la salud, el medio ambiente y la comunidad.
                  Realizamos envíos a domicilio en toda la ciudad y alrededores, y
                  también podés visitarnos en nuestro local. Nuestro equipo está
                  siempre dispuesto a asesorarte y brindarte la mejor atención.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
            