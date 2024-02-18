import React from 'react';
import img1 from '../data/anand.png';
import img2 from '../data/thirdwave.png';
import img3 from '../data/anand.png';
// import img4 from '../data/anand.png';
// import img5 from '../data/anand.png';
import CardReview from '../components/CardReview';

const Competitors = () => {
  return (
      <>
        <div className='flex'>
          <CardReview title="Ananda Cafe" img={img1} text={"Ananda Cafe stands out as a charming oasis, cherished for its delightful atmosphere, delectable cuisine, and welcoming staff. Nestled in a serene location near the beach, it offers a vibrant ambiance perfect for both meetings and leisurely meals. Patrons rave about its signature dishes like the avocado burrata open toastie and Chandra bowl, complemented by refreshing sugarcane juice and great coffee."} extra={"The cafe's boutique adds to its allure with colorful items, while its kid-friendly amenities and spiritual offerings, including meditation rooms and spiritual books, enhance its appeal to a diverse clientele. Despite occasional critiques of coffee quality and busier periods affecting the experience, Ananda Cafe remains a beloved destination for those seeking a peaceful retreat with flavorful fare. In contrast, a nearby cafe offers a quieter setting and friendly service, albeit with a more limited menu and occasional issues with pricing and pace of service, making Ananda Cafe the preferred choice for those seeking a truly unique and satisfying culinary experience+."}/>
          <CardReview title="Third Wave Cafe"  img={img2} text={"Service was not at all good, i had to call the store at least 5 times and wait for 2 hours to get my order\nThe Iced Vietnamese Coffee was simply awful. Very bitter with an overdose of cinnamon. The lime wedge/slice provided couldn't even mitigate the bitterness and was not enough as per the size of the beverage."} extra={"The beverage also lacked the characteristic condensed milk that is always part of an authentic Vietnamese Iced Coffee.I did share my feedback at the counter but unfortunately there was no positive resolution.Delicious food served by Ayan"}/>
          <CardReview title="Love & Latte" img={img3} text={"Love & Latte is a well-received cafe in Juhu, praised for its cozy ambiance, delicious food, and friendly service. Customers rave about the exceptional coffee, particularly the lattes with impressive latte art, and the scrumptious pastries. The menu offers a variety of dishes, from pizzas to pastas to desserts, all of which are highly rated. The staff is described as attentive, knowledgeable, and welcoming, contributing to the overall positive experience."} extra={"The ambiance is described as warm, inviting, and perfect for relaxing or working. Several reviewers have mentioned the cleanliness and hygiene of the cafe, which adds to its appeal. Love & Latte is a popular spot for a peaceful morning, productive afternoon, or enjoyable evening out with friends. Overall, the cafe has received consistent praise for its quality food, excellent ambiance, and attentive service, making it a highly recommended destination for coffee lovers and those seeking a cozy and enjoyable dining experience."}/>
          {/* <CardReview title="" img={img4} text={"Ananda Cafe stands out as a charming oasis, cherished for its delightful atmosphere, delectable cuisine, and welcoming staff. Nestled in a serene location near the beach, it offers a vibrant ambiance perfect for both meetings and leisurely meals. Patrons rave about its signature dishes like the avocado burrata open toastie and Chandra bowl, complemented by refreshing sugarcane juice and great coffee."} extra={"The cafe's boutique adds to its allure with colorful items, while its kid-friendly amenities and spiritual offerings, including meditation rooms and spiritual books, enhance its appeal to a diverse clientele. Despite occasional critiques of coffee quality and busier periods affecting the experience, Ananda Cafe remains a beloved destination for those seeking a peaceful retreat with flavorful fare. In contrast, a nearby cafe offers a quieter setting and friendly service, albeit with a more limited menu and occasional issues with pricing and pace of service, making Ananda Cafe the preferred choice for those seeking a truly unique and satisfying culinary experience+."}/>
          <CardReview img={img5} text={""} extra={""}/> */}
        </div>

      </>

  )
}

export default Competitors