import React from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function CompanyPage(props) {

  let companyId = useParams().companySlug
  console.log(companyId)

  let company = props.companies.filter((oneCompanie) => {
    return oneCompanie.id == companyId
  })
  console.log(company)

  return (
    <div className="companyProfile">
      <h1>Company Profile</h1>
      <div className="companyPageDiv">
        <img className="logoPicture" src={company[0].logo} alt="" />
        <div>
          <h1>{company[0].name}</h1>
          <h2>About</h2>
          <p className="description">{company[0].description}</p>
        </div>
      </div>

      <footer>
        
    
          <Swiper
                modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={5}
                  navigation
                  pagination={{clickable:true}}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>

            {props.tech.map((oneTech) => {
              return (
                
                  <SwiperSlide key={oneTech.id}>
                    <div className="techDiv swiper-wrapper">
                      <Link to={`/tech/${oneTech.name}`} ><h2>{oneTech.name}</h2></Link>
                      <img className="techPictures" src={oneTech.image} alt="" />
                    </div>
                  </SwiperSlide>
      
              )
            })}
            </Swiper>
      </footer>
    </div>
  );
}

export default CompanyPage;  
