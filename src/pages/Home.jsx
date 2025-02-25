import image1 from '../assets/flowers.jpg' ;
import image2 from '../assets/scouts.jpg' ;
import image3 from '../assets/boys.jpg' ;

const Home = () => {
  // مصفوفات البيانات
  const mainContent = [
    {
      heading: "مرحبًا بكم في كتيبة كشافة حمص العاشرة",
      paragraph: "نحن جزء من منظمة الكشافة السورية، مكرسون لتطوير الشباب من خلال أنشطة الكشافة."
    }
  ];

  const aboutUsContent = [
    {
      heading: "معلومات عنا",
      paragraph: "تأسست في [السنة]، وقد خدمت كتيبتنا مجتمع حمص من خلال..."
    }
  ];

  const polaroidData = [
    {
      text: "الزهرات",
      image: image1 // Replace with your image path
    },
    {
      text: "المتقدم",
      image: image2 // Replace with your image path
    },
    {
      text: "الفتيان",
      image: image3 // Replace with your image path
    },
    {

    } , 
    {

    }
  ];

  return (
    <div className="page-container">
      {mainContent.map((content, index) => (
        <div key={index}>
          <h1>{content.heading}</h1>
          <p>{content.paragraph}</p>
        </div>
      ))}
      {aboutUsContent.map((content, index) => (
        <div key={index}>
          <h2>{content.heading}</h2>
          <p>{content.paragraph}</p>
        </div>
      ))}

      {/* Polaroid Section */}
      <div className="polaroid-container">
        {polaroidData.map((polaroid, index) => (
          <Polaroid key={index} text={polaroid.text} image={polaroid.image} />
        ))}
      </div>
    </div>
  );
};

const Polaroid = ({ text, image }) => {
  return (
    <div className="polaroid">
      <img src={image} alt={text} className="polaroid-image" />
      <p className="polaroid-text">{text}</p>
    </div>
  );
};

export default Home;