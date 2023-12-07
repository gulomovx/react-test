import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-blue-950">
      <div className="max-w-[1345px] mx-auto py-8 text-white flex items-center justify-between ">
        <div className="">
          <h1 className="text-5xl mb-8">LOGO</h1>
          {/* manzil, tel, email */}
          <p className="flex gap-12">
            Telefon <span>: +998 99 9846647</span>
          </p>
          <p className="flex gap-12">
            E-mail <span>: delta_group_upgrade@gmail.com</span>
          </p>
          <p className="flex gap-12 w-72">
            Manzil{" "}
            <span>
              : Farg’ona shaxar Farg’ona ko’chasi 86-uy, Farg’ona viloyati,
              O’zbekiston
            </span>
          </p>
        </div>
              <div className=" flex  gap-16">
                  {/* links */}
                  <div className="">
                      <p className="font-semibold">Menyu</p>
                      <ul className=" flex flex-col gap-2">
                          <li><a href="">Biz haqimizda</a></li>
                          <li><a href="">Yangi mahsulotlar</a></li>
                          <li><a href="">Erkaklar uchun</a></li>
                          <li><a href="">Ayollar uchun</a></li>
                          <li><a href="">Maxsus buyurtma</a></li>
                          <li><a href="">Yetkazib berish</a></li>
                      </ul>
                  </div>
                  <div className="">
                  <p className="font-semibold">Yordam xizmatlari</p>
                      <ul className=" flex flex-col gap-2">
                          <li><a href="">FAQ</a></li>
                          <li><a href="">Buyurtma berish</a></li>
                          <li><a href="">Saqlash</a></li>
                          <li><a href="">Kimyoviy tozalash</a></li>
                          <li><a href="">Yetkazib berish</a></li>
                      </ul>
                  </div>
                  <div className="">
                  <p className="font-semibold">Bog’lanish</p>
                      <ul className=" flex flex-col gap-2">
                          <li><a href="">Biz haqimizda</a></li>
                          <li><a href="">Hamkorlarimiz</a></li>
                          <li><a href="">Chat</a></li>
                          
                      </ul>
                  </div>
        </div>
        <div className="bg-slate-300 w-96 h-64"></div>
      </div>
    </div>
  );
};

export default Footer;
