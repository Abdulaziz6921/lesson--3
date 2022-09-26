import car from "../Images/car.svg";
import taxi from "../Images/taxi.svg";
import payment from "../Images/pay.svg";

function Section2() {
  let style = {
    size: "relative w-full h-[950px] bg-gradient-to-b from-[#252b2c] to-[#cccfcf] text-white",
    top: "flex items-center w-full h-[50%]",
    bottom: "w-full h-[50%]",
    img: "w-[65%] h-full",
    img_self: "w-full h-full object-contain",
    info: "flex flex-col  justify-between w-[22%] h-[60%]",
    header: "text-end  font-[600] text-[36px]  leading-9",
    txt: "text-end text-[17px]  leading-6",
    header2: "text-center  font-[600] text-[40px] mt-[40px]",
    txt2: "text-center  leading-6 mt-[15px]",
    box: " mt-[70px] flex items-center justify-between m-auto w-[70%] h-[190px]",
    inbox: "flex flex-col justify-between items-center w-[320px] h-full",
    inbox_img: "w-[120px] h-[110px] object-contain",
    inbox_txt: "text-center  leading-8 text-[22px]",
  };
  return (
    <div className={style.size}>
      <div className={style.top}>
        <div className={style.img}>
          <img
            src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/5ac2ebf4ae1dea5956cb57e24afdd19f.png"
            alt=""
            className={style.img_self}
          />
        </div>

        <div className={style.info}>
          <h1 className={style.header}>
            Safe. Relaxing. <br /> Good to ride in. <br /> Subtly decorated.
          </h1>

          <p className={style.txt}>
            The Volvo XC60 sits right at the heart of the big-selling mid-size
            crossover crowd. It’s handsome and luxurious and it wraps you in a
            safety blanket as comprehensive as the Swedish welfare state.
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        <h1 className={style.header2}>How does it work</h1>
        <p className={style.txt2}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia <br /> deserunt mollit anim id est laborum.
        </p>
        <div className={style.box}>
          <div className={style.inbox}>
            <img src={car} alt="" className={style.inbox_img} />
            <p className={style.inbox_txt}>
              Enter your pickup point and time, select your car.
            </p>
          </div>
          <div className={style.inbox}>
            <img src={payment} alt="" className={style.inbox_img} />
            <p className={style.inbox_txt}>
              Select your preferred payment method.
            </p>
          </div>
          <div className={style.inbox}>
            <img src={taxi} alt="" className={style.inbox_img} />
            <p className={style.inbox_txt}>
              Our taxi driver picks you up at the given location and time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
