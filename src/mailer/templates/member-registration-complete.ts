import mailTemplate from "./template";

export default (data: any) => {
  const content =  `
    Thân gửi bạn ${data.full_name}!<br>
    <br>
    Khoảng Trời Của Bé chào bạn! Lời đầu tiên, chúng mình xin chân thành cảm ơn sự quan tâm của bạn đến hoạt động tình nguyện vì trẻ em và đăng ký tham gia trở thành thành viên của Khoảng Trời Của Bé.<br>
    <br>
    Chúng mình xác nhận đã nhận được thông tin về hồ sơ của bạn. Thông tin chi tiết như sau:<br>
    1. Họ và tên: ${data.full_name}<br>
    2. Ngày, tháng, năm sinh: ${data.birthday}<br>
    3. Số điện thoại: ${data.phone_number}<br>
    4. Email: ${data.email}<br>
    5. Nơi học tập hoặc công tác: ${data.work_place}<br>
    6. Nơi sống: ${data.address}<br>
    7. Kinh nghiệm tham gia hoạt động xã hội: ${data.has_social_activities}<br>
    8. Kỷ niệm khi tham gia hoạt động xã hội: ${data.memories}<br>
    9. Vị trí muốn tham gia tại Khoảng Trời Của Bé: ${data.position}<br>
    10. Mong muốn của bạn khi tham gia Khoảng Trời Của Bé: ${data.hope_to_receive}<br>
    <br>
    Bạn hãy kiểm tra lại xem các thông tin đã chính xác hay chưa nhé. Trong trường hợp thông tin đã chính xác, bạn hãy chờ email thông báo Kết quả vòng đơn của chúng mình nhé. Còn trong trường hợp thông tin có sai sót, mời bạn reply lại email này và điền lại giúp chúng mình một đơn mới qua đường link <LINK ĐẾN TRANG ĐĂNG KÝ THÀNH VIÊN> nhé.<br>
    Khoảng Trời Của Bé cảm ơn bạn nhiều!<br>
    <br>
    Thân mến!<br>
    Khoảng Trời Của Bé<br>
  `

  return mailTemplate(content);
};
