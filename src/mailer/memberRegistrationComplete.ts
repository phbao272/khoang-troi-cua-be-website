'use strict';

import { sendMail, renderEmailData } from '@service/mailService';

export async function informMemberRestrationComplete(memberData: any) {
  const mailData = await renderEmailData("member-registration-complete.ejs", {
    memberData
  });
  await sendMail(
    [memberData.email],
    'CẢM ƠN BẠN ĐÃ ĐĂNG KÝ THÀNH VIÊN KHOẢNG TRỜI CỦA BÉ',
    mailData
  );
}
