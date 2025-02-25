import image1 from '../assets/truth.png';
import image2 from '../assets/loyal.png';
import image3 from '../assets/eff.png';
import image4 from '../assets/friend.png';
import image5 from '../assets/polite.png';
import image6 from '../assets/pet.png';
import image7 from '../assets/ob.png';
import image8 from '../assets/eco.png';
import image9 from '../assets/soap.png';
import image10 from '../assets/strong.png';
import headerImage from '../assets/law.png';
import baden from '../assets/bw.png'
const Law = () => {
  const scoutLaw = [
    {
      text: "صادق:أن يوثق بشرف الكشاف ويعتمد عليه",
      image: image1
    },
    {
      text: "مخلص: الكشاف مخلص لله ولوطنه ومطيع لأولياء أمره ورؤسائه ومرئوسيه في الحق دون تردد",
      image: image2
    },
    {
      text: "نافع: واجب الكشاف أن يكون نافعًا وأن يساعد الآخرين",
      image: image3
    },
    {
      text: "ودود: الكشاف صديق للجميع وأخ لكل كشاف آخر",
      image: image4
    },
    {
      text: "مؤدب: الكشاف مؤدب ومهذب في اخلاقه وتصرفاته",
      image: image5
    },
    {
      text: "رفيق: الكشاف رفيق بالحيوان «ويحب النبات ويرى في الطبيعة آية الله»",
      image: image6
    },
    {
      text: "مطيع: الكشاف يطيع أوامر والديه وعريف طليعته وقائده",
      image: image7
    },
    {
      text: "باش: الكشاف باش يقابل الصعوبات بصدر رحب",
      image: image10
    },
    {
      text: "مقتصد: الكشاف غير مبذر ومحافظ",
      image: image8
    },
    {
      text: "نظيف: الكشاف نظيف في الفكر والقول والفعل والمظهر وكل ما يقوم به",
      image: image9
    }
  ];

  return (
    <div className="page-container">
      <div className="header-container">
        <img src={headerImage} alt="Header" className="header-image" />
        <h1>القانون الكشفي</h1>
      </div>

      {/* New container for image and text */}
      <div className="info-container">
        <img src={baden} alt="Info" className="info-image" /> {/* Replace with your image path */}
        <p className="info-text"> نحن لا نفشل أبدًا عندما نحاول القيام بواجبنا، بل نفشل دائمًا عندما نهمل القيام به. </p> 
        {/* Replace with your text */}
      </div>

      <div className="scout-law-container">
        {scoutLaw.map((law, index) => (
          <div key={index} className="scout-law-box">
            <img src={law.image} alt={`Law ${index + 1}`} className="scout-law-image" />
            <div className="scout-law-text">{law.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Law;