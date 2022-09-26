function Section4() {
  let style = {
    size: "relative w-full h-[950px]  text-white",
    top: "w-full h-[75%] bg-[url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/bc48a0cb914d58289d18e4d9/pexelsphoto3806275.jpeg')] bg-cover bg-center",
    bottom: "w-full h-[25%] bg-[#748284] relative",
    img: "w-[330px] h-[530px] absolute bottom-[20%] right-[15%]",
    img_self: "w-full h-full object-cover",
    header: "text-center  font-[500] text-[30px] ",
    txt: "text-center text-[17px] pr-[35px] pl-[35px]  pt-[20px] leading-6 ",
    txt2: "text-center  leading-6 mt-[15px]",
    box: "flex  w-[700px] h-[280px] absolute bottom-[20%] left-[15%]",
    inbox:
      "flex flex-col justify-center items-center bg-[#1C2122] w-[50%] h-full",
    inbox2:
      "flex flex-col justify-center items-center bg-white text-[#1C2122] w-[50%] h-full",
  };
  return (
    <div className={style.size}>
      <div className={style.top}></div>
      <div className={style.bottom}>
        <div className={style.box}>
          <div className={style.inbox}>
            {" "}
            <p className={style.header}>Air Filter Change</p>
            <p className={style.txt}>
              Donec volutpat, purus et tempus convallis, odio quam consectetur
              nulla, sit amet auctor augue ligula ac ipsum. Curabitur
              elementum...
            </p>
          </div>
          <div className={style.inbox2}>
            <p className={style.header}>Battery-water</p>
            <p className={style.txt}>
              Donec volutpat, purus et tempus convallis, odio quam consectetur
              nulla, sit amet auctor augue ligula ac ipsum. Curabitur
              elementum...
            </p>
          </div>
        </div>

        <div className={style.img}>
          <img
            src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/fd12b1fdd8b25bdfb3eee767/pexelsphoto3806288.jpeg"
            alt=""
            className={style.img_self}
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
