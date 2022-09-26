function Section1() {
  let style = {
    size: "relative w-full h-[750px]  border-t-[0.000001px]",
    img: "w-full h-full bg-[url('https://1gai.ru/uploads/posts/2016-06/1466681035_v90-rolls-off-production-line_5.jpg')] bg-cover bg-center -z-10 absolute top-[0] left-[0] brightness-50",
    header: "text-center mt-[4%] text-[150px] text-white",
    txt: "text-center  text-[25px] text-white -mt-[2.5%]",
  };
  return (
    <div className={style.size}>
      <p className={style.header}>XC60</p>
      <p className={style.txt}>A safe way to move a family around in style.</p>
      <div className={style.img}></div>
    </div>
  );
}

export default Section1;
