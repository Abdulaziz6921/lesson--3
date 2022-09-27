function Section7() {
  let style = {
    size: "relative w-full h-[400px] text-white",
    top: "bg-[#1C2122] flex items-center w-full h-full ",
    img: "flex justify-end w-[60%] h-full",
    img_self: "w-[95%] h-full object-cover",
    info: "w-[27%] h-[30%] ml-[50px]",
    header: "text-end  font-[600] text-[36px]  leading-9",
  };
  return (
    <div className={style.size}>
      <div className={style.top}>
        <div className={style.img}>
          <img
            src="https://damion.club/uploads/posts/2022-02/thumbs/1645511969_13-damion-club-p-chyornii-aston-martin-avtomobili-13.jpg"
            alt=""
            className={style.img_self}
          />
        </div>

        <div className={style.info}>
          <h1 className={style.header}>
            Safe. Relaxing. Good to ride in. Subtly decorated.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section7;
