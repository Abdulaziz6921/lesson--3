function Section3() {
  let style = {
    size: "flex w-full h-[550px] text-white",
    left: "flex justify-end items-center w-[55%] h-full bg-[#1C2122]",
    right: "w-[45%] h-full",
    wrapper:
      "flex flex-col justify-between items-center mr-[20px] w-[80%] h-[48%]",
    header: "text-center  font-[600] text-[37px] leading-9",
    txt: "text-center  text-[20px] ",
    btn: "w-[160px] h-[55px] border-2 border-white",
    img: "w-full h-full object-cover",
  };

  return (
    <div className={style.size}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <h1 className={style.header}>
            We Provide <br />
            Car Service
          </h1>
          <p className={style.txt}>
            We are your one-stop shop for complete auto care for every make and
            model of vehicle.
          </p>
          <button className={style.btn}>READ MORE</button>
        </div>
      </div>
      <div className={style.right}>
        <img
          src="https://1gai.ru/uploads/posts/2013-09/1378510234_volvo-concept-coupe-152.jpg"
          alt=""
          className={style.img}
        />
      </div>
    </div>
  );
}

export default Section3;
