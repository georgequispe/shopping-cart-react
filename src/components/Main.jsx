import Carousel from 'react-bootstrap/Carousel';

export const Main = () => {
  return (
    <div className="main" style={{ padding: 0, margin: 0, minHeight: "1px" }}>
      <Carousel
        style={{
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          borderRadius: 0
        }}
        interval={3000}
        fade
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/verdura1.jpg"
            alt="Primera verdura"
            style={{
              width: "100vw",
              height: "60vh",
              objectFit: "cover",
              margin: 0,
              borderRadius: 0
            }}
          />
          <Carousel.Caption>
            <h3>Verdura fresca</h3>
            <p>Las mejores verduras para tu mesa.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/verdura2.jpg"
            alt="Segunda verdura"
            style={{
              width: "100vw",
              height: "60vh",
              objectFit: "cover",
              margin: 0,
              borderRadius: 0
            }}
          />
          <Carousel.Caption>
            <h3>Frutas y verduras</h3>
            <p>Salud y sabor en cada bocado.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/verdura3.jpg"
            alt="Tercera verdura"
            style={{
              width: "100vw",
              height: "60vh",
              objectFit: "cover",
              margin: 0,
              borderRadius: 0
            }}
          />
          <Carousel.Caption>
            <h3>Productos naturales</h3>
            <p>Directo del campo a tu hogar.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

