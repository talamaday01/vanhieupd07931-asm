window.addEventListener("load", function () {
    let d = new Date();
    let ngay = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy",
    ];
    // let thang = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const descTime = document.querySelector(".desc-data-time");
    let month = d.getMinutes();
    if (month < 10) {
        month = "0" + month;
    }
    descTime.textContent =
        `Hôm nay, ${ngay[d.getDay()]} ngày ${d.getDate()} tháng ${
            d.getMonth() + 1
        } năm ${d.getFullYear()}, ${d.getHours()}:` + month;
    const imgPanel = document.querySelector(".img-panel");
    let vt = 0;
    imgPanel.addEventListener("click", handlePanel);
    function handlePanel() {
        const imgPanels = [
            "./assets/css/img/st1.jpg",
            "./assets/css/img/st2.jpg",
            "./assets/css/img/st3.jpg",
            "./assets/css/img/st4.jpg",
            "./assets/css/img/st5.jpg",
            "./assets/css/img/st6.jpg",
            "./assets/css/img/st7.jpg",
            "./assets/css/img/st8.jpg",
        ];
        imgPanel.src = imgPanels[vt];
        vt++;
        if (vt > 7) {
            vt = 0;
        }
    }
    setInterval(handlePanel, 2500);
    const modal = document.querySelector(".modal");
    const actionBtn = document.querySelector(".login");
    const body = document.body;
    actionBtn.addEventListener("click", handleBtn);
    function handleBtn(e) {
        modal.classList.add("active");
    }
    body.addEventListener("click", function (e) {
        if (e.target.matches(".modal")) {
            modal.classList.remove("active");
        }
    });
});
