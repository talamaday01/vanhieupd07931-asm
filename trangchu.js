window.addEventListener("load", function () {
    let mainBanner = document.querySelector(".main-banner");
    mainBanner.addEventListener("click", handleImgaes);
    let index = 0;
    let imgs = [
        "./assets/css/img/tuyensinhlop10js.jpg",
        "./assets/css/img/lophocjs.jpg",
        "./assets/css/img/thethaojs.jpg",
        "./assets/css/img/thithptjs.jpg",
        "./assets/css/img/hoaphuongjs.jpg",
        "./assets/css/img/anhbantin1.jpg",
    ];
    let content = [
        "TUYỂN SINH LỚP 10 NĂM HỌC 2022-2023",
        "HỘI THI GIÁO VIÊN DẠY GIỎI CẤP TỈNH NĂM HỌC...",
        "HOẠT ĐỘNG THỂ DỤC THỂ THAO NĂM HỌC 2022",
        "CHIẾN DỊCH TÌNH NGUYỆN “TIẾP SỨC MÙA THI” NĂM 2022",
        'CHIẾN DỊCH TÌNH NGUYỆN "HOA PHƯỢNG ĐỎ" NĂM 2022',
        "GIẢI BÓNG ĐÁ MINI NAM NỮ TRUYỀN THỐNG TRƯỜNG THPT...",
    ];
    const thumbs = document.querySelectorAll(".head .block-right .thumb");
    function handleImgaes(e) {
        mainBanner.src = imgs[index];
        mainBanner.nextElementSibling.textContent = content[index];
        index++;
        if (index === 6) {
            index = 0;
        }
    }
    const rightJs = document.querySelector(".right-js");
    rightJs.addEventListener("click", handleNextImg);

    function handleNextImg() {
        index++;
        if (index === 6) {
            index = 0;
        }
        mainBanner.src = imgs[index];
        mainBanner.nextElementSibling.textContent = content[index];
    }

    const leftJs = document.querySelector(".left-js");
    leftJs.addEventListener("click", function (e) {
        index--;
        if (index < 0) {
            index = 5;
        }
        mainBanner.src = imgs[index];
        mainBanner.nextElementSibling.textContent = content[index];
    });
    setInterval(handleImgaes, 4000);
});
