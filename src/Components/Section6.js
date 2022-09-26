function Section6() {
  let style = {
    size: " flex justify-center items-center w-full h-[680px]  bg-gradient-to-b from-[#252b2c] to-[#707D7F] text-white",
    top: "flex items-center w-full h-[50%]",
    bottom: "flex justify-between w-[75%] h-[80%]",
    info: "flex flex-col  justify-between w-[22%] h-[60%] ",
    header: "font-[600] text-[33px]",
    txt: "text-end text-[17px]  leading-6",
    box: "flex flex-col items-start justify-between w-[29%] h-[72%]",
    box2: "flex flex-col items-start justify-between w-[29%] h-[90%]",
    box3: "flex flex-col items-start justify-between w-[29%] h-[95%]",
    img: "w-full h-[180px] object-cover",
    txt: " text-[18px] mb-[15px] mt-[12px]",
  };

  return (
    <div className={style.size}>
      <div className={style.bottom}>
        <div className={style.box}>
          <h1 className={style.header}>Taxi</h1>
          <img
            src="https://images01.nicepage.com/b5/e9/b5e94a25741dca619aa54b1f08ab425d.png"
            alt=""
            className={style.img}
          />
          <p className={style.txt}>The taxi you know</p>

          <li>Price based on taximeter</li>
          <li>Executed by local taxi fleets</li>
          <li>Online and offline payment</li>
          <li>24/7 support hotline</li>
        </div>

        <div className={style.box2}>
          <h1 className={style.header}>Economy+</h1>
          <img
            src="https://images01.nicepage.com/97/52/975255a895e0efd3c75c073d5e0e89f3.png"
            alt=""
            className={style.img}
          />
          <p className={style.txt}>For budget travelers</p>

          <li>Fixed price </li>
          <li>English-speaking driver </li>
          <li>Automated flight and train tracking</li>
          <li>45 minutes waiting time after landing </li>
          <li>Pickup with name sign in arrivals hall</li>
          <li>Children seats available on request </li>
          <li>Online and offline payment </li>
          <li>24/7 support hotline </li>
        </div>

        <div className={style.box3}>
          <h1 className={style.header}>Business Class</h1>
          <img
            src="https://images01.nicepage.com/69/ab/69ab11c48df6f674467cc0f1db1a99fc.png"
            alt=""
            className={style.img}
          />
          <p className={style.txt}>Business traveler's favourite</p>
          <li>Black car guaranteed</li>
          <li>Fixed price </li>
          <li>English-speaking driver </li>
          <li>Automated flight and train tracking</li>
          <li>45 minutes waiting time after landing </li>
          <li>Pickup with name sign in arrivals hall</li>
          <li>Children seats available on request </li>
          <li>Online and offline payment </li>
          <li>24/7 support hotline </li>
        </div>
      </div>
    </div>
  );
}

export default Section6;
