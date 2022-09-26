import car from "../Images/car.svg";

function Section5() {
  let style = {
    size: "flex w-full h-[630px] text-white",
    left: "flex justify-center items-center w-[40%] h-full bg-[#1C2122]",
    right: "w-[60%] h-full",
    wrapper: "flex flex-col justify-between items-center w-[80%] h-[67%]",
    img: "w-[90px] h-[100px]",
    header: "text-center  font-[600] text-[37px] leading-9",
    txt: "text-center  text-[19px] pr-[10px] pl-[10px]",
    btn: "w-[150px] h-[40px] border-none bg-[#D9DCDD] text-[#1C2122] font-[600]",
    img2: "w-full h-full object-cover",
  };

  return (
    <div className={style.size}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <img src={car} alt="" className={style.img} />
          <h1 className={style.header}>Car Servicing</h1>
          <p className={style.txt}>
            If you’re concerned about a fault with your car, our mechanics can
            carry out a number of different car repairs to help keep your car on
            the road and running smoothly. We offer a free car repair check to
            help diagnose the problem.
          </p>
          <button className={style.btn}>READ MORE</button>
        </div>
      </div>
      <div className={style.right}>
        <img
          src="https://highrangegarage.com/wp-content/uploads/2015/05/1_JktzC9GrA_l4yz0cCy8a5Q.jpeg"
          alt=""
          className={style.img2}
        />
      </div>
    </div>
  );
}

export default Section5;
