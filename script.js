(() => {
const CLUB_URL = 'https://www.facebook.com/vanhoavntdnschool';
const CONFESS_URL = 'https://www.facebook.com/share/p/19NG2XTA4D/';
const VL_WEB = 'https://vietland-adventure.vercel.app/';
const VL_FB = 'https://www.facebook.com/profile.php?id=61570504975896';
const FILM_YT = 'https://youtu.be/RkXuPzmmYa0';
const LW_WEB = 'https://anhsang.vercel.app/';

/* ---------- Đông Sơn drum motif ---------- */
function drumSVG(){
  const c = 200, P = [];
  const ring = r => `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="currentColor" stroke-width="1.2"/>`;
  // 14-point star
  let star = '';
  for (let i=0;i<28;i++){ const a = Math.PI*i/14 - Math.PI/2, r = i%2 ? 12 : 40; star += (i?'L':'M') + (c+r*Math.cos(a)).toFixed(1)+' '+(c+r*Math.sin(a)).toFixed(1); }
  P.push(`<path d="${star}Z" fill="currentColor"/>`);
  [48,56,92,100,136,144,178,186,196].forEach(r=>P.push(ring(r)));
  // ring of tangent circles with dots
  for (let i=0;i<18;i++){ const a=2*Math.PI*i/18, x=c+74*Math.cos(a), y=c+74*Math.sin(a);
    P.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" fill="none" stroke="currentColor" stroke-width="1.1"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="currentColor"/>`); }
  // zigzag between 100 and 136
  let z=''; const n=48;
  for (let i=0;i<=n;i++){ const a=2*Math.PI*i/n, r=i%2?132:104; z+=(i?'L':'M')+(c+r*Math.cos(a)).toFixed(1)+' '+(c+r*Math.sin(a)).toFixed(1); }
  P.push(`<path d="${z}" fill="none" stroke="currentColor" stroke-width="1.1"/>`);
  // stylised flying birds (lạc bird) ring between 144 and 178
  for (let i=0;i<10;i++){ const a=2*Math.PI*i/10, x=c+161*Math.cos(a), y=c+161*Math.sin(a), d=(a*180/Math.PI)+90;
    P.push(`<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${d.toFixed(1)})"><path d="M-13 3 Q-4 -9 2 -1 L13 -3 L4 2 Q-2 7 -13 3Z" fill="currentColor"/><path d="M-2 -1 L-8 -11" stroke="currentColor" stroke-width="1.4"/></g>`); }
  // ticks on outer band
  for (let i=0;i<72;i++){ const a=2*Math.PI*i/72; P.push(`<line x1="${(c+187*Math.cos(a)).toFixed(1)}" y1="${(c+187*Math.sin(a)).toFixed(1)}" x2="${(c+195*Math.cos(a)).toFixed(1)}" y2="${(c+195*Math.sin(a)).toFixed(1)}" stroke="currentColor" stroke-width="1"/>`); }
  return `<svg viewBox="0 0 400 400" role="img">${P.join('')}</svg>`;
}
if (document.getElementById('drum')) document.getElementById('drum').innerHTML = drumSVG();

/* ---------- Text ---------- */
const T = {
  'nav.about':'About Me',
  'nav.projects':'My Projects',
  'nav.conducts':'Conducts',
  'nav.business':'Own Business',
  'nav.experience':'Experience',
  'nav.blog':'Blog',
  'nav.docs':{vi:'Tài liệu',en:'Documents',ko:'자료'},
  'cover.p':{vi:'Một góc nhỏ lưu giữ những dự án mình đã làm: board game Vietland Adventure, nghiên cứu Ikigai, phim ngắn, CLB văn hoá, những việc kinh doanh nhỏ và Lớp vẽ Ánh Sáng. A little corner for big ideas.',en:'A small corner for the things I have made: the Vietland Adventure board game, Ikigai research, a short film, a culture club, small businesses and the Lightweave art class. A little corner for big ideas.',ko:'제가 만들어 온 것들을 모아 둔 작은 공간입니다. 보드게임 Vietland Adventure, 이키가이 연구, 단편영화, 문화 동아리, 작은 장사들, 그리고 Lightweave 미술 수업. A little corner for big ideas.'},
  'ach.title':{vi:'Thành tích',en:'Achievements',ko:'수상 경력'},
  'cert.title':{vi:'Chứng chỉ',en:'Certificates',ko:'수료증'},
  'music.on':{vi:'Tắt nhạc',en:'Music off',ko:'음악 끄기'},
  'music.off':{vi:'Bật nhạc',en:'Play music',ko:'음악 켜기'},
  'nav.contact':'Contact',
  'hub.business':{vi:'Từ slime năm lớp 4 đến lớp vẽ online: những việc kinh doanh mình tự làm.',en:'From slime in grade 4 to online art classes: the businesses I ran myself.',ko:'초등 4학년 슬라임부터 온라인 미술 수업까지, 직접 운영한 비즈니스.'},
  'biz.sub2':{vi:'Từ năm lớp 4, mình đã tự làm sản phẩm, tự bán và học cách kinh doanh qua từng việc nhỏ. Bấm vào từng mục để xem chi tiết.',en:'Since grade 4 I\'ve made things, sold them myself, and learned business one small venture at a time. Open each one for the details.',ko:'초등 4학년 때부터 직접 만들고 팔며 작은 일 하나하나로 장사를 배웠습니다. 항목을 눌러 자세히 보세요.'},
  'biz.tag':{vi:'Kinh doanh của mình',en:'My own business',ko:'나의 비즈니스'},
  'biz.sub':{vi:'Lớp vẽ do mình sáng lập và trực tiếp giảng dạy, dành cho các bạn nhỏ 6–15 tuổi ở TP. Hồ Chí Minh.',en:'A painting school I founded and teach myself, for children aged 6–15 in Ho Chi Minh City.',ko:'제가 직접 설립하고 가르치는 호찌민시 6–15세 어린이 미술 수업입니다.'},
  'biz.intro':{vi:'Mỗi tuần 2–3 buổi, mỗi buổi 90 phút. Khoá 1 và Khoá 2 học online, mỗi lớp tối đa 5 học viên để mình theo sát từng bạn. Ngoài ra mình nhận dạy kèm 1-1.',
    en:'Two to three sessions a week, 90 minutes each. Courses 1 and 2 are online with at most 5 students per class, so I can follow each child closely. I also teach one-to-one.',
    ko:'주 2–3회, 회당 90분입니다. 1·2과정은 온라인으로 반당 최대 5명이라 한 명 한 명 세심하게 지도합니다. 1:1 수업도 진행합니다.'},
  'biz.s1':{vi:'độ tuổi học viên',en:'student ages',ko:'수강 연령'},
  'biz.s2':{vi:'phút mỗi buổi',en:'minutes per session',ko:'회당 분'},
  'biz.s3':{vi:'học viên tối đa / lớp online',en:'students max per online class',ko:'온라인 반 최대 인원'},
  'biz.s4':{vi:'giải thưởng của cô Lily (2023–2025)',en:'awards won by Ms Lily (2023–2025)',ko:'릴리 선생님 수상 (2023–2025)'},
  'biz.courses':{vi:'Khoá học',en:'Courses',ko:'과정'},
  'biz.month':{vi:'/ tháng',en:'/ month',ko:'/ 월'},
  'biz.contactFee':{vi:'Liên hệ',en:'On request',ko:'문의'},
  'biz.schedule':{vi:'Lịch học tham khảo',en:'Sample schedule',ko:'수업 일정 예시'},
  'biz.home':{vi:'Gia sư tại nhà',en:'Home tutoring',ko:'방문 수업'},
  'biz.awards':{vi:'Thành tích của cô Lily',en:'Ms Lily\'s awards',ko:'릴리 선생님 수상 경력'},
  'biz.reach':{vi:'Đăng ký học',en:'Enrol',ko:'수강 신청'},
  'biz.reachTxt':{vi:'Gọi, nhắn hoặc email cho mình để xếp lớp và học thử.',en:'Call, message or email me to find a class and book a trial.',ko:'전화, 메시지, 이메일로 반 배정과 체험 수업을 문의하세요.'},

  'hero.lead':{
    vi:'Mình là <span class="hl">Nguyễn Hoàng Thảo Vy</span> — kể chuyện văn hoá Việt bằng board game, nghiên cứu, phim và màu vẽ.',
    en:'I\'m <span class="hl">Nguyễn Hoàng Thảo Vy</span> — telling Vietnamese stories through board games, research, film and paint.',
    ko:'저는 <span class="hl">응우옌 호앙 타오 비</span>입니다. 보드게임, 연구, 영화, 그림으로 베트남 이야기를 전합니다.'},
  'hero.cta1':{vi:'Xem dự án',en:'See projects',ko:'프로젝트 보기'},
  'hero.cta2':{vi:'Liên hệ',en:'Get in touch',ko:'연락하기'},
  'home.featured':{vi:'Dự án nổi bật',en:'Featured work',ko:'대표 프로젝트'},
  'home.explore':{vi:'Khám phá',en:'Explore',ko:'둘러보기'},
  'hub.about':{vi:'Mình là ai, mình giỏi gì.',en:'Who I am and what I do well.',ko:'저에 대해, 그리고 제 강점.'},
  'hub.projects':{vi:'7 dự án: startup, nghiên cứu, phim, CLB, thiện nguyện, sự kiện, lớp vẽ.',en:'7 projects: startup, research, film, club, charity, events, art class.',ko:'스타트업, 연구, 영화, 동아리, 봉사, 행사, 미술 수업 등 7개.'},
  'hub.conducts':{vi:'Những nguyên tắc mình giữ khi làm việc.',en:'The principles I work by.',ko:'제가 일할 때 지키는 원칙.'},
  'hub.experience':{vi:'Dòng thời gian học tập và hoạt động.',en:'A timeline of study and work.',ko:'학업과 활동의 타임라인.'},
  'hub.blog':{vi:'Chuyện hậu trường từng dự án.',en:'Behind the scenes of each project.',ko:'프로젝트 비하인드 스토리.'},
  'hub.docs':{vi:'Toàn bộ tài liệu gốc, minh chứng cho từng dự án.',en:'Every original document, as evidence for each project.',ko:'프로젝트별 원본 자료와 증빙.'},
  'hub.contact':{vi:'Hợp tác, hỏi lớp vẽ, hay chỉ để chào.',en:'Collaborate, ask about classes, or say hi.',ko:'협업, 수업 문의, 인사 모두 환영해요.'},

  'about.tag':{vi:'Giới thiệu',en:'About',ko:'소개'},
  'about.sub':{vi:'Người kể chuyện bằng nhiều chất liệu: bàn cờ, sổ tay, thước phim, sân khấu và <span class="hl">màu vẽ</span>.',en:'A storyteller across media: board games, notebooks, film, stage and <span class="hl">paint</span>.',ko:'보드게임, 노트, 영화, 무대, 그리고 <span class="hl">물감</span>으로 이야기를 전합니다.'},
  'about.p1':{vi:'Mình lớn lên ở <strong>TP. Hồ Chí Minh</strong> và học tại <strong>THPT Chuyên Trần Đại Nghĩa</strong>. Ở đó mình bắt đầu thói quen biến một câu hỏi lớn thành một sản phẩm cầm nắm được, rồi mang nó đi thử với người thật.',
    en:'I grew up in <strong>Ho Chi Minh City</strong> and studied at <strong>Tran Dai Nghia High School for the Gifted</strong>, where I got into the habit of turning a big question into something people can hold, then testing it with real users.',
    ko:'저는 <strong>호찌민시</strong>에서 자랐고 <strong>쩐다이응이아 영재고등학교</strong>를 다녔습니다. 그곳에서 큰 질문을 손에 잡히는 결과물로 만들고 실제 사람들과 시험해 보는 습관이 생겼습니다.'},
  'about.p2':{vi:'Mình cùng bạn khảo sát hơn 400 học sinh để làm sổ tay Ikigai, cùng 4 người bạn làm <strong>Vietland Adventure</strong>, đạo diễn phim <strong>Mênh Mang Nỗi Người</strong>. Là Bí thư lớp 11CV, mình dẫn dắt công trình thanh niên quyên góp hơn 11 triệu đồng cho viện dưỡng lão.',
    en:'I surveyed 400+ students to build the Ikigai notebook, made <strong>Vietland Adventure</strong> with four friends, and directed <strong>Mênh Mang Nỗi Người</strong>. As class Youth Union secretary of 11CV, I led a drive that raised over 11 million VND for a retirement home.',
    ko:'400명 이상의 학생을 설문해 이키가이 노트를 만들었고, 친구 4명과 <strong>Vietland Adventure</strong>를 제작했으며, 영화 <strong>Mênh Mang Nỗi Người</strong>를 연출했습니다. 11CV 학급 청년단 서기로서 요양원을 위해 1,100만 동 이상을 모금했습니다.'},
  'about.p3':{vi:'Ở <strong>CLB Văn hoá Việt Nam</strong>, mình là Head of Content nhiệm kỳ 2024–2025, cùng Ban Chủ nhiệm đón đoàn học sinh Nhật Bản và tổ chức <strong>Âm sắc: Ấm II</strong>. Ngoài ra mình vẽ tranh, đã nhận một số giải mỹ thuật cấp thành phố và đang dạy <strong>Lớp vẽ Ánh Sáng</strong> cho các bạn nhỏ 6–15 tuổi. Chặng tiếp theo: du học Hàn Quốc.',
    en:'At the <strong>Vietnamese Culture Club</strong> I was Head of Content for 2024–2025, hosting Japanese student delegations and running <strong>Âm sắc: Ấm II</strong> with the board. I also paint, have won several city-level art prizes, and teach <strong>Lightweave</strong>, a painting class for kids aged 6–15. Next stop: studying in Korea.',
    ko:'<strong>베트남 문화 동아리</strong>에서 2024–2025 콘텐츠 팀장으로 일본 학생 방문단을 맞이하고 <strong>Âm sắc: Ấm II</strong>를 운영했습니다. 그림을 그리며 시 단위 미술대회에서 여러 차례 수상했고, 6–15세 어린이 미술 수업 <strong>Lightweave</strong>를 운영합니다. 다음 목표는 한국 유학입니다.'},
  'about.f1':{vi:'học sinh tham gia khảo sát Ikigai',en:'students in the Ikigai survey',ko:'이키가이 설문 참여 학생'},
  'about.f2':{vi:'khách tại Âm sắc: Ấm II',en:'guests at Âm sắc: Ấm II',ko:'Âm sắc: Ấm II 참가자'},
  'about.f3':{vi:'tỉnh thành trên bàn cờ Vietland',en:'provinces on the Vietland board',ko:'Vietland 보드 위 지역 수'},
  'about.f5':{vi:'đồng quyên góp cho viện dưỡng lão',en:'VND raised for a retirement home',ko:'동, 요양원 모금액'},

  'projects.tag':{vi:'Dự án',en:'Work',ko:'작업'},
  'projects.sub':{vi:'Những dự án mình làm trưởng nhóm, đạo diễn hoặc điều hành. Mỗi dự án có hồ sơ chi tiết và tài liệu minh chứng.',en:'Projects I led, directed or ran. Each one has a full write-up and supporting documents.',ko:'제가 이끌거나 연출·운영한 프로젝트입니다. 각 프로젝트마다 상세 내용과 증빙 자료가 있습니다.'},
  'ui.details':{vi:'Xem chi tiết',en:'Details',ko:'자세히'},
  'ui.search':{vi:'Tìm dự án…',en:'Search projects…',ko:'프로젝트 검색…'},
  'ui.noresult':{vi:'Không có dự án nào khớp. Thử từ khóa khác nhé.',en:'No project matches. Try another keyword.',ko:'일치하는 프로젝트가 없습니다.'},
  'ui.next':{vi:'Trang tiếp theo',en:'Next page',ko:'다음 페이지'},
  'ui.copy':{vi:'Sao chép',en:'Copy',ko:'복사'},
  'ui.copied':{vi:'Đã sao chép',en:'Copied',ko:'복사됨'},
  'ui.read':{vi:'Đọc thử',en:'Preview',ko:'미리 보기'},
  'ui.preview':{vi:'Đây là bản xem trước. Bài đầy đủ sẽ được đăng tại đây.',en:'This is a preview. The full post will be published here.',ko:'미리 보기입니다. 전체 글은 이곳에 게시될 예정입니다.'},
  'ui.soon':{vi:'Sắp đăng',en:'Coming soon',ko:'게시 예정'},
  'ui.min':{vi:'phút đọc',en:'min read',ko:'분 분량'},
  'ui.photos':{vi:'Xem ảnh & tài liệu',en:'Photos & documents',ko:'사진·자료 보기'},
  'ui.docs':{vi:'Tài liệu minh chứng',en:'Supporting documents',ko:'증빙 자료'},
  'ui.watch':{vi:'Xem phim',en:'Watch the film',ko:'영화 보기'},
  'ui.now':{vi:'Đang diễn ra',en:'Ongoing',ko:'진행 중'},
  'cat.all':{vi:'Tất cả',en:'All',ko:'전체'},
  'cat.startup':{vi:'Startup',en:'Startup',ko:'스타트업'},
  'cat.research':{vi:'Nghiên cứu',en:'Research',ko:'연구'},
  'cat.film':{vi:'Phim',en:'Film',ko:'영화'},
  'cat.community':{vi:'Cộng đồng & CLB',en:'Community & Club',ko:'지역사회·동아리'},
  'cat.art':{vi:'Nghệ thuật',en:'Art',ko:'예술'},

  'conducts.tag':{vi:'Nguyên tắc',en:'Principles',ko:'원칙'},
  'conducts.sub':{vi:'Những điều mình giữ khi làm việc, dù là dẫn nhóm khởi nghiệp, điều hành sự kiện hay đứng lớp với các bạn nhỏ.',en:'What I hold to, whether leading a startup team, running an event, or teaching kids.',ko:'스타트업 팀을 이끌 때도, 행사를 운영할 때도, 아이들을 가르칠 때도 지키는 것들입니다.'},
  'c1.q':{vi:'Học qua chơi,<br>hiểu qua làm.',en:'Learn by play,<br>understand by doing.',ko:'놀면서 배우고,<br>하면서 이해한다.'},

  'exp.tag':{vi:'Hành trình',en:'Journey',ko:'여정'},
  'exp.sub':{vi:'Học tập, dự án và hoạt động, xếp theo thời gian từ gần nhất.',en:'Study, projects and activities, newest first.',ko:'학업, 프로젝트, 활동을 최신순으로 정리했습니다.'},
  'blog.tag':{vi:'Ghi chép',en:'Notes',ko:'기록'},
  'blog.sub':{vi:'Chuyện hậu trường của từng dự án. Các bài đang được viết dần.',en:'Behind-the-scenes notes from each project, being written one by one.',ko:'프로젝트별 비하인드 기록을 하나씩 쓰고 있습니다.'},
  'docs.tag':{vi:'Minh chứng',en:'Evidence',ko:'증빙'},
  'docs.sub':{vi:'Tài liệu gốc của từng dự án: đề án, báo cáo, kế hoạch, poster, video và các đường dẫn chính thức. Bấm vào để mở trong tab mới.',en:'Original files for each project: proposals, reports, plans, posters, video and official links. Each opens in a new tab.',ko:'프로젝트별 원본 자료: 제안서, 보고서, 계획서, 포스터, 영상, 공식 링크. 클릭하면 새 탭에서 열립니다.'},
  'docs.note':{vi:'Báo cáo NCKH và kế hoạch thiện nguyện được chuyển nguyên văn từ file Word gốc sang PDF để đọc được ngay trên trình duyệt. Video Vietland là bản nén cho web (bản .mov gốc 190 MB).',en:'The research report and charity plan were converted word-for-word from the original Word files to PDF so they open in the browser. The Vietland video is a web-compressed copy (the original .mov is 190 MB).',ko:'연구 보고서와 봉사 계획서는 브라우저에서 바로 열 수 있도록 원본 Word 파일을 그대로 PDF로 변환했습니다. Vietland 영상은 웹용 압축본입니다(원본 .mov 190MB).'},
  'docs.original':{vi:'bản gốc',en:'original',ko:'원본'},
  'docs.pending':{vi:'đang cập nhật',en:'coming soon',ko:'준비 중'},

  'contact.tag':{vi:'Liên hệ',en:'Say hi',ko:'연락'},
  'contact.h':{vi:'Cùng làm<br>điều gì đó?',en:'Make something<br>together?',ko:'함께<br>만들어 볼까요?'},
  'contact.list':{vi:'<li><b>Điện thoại</b><span style="user-select:all">0773 076 302</span></li><li><b>Website</b><span>anhsang.vercel.app</span></li><li><b>Ở đâu</b><span>TP. Hồ Chí Minh, Việt Nam</span></li><li><b>Nhận</b><span>Dự án văn hóa – giáo dục, workshop vẽ, chơi thử boardgame</span></li><li><b>Phản hồi</b><span>Thường trong 2–3 ngày</span></li>',
    en:'<li><b>Phone</b><span style="user-select:all">0773 076 302</span></li><li><b>Website</b><span>anhsang.vercel.app</span></li><li><b>Based in</b><span>Ho Chi Minh City, Vietnam</span></li><li><b>Open to</b><span>Culture & education projects, art workshops, board-game playtests</span></li><li><b>Reply</b><span>Usually within 2–3 days</span></li>',
    ko:'<li><b>전화</b><span style="user-select:all">0773 076 302</span></li><li><b>웹사이트</b><span>anhsang.vercel.app</span></li><li><b>위치</b><span>베트남 호찌민시</span></li><li><b>가능한 일</b><span>문화·교육 프로젝트, 미술 워크숍, 보드게임 체험</span></li><li><b>답장</b><span>보통 2–3일 이내</span></li>'},
  'f.name':{vi:'Tên của bạn',en:'Your name',ko:'이름'},
  'f.topic':{vi:'Chủ đề',en:'Topic',ko:'주제'},
  'f.msg':{vi:'Lời nhắn',en:'Message',ko:'메시지'},
  'f.send':{vi:'Soạn email',en:'Compose email',ko:'이메일 작성'},
  'f.topics':{vi:['Hợp tác dự án','Vietland Adventure','Lớp vẽ Ánh Sáng','Phỏng vấn / truyền thông','Khác'],en:['Collaboration','Vietland Adventure','Lightweave classes','Interview / press','Other'],ko:['협업','Vietland Adventure','Lightweave 미술 수업','인터뷰 / 언론','기타']},
  'f.err':{vi:'Bạn điền tên, email hợp lệ và lời nhắn giúp mình nhé.',en:'Please add your name, a valid email and a message.',ko:'이름, 올바른 이메일, 메시지를 입력해 주세요.'},
  'f.ok':{vi:'Đã sao chép nội dung. Dán vào email gửi tới {m} là xong.',en:'Copied. Paste it into an email to {m}.',ko:'복사되었습니다. {m}로 보내는 이메일에 붙여 넣어 주세요.'},
  'f.fallback':{vi:'Gửi lời nhắn của bạn tới {m} nhé.',en:'Please send your message to {m}.',ko:'{m}로 메시지를 보내 주세요.'},
  'foot.copy':{vi:'© 2026 Nguyễn Hoàng Thảo Vy · TP. Hồ Chí Minh',en:'© 2026 Nguyễn Hoàng Thảo Vy · Ho Chi Minh City',ko:'© 2026 Nguyễn Hoàng Thảo Vy · 호찌민시'},
  'foot.home':{vi:'Về trang chủ ↑',en:'Back to home ↑',ko:'홈으로 ↑'}
};

const PRINCIPLES = [
  {h:{vi:'Văn hóa Việt là chất liệu, không phải trang trí',en:'Vietnamese culture is the substance, not decoration',ko:'베트남 문화는 장식이 아니라 본질'},
   p:{vi:'Mỗi ô đất trên bàn cờ là một địa danh có thật, mỗi tờ tiền là một bộ trang phục truyền thống, mỗi tiết mục ở Âm sắc: Ấm là một loại hình nghệ thuật dân gian.',en:'Every board square is a real place, every banknote a traditional costume, every act at Âm sắc: Ấm a folk art form.',ko:'보드의 모든 칸은 실제 장소이고, 지폐마다 전통 의상이, Âm sắc: Ấm의 무대마다 민속 예술이 있습니다.'}},
  {h:{vi:'Thử với người thật',en:'Test with real people',ko:'실제 사람과 테스트'},
   p:{vi:'Sổ tay Ikigai được 203 học sinh dùng thử và chấm điểm trước khi hoàn thiện; Vietland được chơi thử cùng du khách nước ngoài.',en:'203 students tried and rated the Ikigai notebook before it was finished; Vietland was playtested with international visitors.',ko:'이키가이 노트는 완성 전 학생 203명이 평가했고, Vietland는 외국인 관광객과 플레이테스트를 거쳤습니다.'}},
  {h:{vi:'Ghi công đầy đủ',en:'Credit everyone',ko:'모두에게 공을'},
   p:{vi:'Mỗi dự án đều ghi rõ đồng đội và người hướng dẫn.',en:'Every project names its teammates and mentors.',ko:'모든 프로젝트에 팀원과 지도 교사를 밝힙니다.'}},
  {h:{vi:'Tôn trọng người học',en:'Respect the learner',ko:'배우는 사람을 존중'},
   p:{vi:'Mỗi người có con đường riêng. Việc của mình là đưa công cụ để họ tự tìm, không chọn hộ họ.',en:'Everyone has their own path. My job is to hand them tools to find it, not choose for them.',ko:'사람마다 자기 길이 있습니다. 대신 고르지 않고 스스로 찾을 도구를 건넵니다.'}},
  {h:{vi:'Đúng hạn, rõ việc',en:'On time, clear roles',ko:'기한 준수, 명확한 역할'},
   p:{vi:'Kế hoạch có mốc, mỗi người biết phần việc của mình, kết thúc bằng một bản tổng kết.',en:'Plans have milestones, everyone knows their part, and every project ends with a report.',ko:'계획에는 마일스톤이 있고, 각자 맡은 일을 알며, 마지막엔 결과 보고서를 씁니다.'}},
  {h:{vi:'Mở ra thế giới',en:'Open to the world',ko:'세계로 열기'},
   p:{vi:'Bộ cờ có bản tiếng Anh; CLB đón bạn bè Nhật Bản bằng chính trò chơi dân gian Việt.',en:'The board game has an English edition; the club welcomed Japanese students with Vietnamese folk games.',ko:'보드게임은 영어판이 있고, 동아리는 베트남 민속놀이로 일본 학생들을 맞이했습니다.'}}
];

const SKILLS = [
  {h:{vi:'Dẫn dắt',en:'Leadership',ko:'리더십'},c:{vi:['Quản lý nhóm','Business Model Canvas','Pitching','Điều hành sự kiện','Gây quỹ'],en:['Team management','Business Model Canvas','Pitching','Event operations','Fundraising'],ko:['팀 관리','비즈니스 모델 캔버스','피칭','행사 운영','모금']}},
  {h:{vi:'Nội dung',en:'Content',ko:'콘텐츠'},c:{vi:['Viết nội dung','Kế hoạch truyền thông','Kịch bản sự kiện','Fanpage CLB'],en:['Copywriting','Comms planning','Event scripts','Club fanpage'],ko:['카피라이팅','홍보 기획','행사 대본','동아리 페이지']}},
  {h:{vi:'Nghiên cứu',en:'Research',ko:'연구'},c:{vi:['Thiết kế khảo sát','Phân tích dữ liệu','Báo cáo khoa học'],en:['Survey design','Data analysis','Scientific writing'],ko:['설문 설계','데이터 분석','연구 보고서']}},
  {h:{vi:'Sáng tạo',en:'Creative',ko:'창작'},c:{vi:['Hội họa','Minh họa','Thiết kế boardgame','Đạo diễn'],en:['Painting','Illustration','Board-game design','Directing'],ko:['회화','일러스트','보드게임 디자인','연출']}},
  {h:{vi:'Ngôn ngữ',en:'Languages',ko:'언어'},c:{vi:['Tiếng Việt','Tiếng Anh','Tiếng Hàn (đang học)'],en:['Vietnamese','English','Korean (learning)'],ko:['베트남어','영어','한국어 (학습 중)']}}
];

/* ---------- Documents ---------- */
const DOCS = {
  vietland:[
    {t:{vi:'Đề án khởi nghiệp Vietland Adventure',en:'Vietland Adventure startup proposal',ko:'Vietland Adventure 창업 제안서'},href:'docs/vietland-adventure-de-an-khoi-nghiep.pdf',kind:'PDF',size:'0.4 MB',orig:true},
    {t:{vi:'Video giới thiệu (bản nén cho web)',en:'Intro video (web-compressed)',ko:'소개 영상 (웹 압축본)'},href:'img/vietland.mp4',kind:'MP4',size:'11.6 MB'},
    {t:{vi:'Website Vietland Adventure',en:'Vietland Adventure website',ko:'Vietland Adventure 웹사이트'},href:VL_WEB,kind:'LINK',size:'vercel.app'},
    {t:{vi:'Fanpage Vietland Adventure',en:'Vietland Adventure on Facebook',ko:'Vietland Adventure 페이스북'},href:VL_FB,kind:'LINK',size:'facebook.com'}],
  club:[
    {t:{vi:'Fanpage CLB Văn hoá Việt Nam',en:'Vietnamese Culture Club fanpage',ko:'베트남 문화 동아리 페이지'},href:CLUB_URL,kind:'LINK',size:'facebook.com'},
    {t:{vi:'Bài giới thiệu Trưởng ban Truyền thông Viết',en:'Head of Content introduction post',ko:'콘텐츠 팀장 소개 게시물'},href:CONFESS_URL,kind:'LINK',size:'facebook.com'}],
  charity:[
    {t:{vi:'Kế hoạch hoạt động thiện nguyện lớp 11CV',en:'Class 11CV charity activity plan',ko:'11CV 학급 봉사 활동 계획서'},href:'docs/ke-hoach-thien-nguyen-11CV.pdf',kind:'PDF',size:'0.1 MB',orig:true}],
  ikigai:[
    {t:{vi:'Báo cáo nghiên cứu khoa học Ikigai',en:'Ikigai research report',ko:'이키가이 연구 보고서'},href:'docs/ikigai-bao-cao-nckh.pdf',kind:'PDF',size:'1.1 MB',orig:true},
    {t:{vi:'Sổ tay “Ikigai – Hành trình khám phá bản thân”',en:'Notebook “Ikigai – A Journey of Self-Discovery”',ko:'노트 “이키가이 – 나를 찾는 여정”'},pending:true,kind:'PDF',size:'155 MB'}],
  film:[
    {t:{vi:'Phim Mênh Mang Nỗi Người trên YouTube',en:'Mênh Mang Nỗi Người on YouTube',ko:'Mênh Mang Nỗi Người 유튜브'},href:FILM_YT,kind:'LINK',size:'youtu.be'},
    {t:{vi:'Poster phim (2 mẫu)',en:'Film posters (2 designs)',ko:'영화 포스터 (2종)'},href:'docs/menh-mang-noi-nguoi-poster.pdf',kind:'PDF',size:'11.7 MB',orig:true}],
  vietquest:[], lightweave:[
    {t:{vi:'Website Lớp vẽ Ánh Sáng',en:'Lightweave website',ko:'Lightweave 웹사이트'},href:LW_WEB,kind:'LINK',size:'vercel.app'},
    {t:{vi:'Drive tổng hợp tranh dự thi',en:'Drive folder of competition paintings',ko:'대회 출품작 드라이브'},href:'https://drive.google.com/drive/folders/1U_UhqmMJ3MKA1MhOOoc8Y28W-R5JcOyr?usp=sharing',kind:'LINK',size:'drive.google.com'}]
};
function docsList(id){
  const d = DOCS[id] || []; if (!d.length) return '';
  return `<ul class="doc-list">${d.map(x => {
    const k = x.kind==='LINK' ? 'link' : x.pending ? 'wait' : '';
    const name = esc(L(x.t)) + (x.orig ? ` <span class="mono" style="color:var(--son)">· ${t('docs.original')}</span>` : '');
    if (x.pending) return `<li><span class="pending"><span class="kind wait">${x.kind}</span><span class="dname">${name}</span><span class="dsize">${t('docs.pending')}</span></span></li>`;
    return `<li><a href="${x.href}" target="_blank" rel="noopener"><span class="kind ${k}">${x.kind==='LINK'?'↗':x.kind}</span><span class="dname">${name}</span><span class="dsize">${x.size}</span></a></li>`;
  }).join('')}</ul>`;
}

const L = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[lang] ?? o.vi) : o;
const li = arr => arr.map(x=>`<li>${x}</li>`).join('');
const docsBlock = id => (DOCS[id]||[]).length ? `<div class="m-docs"><h4>${t('ui.docs')}</h4>${docsList(id)}</div>` : '';
const head = (eyebrow, title) => `<p class="label mono"><svg class="lotus" viewBox="0 0 24 24"><use href="#lotus"/></svg><span>${eyebrow}</span></p><h2 id="mTitle">${title}</h2>`;

const PROJECTS = [
  { id:'vietland', cat:'startup', img:'img/board.jpg', title:'Vietland Adventure',
    meta:{vi:'Startup · 12/2024 · Trưởng nhóm',en:'Startup · Dec 2024 · Team lead',ko:'스타트업 · 2024.12 · 팀장'},
    desc:{vi:'Bộ cờ tỷ phú lấy bản đồ Việt Nam làm bàn cờ: mỗi ô đất là một địa danh, di sản; tiền in hình trang phục truyền thống.',en:'A property-trading board game on a map of Vietnam: each square a real landmark, each banknote a traditional costume.',ko:'베트남 지도를 보드로 삼은 게임. 모든 칸은 실제 명소, 지폐에는 전통 의상이 그려져 있습니다.'},
    links:[{label:'Website ↗',href:VL_WEB}],
    detail:() => `
      ${head(L({vi:'Kinh doanh tạo tác động xã hội · cấp Thành phố 2024–2025',en:'Social-impact business · City level 2024–2025',ko:'소셜 임팩트 비즈니스 · 시 단위 2024–2025'}),'Vietland Adventure')}
      <p class="lede">${L({vi:'Dự án dự thi “Học sinh, sinh viên với ý tưởng khởi nghiệp” cấp Thành phố năm học 2024–2025. Bộ cờ giữ lối chơi quen thuộc của cờ tỷ phú nhưng thay các ô đất bằng địa danh, di sản của 63 tỉnh thành, kèm thẻ cơ hội, thử thách mang thông tin lịch sử – văn hóa.',
        en:'Entered in the city-level “Students with Startup Ideas” competition, 2024–2025. It keeps familiar property-trading play but replaces the squares with landmarks and heritage sites from 63 provinces, with chance and challenge cards carrying history and culture.',
        ko:'2024–2025 호찌민시 “학생 창업 아이디어” 대회 출품작입니다. 익숙한 방식은 그대로 두고 칸을 63개 성·시의 명소와 문화유산으로 바꾸었으며, 찬스·도전 카드에 역사와 문화 정보를 담았습니다.'})}</p>
      <div class="m-gallery">
        <video class="wide" controls preload="none" poster="img/video-poster.jpg" id="vlVideo"><source src="img/vietland.mp4" type="video/mp4"></video>
        <img src="img/playtest.jpg" alt="Playtest" loading="lazy"><img src="img/money.jpg" alt="Banknotes" loading="lazy"><img src="img/cards.jpg" alt="Cards" loading="lazy">
      </div>
      <div class="stats"><div class="stat"><b>63</b><span>${L({vi:'tỉnh thành',en:'provinces',ko:'성·시'})}</span></div><div class="stat"><b>5</b><span>${L({vi:'thành viên',en:'members',ko:'팀원'})}</span></div><div class="stat"><b>2</b><span>${L({vi:'ngôn ngữ',en:'languages',ko:'언어'})}</span></div></div>
      <div class="m-cols">
        <div><h4>${L({vi:'Vai trò của mình',en:'My role',ko:'나의 역할'})}</h4><ul>${li(L({vi:['Trưởng nhóm, định hướng sản phẩm','Điều phối thiết kế và nội dung','Thuyết trình, mô hình kinh doanh'],en:['Team lead, product direction','Coordinated design and content','Pitching and business model'],ko:['팀장, 제품 방향 설정','디자인·콘텐츠 총괄','발표 및 비즈니스 모델']}))}</ul></div>
        <div><h4>${L({vi:'Khách hàng',en:'Audience',ko:'타깃'})}</h4><ul>${li(L({vi:['Học sinh, sinh viên','Gia đình','Du khách nước ngoài'],en:['Students','Families','International visitors'],ko:['학생','가족','외국인 관광객']}))}</ul></div>
        <div><h4>${L({vi:'Nhóm',en:'Team',ko:'팀'})}</h4><ul><li>Nguyễn Hoàng Thảo Vy (lead)</li><li>Võ Song Linh Nga</li><li>Lê Quỳnh Anh</li><li>Lâm Đặng Quỳnh Anh</li><li>Phan Duy Toàn</li></ul></div>
      </div>
      ${docsBlock('vietland')}`},
  { id:'club', cat:'community', img:'img/club-japan.jpg',
    title:{vi:'CLB Văn hoá Việt Nam',en:'Vietnamese Culture Club',ko:'베트남 문화 동아리'},
    meta:{vi:'CLB · 2024–2025 · Head of Content',en:'Club · 2024–2025 · Head of Content',ko:'동아리 · 2024–2025 · 콘텐츠 팀장'},
    desc:{vi:'Trưởng ban Truyền thông Viết. Đón đoàn học sinh Nhật Bản hai năm liền và cùng Ban Chủ nhiệm tổ chức đêm nhạc truyền thống Âm sắc: Ấm II cho 200 khách.',en:'Head of written communications. Welcomed Japanese student delegations two years running and co-ran the 200-guest traditional music night Âm sắc: Ấm II.',ko:'글 미디어 팀장. 2년 연속 일본 학생 방문단을 맞이했고, 200명 규모의 전통 음악 행사 Âm sắc: Ấm II를 함께 개최했습니다.'},
    links:[{label:'Fanpage ↗',href:CLUB_URL}],
    detail:() => `
      ${head(L({vi:'THPT Chuyên Trần Đại Nghĩa · Nhiệm kỳ 2024–2025',en:'Tran Dai Nghia High School · 2024–2025 term',ko:'쩐다이응이아 영재고 · 2024–2025 임기'}),L({vi:'CLB Văn hoá Việt Nam',en:'Vietnamese Culture Club',ko:'베트남 문화 동아리'}))}
      <p class="lede">${L({vi:'Mình là Head of Content (Trưởng ban Truyền thông Viết) của CLB nhiệm kỳ 2024–2025, phụ trách nội dung chữ cho fanpage và các sự kiện. Hai năm liền, CLB đón đoàn học sinh Nhật Bản và giới thiệu văn hoá Việt qua trang phục, trò chơi dân gian và âm nhạc.',
        en:'I was Head of Content (head of written communications) for 2024–2025, responsible for the written content of the club fanpage and events. Two years running, the club hosted Japanese student delegations and introduced Vietnamese culture through costume, folk games and music.',
        ko:'2024–2025 임기 동안 콘텐츠 팀장(글 미디어 팀장)으로 동아리 페이지와 행사의 글 콘텐츠를 맡았습니다. 2년 연속 일본 학생 방문단을 맞이해 의상, 민속놀이, 음악으로 베트남 문화를 소개했습니다.'})}</p>
      <div class="stats"><div class="stat"><b>200</b><span>${L({vi:'khách tại Âm sắc: Ấm II',en:'guests at Âm sắc: Ấm II',ko:'Âm sắc: Ấm II 참가자'})}</span></div><div class="stat"><b>2</b><span>${L({vi:'năm đón đoàn Nhật Bản',en:'years hosting Japanese students',ko:'년 연속 일본 방문단'})}</span></div></div>
      <div class="m-cols">
        <div><h4>2024 · ${L({vi:'Đoàn Nhật Bản',en:'Japanese delegation',ko:'일본 방문단'})}</h4><ul><li>${L({vi:'Người mẫu trình diễn áo dài truyền thống',en:'Modelled the traditional áo dài in the costume show',ko:'전통 아오자이 패션쇼 모델'})}</li></ul></div>
        <div><h4>2025 · ${L({vi:'Đoàn Nhật Bản',en:'Japanese delegation',ko:'일본 방문단'})}</h4><ul>${li(L({vi:['Cùng Ban Chủ nhiệm điều hành buổi đón tiếp','Dựng gian hàng trò chơi nhảy sạp'],en:['Ran the visit with the club board','Set up a nhảy sạp (bamboo dance) booth'],ko:['운영진과 함께 방문 행사 운영','대나무 춤(nhảy sạp) 부스 운영']}))}</ul></div>
        <div><h4>Âm sắc: Ấm II</h4><ul>${li(L({vi:['Sự kiện âm nhạc truyền thống 200 người','Vovinam, hò đối đáp, kịch, nhạc cụ dân tộc, lô tô','Gian hàng Việt phục, thư pháp, quà lưu niệm'],en:['Traditional music event for 200 people','Vovinam, hò call-and-response, drama, folk instruments, lô tô','Booths: Việt phục, calligraphy, souvenirs'],ko:['200명 규모 전통 음악 행사','보비남, 호 민요, 연극, 전통 악기, 로또 공연','전통 의상·서예·기념품 부스']}))}</ul></div>
      </div>
      <div class="m-gallery">
        <figure class="wide"><img src="img/amsac-thanks.jpg" alt="" loading="lazy"><figcaption class="mono">Âm sắc: Ấm II</figcaption></figure>
        <figure><img src="img/club-bcn.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Ban tổ chức',en:'Organising team',ko:'운영진'})}</figcaption></figure>
        <figure><img src="img/amsac-group.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Khách mời & nghệ sĩ',en:'Guests & performers',ko:'게스트·출연진'})}</figcaption></figure>
        <figure><img src="img/club-japan.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Cùng học sinh Nhật Bản',en:'With Japanese students',ko:'일본 학생들과'})}</figcaption></figure>
        <figure><img src="img/club-games.jpg" alt="" loading="lazy"><figcaption class="mono">Vietnam traditional games</figcaption></figure>
        <figure><img src="img/club-games2.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Đội gian hàng trò chơi',en:'Games booth team',ko:'놀이 부스 팀'})}</figcaption></figure>
        <figure><img src="img/club-selfie.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Giao lưu',en:'Exchange day',ko:'교류의 날'})}</figcaption></figure>
      </div>
      <p class="note">${L({vi:'Đồng hành cùng Âm sắc: Ấm II: American Study, Arrowster, EDU Event Sponsor.',en:'Âm sắc: Ấm II partners: American Study, Arrowster, EDU Event Sponsor.',ko:'Âm sắc: Ấm II 후원: American Study, Arrowster, EDU Event Sponsor.'})}</p>
      ${docsBlock('club')}`},
  { id:'charity', cat:'community', img:'img/charity-1.jpg',
    title:{vi:'Xuân ấm cho ông bà',en:'A Warm Spring for the Elderly',ko:'어르신께 따뜻한 봄을'},
    meta:{vi:'Thiện nguyện · 03/2025 · Bí thư lớp 11CV',en:'Charity · Mar 2025 · Class Youth Union secretary',ko:'봉사 · 2025.03 · 11CV 학급 청년단 서기'},
    desc:{vi:'Công trình thanh niên của lớp 11CV: quyên góp hơn 11 triệu đồng và nhu yếu phẩm cho Nhà hưu dưỡng Dòng Nữ tử Bác ái Thánh Vinh Sơn.',en:'Class 11CV\'s youth project: over 11 million VND plus essentials for the St. Vincent de Paul Sisters\' retirement home.',ko:'11CV 학급 청년 공익 프로젝트. 성 빈첸시오 자비 수녀회 요양원에 1,100만 동 이상과 생필품을 기부했습니다.'},
    detail:() => `
      ${head(L({vi:'Công trình thanh niên · Lớp 11CV · 2024–2025',en:'Youth project · Class 11CV · 2024–2025',ko:'청년 공익 프로젝트 · 11CV · 2024–2025'}),L({vi:'Xuân ấm cho ông bà',en:'A Warm Spring for the Elderly',ko:'어르신께 따뜻한 봄을'}))}
      <p class="lede">${L({vi:'Là Bí thư lớp 11CV, mình lên kế hoạch và dẫn dắt hoạt động thiện nguyện của lớp. Học sinh và phụ huynh quyên góp từ 17 đến 28/2/2025, được hơn 11 triệu đồng cùng sữa, cà phê và nhu yếu phẩm. Sáng Chủ nhật 2/3/2025, 18 bạn trong lớp đến Nhà hưu dưỡng Dòng Nữ tử Bác ái Thánh Vinh Sơn (Bình Thạnh) trao quà và trò chuyện cùng các ông bà.',
        en:'As Youth Union secretary of class 11CV, I planned and led our class charity drive. Students and parents donated from 17 to 28 Feb 2025, raising over 11 million VND with milk, coffee and essentials. On Sunday 2 March 2025, 18 classmates visited the St. Vincent de Paul Sisters\' retirement home in Binh Thanh to deliver the gifts and spend time with the residents.',
        ko:'11CV 학급 청년단 서기로서 학급 봉사 활동을 기획하고 이끌었습니다. 2025년 2월 17–28일 학생과 학부모가 1,100만 동 이상과 우유, 커피, 생필품을 모았고, 3월 2일 학생 18명이 빈탄 성 빈첸시오 자비 수녀회 요양원을 찾아 선물을 전하고 어르신들과 이야기를 나눴습니다.'})}</p>
      <div class="stats"><div class="stat"><b>11M+</b><span>${L({vi:'đồng quyên góp',en:'VND raised',ko:'동 모금'})}</span></div><div class="stat"><b>18</b><span>${L({vi:'học sinh tham gia',en:'students',ko:'참여 학생'})}</span></div><div class="stat"><b>12</b><span>${L({vi:'ngày vận động',en:'days of fundraising',ko:'일간 모금'})}</span></div></div>
      <div class="m-cols">
        <div><h4>${L({vi:'Vai trò của mình',en:'My role',ko:'나의 역할'})}</h4><ul>${li(L({vi:['Lập kế hoạch, trình Ban giám hiệu','Liên hệ nhà hưu dưỡng','Xây dựng và dẫn chương trình gặp gỡ','Tổng kết, báo cáo Đoàn trường'],en:['Wrote the plan for school approval','Arranged the visit','Designed and hosted the programme','Final report to the school Youth Union'],ko:['계획 수립 및 학교 승인','요양원 섭외','방문 프로그램 진행','결과 보고 및 청년단 보고']}))}</ul></div>
        <div><h4>${L({vi:'Quà trao tặng',en:'Donations',ko:'기부 물품'})}</h4><ul>${li(L({vi:['Tiền mặt từ học sinh và phụ huynh','Sữa, sữa canxi cho người lớn tuổi','Cà phê và nhu yếu phẩm'],en:['Cash from students and parents','Milk and calcium milk for seniors','Coffee and essentials'],ko:['학생·학부모 현금','우유·고령자용 칼슘 우유','커피·생필품']}))}</ul></div>
      </div>
      <div class="m-gallery"><figure class="wide"><img src="img/charity-1.jpg" alt="" loading="lazy"><figcaption class="mono">02.03.2025</figcaption></figure><figure class="wide"><img src="img/charity-2.jpg" alt="" loading="lazy"></figure></div>
      ${docsBlock('charity')}`},
  { id:'ikigai', cat:'research', img:'img/ikigai-01.jpg', imgPos:'center 18%',
    title:{vi:'Ikigai cho học sinh THPT',en:'Ikigai for high-schoolers',ko:'고등학생을 위한 이키가이'},
    meta:{vi:'Nghiên cứu · 2024–2025 · Đồng tác giả',en:'Research · 2024–2025 · Co-author',ko:'연구 · 2024–2025 · 공동 저자'},
    desc:{vi:'Kết hợp Thần số học Pythagoras, Cửa sổ Johari và Vision Board thành cuốn sổ tay giúp học sinh tự tìm Ikigai và định hướng nghề nghiệp.',en:'Pythagorean numerology, the Johari Window and vision boards in one notebook that helps students find their Ikigai and career path.',ko:'피타고라스 수비학, 조하리의 창, 비전 보드를 엮어 학생들이 이키가이와 진로를 찾도록 돕는 노트.'},
    detail:() => `
      ${head(L({vi:'Học sinh NCKH 2024–2025 · Lĩnh vực 03 · Bảng C',en:'Student Science Research 2024–2025 · Field 03',ko:'학생 과학연구대회 2024–2025 · 분야 03'}),L({vi:'Hành trình tìm Ikigai',en:'Finding Ikigai',ko:'이키가이를 찾는 여정'}))}
      <p class="lede">${L({vi:'Khảo sát cho thấy chỉ 34,7% học sinh Quận 1 đã xác định được hướng nghề nghiệp. Nhóm làm sổ tay “Ikigai – Hành trình khám phá bản thân” để các bạn tự khám phá đam mê, năng lực và giá trị của mình.',en:'Only 34.7% of District 1 students we surveyed had a career direction. We made the notebook “Ikigai – A Journey of Self-Discovery” so students can explore their passions, strengths and values themselves.',ko:'설문 결과 1군 학생 중 진로를 정한 비율은 34.7%였습니다. 학생들이 스스로 열정, 강점, 가치를 탐색하도록 노트 “이키가이 – 나를 찾는 여정”을 만들었습니다.'})}</p>
      <div class="m-gallery"><img class="poster" src="img/ikigai-01.jpg" alt="Ikigai notebook" loading="lazy" style="max-width:280px"></div>
      <div class="stats"><div class="stat"><b>406</b><span>${L({vi:'học sinh khảo sát',en:'students surveyed',ko:'설문 학생'})}</span></div><div class="stat"><b>203</b><span>${L({vi:'học sinh dùng thử',en:'students tested it',ko:'시범 사용'})}</span></div><div class="stat"><b>4.67</b><span>${L({vi:'/5 điểm nội dung',en:'/5 content score',ko:'/5 내용 평점'})}</span></div></div>
      <div class="m-cols">
        <div><h4>${L({vi:'Ba công cụ',en:'Three tools',ko:'세 가지 도구'})}</h4><ul>${li(L({vi:['Thần số học Pythagoras','Cửa sổ Johari','Vision Board'],en:['Pythagorean numerology','Johari Window','Vision board'],ko:['피타고라스 수비학','조하리의 창','비전 보드']}))}</ul></div>
        <div><h4>${L({vi:'Thực hiện',en:'Team',ko:'연구진'})}</h4><ul><li>Nguyễn Hoàng Thảo Vy (11CV)</li><li>Hồ Nhất Nam (11CA3)</li><li>${L({vi:'Hướng dẫn: thầy Nguyễn Lê Minh Nguyên',en:'Mentor: Mr. Nguyễn Lê Minh Nguyên',ko:'지도: 응우옌 레 민 응우옌 선생님'})}</li></ul></div>
      </div>
      ${docsBlock('ikigai')}`},
  { id:'film', cat:'film', img:'img/poster-1.jpg', imgPos:'center 28%', title:'Mênh Mang Nỗi Người',
    meta:{vi:'Phim · Dự án Kết nối sáng tạo · Đạo diễn',en:'Film · “Creative Connections” · Director',ko:'영화 · “창의적 연결” · 감독'},
    desc:{vi:'Chuyển thể từ “Cánh đồng bất tận” của Nguyễn Ngọc Tư: nỗi cô đơn và khao khát được thương giữa những cánh đồng vịt miền Tây.',en:'Adapted from Nguyễn Ngọc Tư\'s “Endless Field”: loneliness and the longing to be loved among the duck fields of the Mekong Delta.',ko:'응우옌 응옥 뜨의 「끝없는 들판」 각색. 메콩 델타 오리 들판의 외로움과 사랑받고 싶은 마음.'},
    links:[{label:'▶ YouTube ↗',href:FILM_YT}],
    detail:() => `
      ${head(L({vi:'Dự án “Kết nối sáng tạo” · Đạo diễn Thảo Vy',en:'“Creative Connections” · Directed by Thảo Vy',ko:'“창의적 연결” · 타오 비 감독'}),'Mênh Mang Nỗi Người')}
      <p class="lede">${L({vi:'Chuyển thể từ “Cánh đồng bất tận” của nhà văn Nguyễn Ngọc Tư, quay ở vùng sông nước với đàn vịt, bờ kênh và ánh chiều.',en:'Adapted from Nguyễn Ngọc Tư\'s “Endless Field”, shot on the waterways with ducks, canal banks and evening light.',ko:'응우옌 응옥 뜨 작가의 「끝없는 들판」을 각색해 오리 떼, 운하 둑, 저녁 햇살이 있는 물가에서 촬영했습니다.'})}</p>
      <div><a class="btn fill" href="${FILM_YT}" target="_blank" rel="noopener">${t('ui.watch')} ↗</a></div>
      <div class="m-gallery"><img class="poster" src="img/poster-1.jpg" alt="Poster 1" loading="lazy"><img class="poster" src="img/poster-2.jpg" alt="Poster 2" loading="lazy"></div>
      ${docsBlock('film')}`},
  { id:'tuoihong', cat:'art', img:'img/th-stage.jpg',
    title:{vi:'Tuổi Hồng Minh Khai',en:'Tuổi Hồng Minh Khai',ko:'뚜오이 홍 민카이'},
    meta:{vi:'Sự kiện âm nhạc · Tuổi Hồng 29 · Makeup Artist',en:'Music event · Tuổi Hồng 29 · Makeup artist',ko:'음악 행사 · 뚜오이 홍 29 · 메이크업 아티스트'},
    desc:{vi:'Trang điểm cho nghệ sĩ và tiết mục tại Tuổi Hồng, sự kiện ca nhạc học sinh THPT quy mô lớn ở TP.HCM do trường THPT Nguyễn Thị Minh Khai tổ chức.',
      en:'Makeup for performers at Tuổi Hồng, a large high-school music event in Ho Chi Minh City organised by Nguyen Thi Minh Khai High School.',
      ko:'응우옌 티 민 카이 고등학교가 주최하는 호찌민시 대규모 고등학생 음악 행사 뚜오이 홍에서 출연진 메이크업을 맡았습니다.'},
    detail:() => `
      ${head(L({vi:'Makeup Artist · Tuổi Hồng 29 · THPT Nguyễn Thị Minh Khai',en:'Makeup artist · Tuổi Hồng 29 · Nguyen Thi Minh Khai High School',ko:'메이크업 아티스트 · 뚜오이 홍 29 · 응우옌 티 민 카이 고등학교'}),'Tuổi Hồng Minh Khai')}
      <p class="lede">${L({vi:'Tuổi Hồng là sự kiện ca nhạc do học sinh THPT thực hiện, có quy mô lớn ở TP. Hồ Chí Minh, do trường THPT Nguyễn Thị Minh Khai tổ chức. Ở mùa Tuổi Hồng 29, mình tham gia ekip Makeup Artist, trang điểm cho các bạn biểu diễn ở hậu trường trước giờ lên sân khấu.',
        en:'Tuổi Hồng is a large student-run music event in Ho Chi Minh City, organised by Nguyen Thi Minh Khai High School. For Tuổi Hồng 29, I was part of the makeup artist team, doing performers\' makeup backstage before they went on.',
        ko:'뚜오이 홍은 응우옌 티 민 카이 고등학교가 주최하는 호찌민시의 대규모 고등학생 음악 행사입니다. 뚜오이 홍 29에서 메이크업 아티스트 팀으로 참여해 무대에 오르기 전 백스테이지에서 출연진의 메이크업을 맡았습니다.'})}</p>
      <div class="m-cols">
        <div><h4>${L({vi:'Vai trò của mình',en:'My role',ko:'나의 역할'})}</h4><ul>${li(L({vi:['Makeup Artist trong ekip hậu trường','Trang điểm cho các bạn biểu diễn','Phối hợp lịch lên sân khấu cùng ban tổ chức'],en:['Makeup artist on the backstage crew','Makeup for performers','Worked to the stage schedule with the organisers'],ko:['백스테이지 메이크업 아티스트','출연진 메이크업','운영진과 무대 일정 조율']}))}</ul></div>
        <div><h4>${L({vi:'Sự kiện',en:'Event',ko:'행사'})}</h4><ul>${li(L({vi:['Đơn vị tổ chức: THPT Nguyễn Thị Minh Khai','Sự kiện ca nhạc học sinh THPT quy mô lớn tại TP.HCM'],en:['Organiser: Nguyen Thi Minh Khai High School','A large high-school music event in HCMC'],ko:['주최: 응우옌 티 민 카이 고등학교','호찌민시 대규모 고등학생 음악 행사']}))}</ul></div>
      </div>
      <div class="m-gallery">
        <figure class="wide"><img src="img/th-stage.jpg" alt="Tuổi Hồng 29" loading="lazy"><figcaption class="mono">${L({vi:'Toàn thể ekip Tuổi Hồng 29 trên sân khấu',en:'The Tuổi Hồng 29 crew on stage',ko:'무대 위 뚜오이 홍 29 스태프'})}</figcaption></figure>
        <figure><img src="img/th-team.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Ekip Makeup Artist',en:'Makeup artist team',ko:'메이크업 팀'})}</figcaption></figure>
        <figure><img src="img/th-trio.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Ở hậu trường',en:'Backstage',ko:'백스테이지'})}</figcaption></figure>
        <figure><img src="img/th-badge.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><figcaption class="mono">${L({vi:'Thẻ Makeup Artist',en:'Makeup artist pass',ko:'메이크업 아티스트 패스'})}</figcaption></figure>
        <figure><img src="img/th-selfie.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><figcaption class="mono">${L({vi:'Đêm diễn',en:'Show night',ko:'공연 당일'})}</figcaption></figure>
      </div>`},
  { id:'lightweave', cat:'art', img:'img/lightweave-banner.jpg', links:[{label:'Website ↗',href:LW_WEB}],
    title:{vi:'Lớp vẽ Ánh Sáng',en:'Lightweave',ko:'Lightweave 미술 수업'},
    meta:{vi:'Giáo dục nghệ thuật · Sáng lập & giảng dạy',en:'Art education · Founder & teacher',ko:'미술 교육 · 설립자 겸 강사'},
    desc:{vi:'Lớp vẽ cho trẻ em 6–15 tuổi ở TP.HCM, mang kinh nghiệm từ các giải mỹ thuật cấp thành phố vào từng buổi học.',en:'Painting classes for kids aged 6–15 in Ho Chi Minh City, built on experience from city-level art awards.',ko:'호찌민시 6–15세 어린이 미술 수업. 시 단위 미술대회 수상 경험을 수업에 녹였습니다.'},
    detail:() => `
      ${head('Lightweave · '+L({vi:'TP. Hồ Chí Minh',en:'Ho Chi Minh City',ko:'호찌민시'}),L({vi:'Lớp vẽ Ánh Sáng',en:'Lightweave',ko:'Lightweave'}))}
      <p class="lede">${L({vi:'Lớp vẽ cho các bạn nhỏ 6–15 tuổi, học buổi tối. Mục tiêu là để các bạn vẽ bằng con mắt của chính mình, không chép mẫu.',en:'Evening painting classes for children aged 6–15. The goal is to draw with their own eyes, not copy templates.',ko:'6–15세 어린이 저녁 미술 수업. 본보기를 베끼지 않고 자신의 눈으로 그리는 것이 목표입니다.'})}</p>
      <div class="m-gallery"><figure class="wide"><img src="img/lightweave-banner.jpg" alt="Lớp vẽ Ánh Sáng" loading="lazy"></figure></div>
      <div class="ext-links"><a class="btn fill" href="${LW_WEB}" target="_blank" rel="noopener">Website ↗</a><a class="btn" href="#business">Own Business →</a></div>
      ${docsBlock('lightweave')}`}
];

const TIMELINE = [
  { now:true, when:'2026 – 2027', h:{vi:'Chuẩn bị du học Hàn Quốc',en:'Preparing to study in Korea',ko:'한국 유학 준비'},
    org:{vi:'Hồ sơ đại học & học bổng',en:'University & scholarship applications',ko:'대학 및 장학금 지원'},
    p:{vi:'Dành toàn thời gian cho ngoại ngữ và hồ sơ ứng tuyển đại học tại Hàn Quốc.',en:'Full-time focus on languages and applications to Korean universities.',ko:'어학과 한국 대학 지원 준비에 전념하고 있습니다.'}},
  { now:true, when:{vi:'Hiện tại',en:'Now',ko:'현재'}, h:{vi:'Sáng lập & giáo viên — Lớp vẽ Ánh Sáng',en:'Founder & teacher — Lightweave',ko:'Lightweave 설립자 겸 강사'},
    org:{vi:'TP. Hồ Chí Minh',en:'Ho Chi Minh City',ko:'호찌민시'}, p:{vi:'Dạy vẽ cho trẻ em 6–15 tuổi vào buổi tối.',en:'Evening painting classes for kids aged 6–15.',ko:'6–15세 어린이 저녁 미술 수업.'}},
  { when:'2024 – 2025', h:{vi:'Head of Content — CLB Văn hoá Việt Nam',en:'Head of Content — Vietnamese Culture Club',ko:'베트남 문화 동아리 콘텐츠 팀장'},
    org:{vi:'Trưởng ban Truyền thông Viết · THPT Chuyên Trần Đại Nghĩa',en:'Head of written communications · Tran Dai Nghia High School',ko:'글 미디어 팀장 · 쩐다이응이아 영재고'},
    list:{vi:['Đón đoàn học sinh Nhật Bản 2024 & 2025','Tổ chức Âm sắc: Ấm II (200 khách)'],en:['Hosted Japanese student delegations, 2024 & 2025','Organised Âm sắc: Ấm II (200 guests)'],ko:['2024·2025 일본 학생 방문단 환영','Âm sắc: Ấm II 개최 (200명)']},
    thumbs:['img/amsac-thanks.jpg','img/club-japan.jpg','img/club-games.jpg'], open:'club'},
  { when:'03 / 2025', h:{vi:'Bí thư lớp 11CV — “Xuân ấm cho ông bà”',en:'Class Youth Union secretary, 11CV — “A Warm Spring for the Elderly”',ko:'11CV 학급 청년단 서기 — “어르신께 따뜻한 봄을”'},
    org:{vi:'Công trình thanh niên · năm học 2024–2025',en:'Youth project · 2024–2025',ko:'청년 공익 프로젝트 · 2024–2025'},
    p:{vi:'Quyên góp hơn 11 triệu đồng cùng nhu yếu phẩm cho Nhà hưu dưỡng Dòng Nữ tử Bác ái Thánh Vinh Sơn; 18 bạn đến thăm ngày 2/3/2025.',en:'Raised over 11 million VND plus essentials for the St. Vincent de Paul Sisters\' retirement home; 18 classmates visited on 2 March 2025.',ko:'요양원을 위해 1,100만 동 이상과 생필품을 모았고, 2025.03.02 학생 18명이 방문했습니다.'},
    thumbs:['img/charity-1.jpg'], open:'charity'},
  { when:'Tuổi Hồng 29', h:{vi:'Makeup Artist — Tuổi Hồng Minh Khai',en:'Makeup artist — Tuổi Hồng Minh Khai',ko:'메이크업 아티스트 — 뚜오이 홍 민카이'},
    org:{vi:'THPT Nguyễn Thị Minh Khai · sự kiện ca nhạc học sinh THPT',en:'Nguyen Thi Minh Khai High School · student music event',ko:'응우옌 티 민 카이 고등학교 · 고등학생 음악 행사'},
    p:{vi:'Trang điểm cho các bạn biểu diễn tại một trong những sự kiện ca nhạc học sinh lớn nhất TP.HCM.',en:'Did performers\' makeup at one of Ho Chi Minh City\'s largest student music events.',ko:'호찌민시 최대 규모의 학생 음악 행사 중 하나에서 출연진 메이크업을 맡았습니다.'},
    thumbs:['img/th-stage.jpg','img/th-team.jpg'], open:'tuoihong'},
  { when:'2024 – 2025', h:{vi:'Đồng tác giả nghiên cứu Ikigai',en:'Co-author, Ikigai research',ko:'이키가이 연구 공동 저자'},
    org:{vi:'Cuộc thi Học sinh nghiên cứu khoa học · Lĩnh vực 03',en:'Student Science Research Competition · Field 03',ko:'학생 과학연구대회 · 분야 03'},
    p:{vi:'Cùng Hồ Nhất Nam, hướng dẫn bởi thầy Nguyễn Lê Minh Nguyên. Khảo sát 406 học sinh Quận 1.',en:'With Hồ Nhất Nam, mentored by Mr. Nguyễn Lê Minh Nguyên. Surveyed 406 District 1 students.',ko:'호 녓 남과 함께, 응우옌 레 민 응우옌 선생님 지도. 1군 학생 406명 설문.'}, open:'ikigai'},
  { when:'12 / 2024', h:{vi:'Trưởng nhóm Vietland Adventure',en:'Team lead, Vietland Adventure',ko:'Vietland Adventure 팀장'},
    org:{vi:'“Học sinh, sinh viên với ý tưởng khởi nghiệp” cấp Thành phố',en:'City-level “Students with Startup Ideas” competition',ko:'호찌민시 “학생 창업 아이디어” 대회'},
    p:{vi:'Dẫn nhóm 5 người từ mô hình kinh doanh, thiết kế, in ấn đến chơi thử cùng du khách nước ngoài.',en:'Led five people from business model to design, printing and playtests with international visitors.',ko:'5인 팀을 이끌고 비즈니스 모델부터 디자인, 인쇄, 외국인 플레이테스트까지 진행.'}, open:'vietland'},
  { when:{vi:'Phim',en:'Film',ko:'영화'}, h:{vi:'Đạo diễn “Mênh Mang Nỗi Người”',en:'Director, “Mênh Mang Nỗi Người”',ko:'「Mênh Mang Nỗi Người」 감독'},
    org:{vi:'Dự án “Kết nối sáng tạo”',en:'“Creative Connections” project',ko:'“창의적 연결” 프로젝트'},
    p:{vi:'Chuyển thể từ “Cánh đồng bất tận” của Nguyễn Ngọc Tư.',en:'Adapted from Nguyễn Ngọc Tư\'s “Endless Field”.',ko:'응우옌 응옥 뜨의 「끝없는 들판」 각색.'}, open:'film'},
  { when:'2023 – 2026', h:{vi:'Lớp Chuyên Văn — THPT Chuyên Trần Đại Nghĩa',en:'Literature-specialised class — Tran Dai Nghia High School',ko:'문학 특성반 — 쩐다이응이아 영재고'},
    org:{vi:'Lớp phó học tập 3 năm liền · Bí thư chi đoàn 11CV (2024–2025)',en:'Vice monitor for academics 3 years running · Youth Union secretary 11CV (2024–2025)',ko:'학습부반장 3년 연속 · 11CV 청년단 서기 (2024–2025)'},
    p:{vi:'Nơi bắt đầu hầu hết các dự án ở trang này, song song là các giải mỹ thuật cấp thành phố.',en:'Where most of these projects began, alongside city-level art prizes.',ko:'이 사이트 프로젝트 대부분이 시작된 곳이며, 시 단위 미술대회 수상도 이 시기에 이루어졌습니다.'}},
  { when:'2021', h:{vi:'Huy chương Vàng Olympic 30/4 môn Ngữ Văn',en:'Gold Medal, April 30 Olympiad — Literature',ko:'4월 30일 올림피아드 국어(문학) 금메달'},
    org:{vi:'Khu vực các tỉnh miền Nam',en:'Southern provinces',ko:'남부 지역'}, p:{vi:'Nền tảng cho lựa chọn lớp Chuyên Văn sau này.',en:'The start of my path into the literature-specialised class.',ko:'이후 문학 특성반을 선택하게 된 출발점입니다.'}}
];

const POSTS = [
  { id:'p4', tag:{vi:'CLB',en:'Club',ko:'동아리'}, read:5,
    title:{vi:'Âm sắc: Ấm II — đưa 200 người về với âm nhạc truyền thống',en:'Âm sắc: Ấm II — bringing 200 people back to traditional music',ko:'Âm sắc: Ấm II — 200명과 함께한 전통 음악의 밤'},
    excerpt:{vi:'Từ Vovinam đến hò đối đáp, từ lô tô đến gian hàng thư pháp: ghi chép của người làm nội dung.',en:'From Vovinam to hò singing, lô tô to calligraphy: notes from the content lead.',ko:'보비남부터 호 민요, 로또 공연과 서예 부스까지. 콘텐츠 팀장의 기록.'},
    body:{vi:'<p>Âm sắc: Ấm II là sự kiện cuối nhiệm kỳ của CLB Văn hoá Việt Nam, khoảng 200 khách. Sân khấu có Vovinam, hò đối đáp, kịch, nhạc cụ dân tộc và lô tô; bên ngoài là gian hàng Việt phục, thư pháp và quà lưu niệm.</p><p>Bài đầy đủ sẽ kể về cách ban nội dung viết kịch bản, truyền thông và phối hợp với Ban Chủ nhiệm.</p>',en:'<p>Âm sắc: Ấm II was the club\'s end-of-term event with about 200 guests: Vovinam, hò singing, drama, folk instruments and lô tô on stage; Việt phục, calligraphy and souvenir booths outside.</p><p>The full post will cover scripting, communications and working with the board.</p>',ko:'<p>Âm sắc: Ấm II는 동아리 임기 말 행사로 약 200명이 참석했습니다. 무대에는 보비남, 호 민요, 연극, 전통 악기, 로또 공연이, 밖에는 전통 의상·서예·기념품 부스가 있었습니다.</p><p>전체 글에서는 대본, 홍보, 운영진과의 협업을 다룰 예정입니다.</p>'}},
  { id:'p5', tag:{vi:'Thiện nguyện',en:'Charity',ko:'봉사'}, read:4,
    title:{vi:'Một buổi sáng ở nhà hưu dưỡng',en:'A morning at the retirement home',ko:'요양원에서의 어느 아침'},
    excerpt:{vi:'12 ngày vận động, hơn 11 triệu đồng và 18 bạn lớp 11CV: điều mình học được khi làm Bí thư lớp.',en:'12 days of fundraising, over 11 million VND and 18 classmates: what I learned as class secretary.',ko:'12일간의 모금, 1,100만 동, 그리고 18명의 친구들. 학급 서기로서 배운 것.'},
    body:{vi:'<p>Từ bản kế hoạch trình Ban giám hiệu đến buổi sáng 2/3/2025, công trình thanh niên của lớp 11CV là lần đầu mình điều phối cả học sinh lẫn phụ huynh.</p><p>Bài đầy đủ sẽ kể về cách chia việc và những câu chuyện của các ông bà.</p>',en:'<p>From the plan submitted to the school to the morning of 2 March 2025, this was my first time coordinating both students and parents.</p><p>The full post will cover how we split the work and the stories the residents shared.</p>',ko:'<p>학교에 제출한 계획서부터 2025년 3월 2일 아침까지, 학생과 학부모를 함께 조율한 첫 경험이었습니다.</p><p>전체 글에서는 역할 분담과 어르신들의 이야기를 담을 예정입니다.</p>'}},
  { id:'p1', tag:{vi:'Vietland',en:'Vietland',ko:'Vietland'}, read:5,
    title:{vi:'Vẽ lại bản đồ Việt Nam thành một bàn cờ',en:'Redrawing the map of Vietnam as a game board',ko:'베트남 지도를 게임 보드로 다시 그리기'},
    excerpt:{vi:'Chọn địa danh nào cho mỗi tỉnh, vì sao tiền in hình trang phục truyền thống, và điều bất ngờ khi chơi thử với du khách.',en:'Picking a landmark per province, why the banknotes show costumes, and surprises from playtests with tourists.',ko:'성마다 명소 고르기, 지폐에 전통 의상을 넣은 이유, 관광객 플레이테스트의 놀라움.'},
    body:{vi:'<p>Câu hỏi khó nhất không phải luật chơi mà là: mỗi ô đất nên kể câu chuyện gì?</p><p>Bộ tiền từ 10.000 đến 500.000 đồng gắn với các bộ trang phục truyền thống, để cầm tiền là thấy văn hóa.</p>',en:'<p>The hardest question wasn\'t the rules but what story each square should tell.</p><p>Banknotes from 10,000 to 500,000 đồng each carry a traditional costume.</p>',ko:'<p>가장 어려운 질문은 규칙이 아니라 각 칸이 어떤 이야기를 해야 하는가였습니다.</p><p>10,000동부터 500,000동까지의 지폐마다 전통 의상이 그려져 있습니다.</p>'}},
  { id:'p2', tag:{vi:'Nghiên cứu',en:'Research',ko:'연구'}, read:6,
    title:{vi:'406 bạn học sinh nói gì về chuyện chọn ngành',en:'What 406 students said about choosing a major',ko:'학생 406명이 말한 전공 선택'},
    excerpt:{vi:'Chỉ 34,7% học sinh đã biết mình muốn làm gì. Ghi chép từ hai đợt khảo sát.',en:'Only 34.7% knew what they wanted to do. Notes from two survey rounds.',ko:'진로를 정한 학생은 34.7%뿐. 두 차례 설문의 기록.'},
    body:{vi:'<p>Đợt khảo sát đầu với 406 học sinh Quận 1: 34,7% đã xác định hướng nghề nghiệp, 43,3% đang tìm hiểu, 21,9% chưa xác định. 203 bạn dùng thử sổ tay; phần nội dung được chấm 4,67/5.</p>',en:'<p>First survey, 406 District 1 students: 34.7% had a direction, 43.3% were exploring, 21.9% had none. 203 tried the notebook; content rated 4.67/5.</p>',ko:'<p>1군 학생 406명: 진로 결정 34.7%, 탐색 중 43.3%, 미정 21.9%. 203명이 노트를 사용했고 내용 평점은 4.67/5였습니다.</p>'}},
  { id:'p3', tag:{vi:'Phim',en:'Film',ko:'영화'}, read:4,
    title:{vi:'Chuyển thể “Cánh đồng bất tận” khi mới học lớp 11',en:'Adapting “Endless Field” in 11th grade',ko:'고2 때 「끝없는 들판」을 각색하다'},
    excerpt:{vi:'Giữ cái mênh mang của văn Nguyễn Ngọc Tư trong vài phút phim, với đoàn làm phim toàn học sinh.',en:'Keeping the vastness of Nguyễn Ngọc Tư\'s prose in a few minutes of film, with an all-student crew.',ko:'학생 제작진이 몇 분짜리 영화에 응우옌 응옥 뜨 문장의 광활함을 담은 방법.'},
    body:{vi:'<p>Thử thách lớn nhất là chọn cảnh nào để giữ lại: tìm bối cảnh sông nước, làm việc với đàn vịt thật và làm poster.</p>',en:'<p>The biggest challenge was choosing which scenes to keep: finding river locations, working with real ducks, designing the poster.</p>',ko:'<p>가장 큰 과제는 남길 장면을 고르는 일이었습니다. 물가 촬영지, 실제 오리 떼, 포스터 제작 이야기.</p>'}}
];

const PROFILE = [
  {k:{vi:'Họ và tên',en:'Full name',ko:'이름'},v:'Nguyễn Hoàng Thảo Vy'},
  {k:{vi:'Tên gọi khác',en:'Also known as',ko:'다른 이름'},v:'Lily Nguyễn · Suziee'},
  {k:{vi:'Trường',en:'School',ko:'학교'},v:{vi:'THPT Chuyên Trần Đại Nghĩa (2023 – 2026)',en:'Tran Dai Nghia High School for the Gifted (2023 – 2026)',ko:'쩐다이응이아 영재고등학교 (2023 – 2026)'}},
  {k:{vi:'Lớp',en:'Class',ko:'반'},v:{vi:'Lớp Chuyên Văn',en:'Literature-specialised class',ko:'문학 특성반'}},
  {k:{vi:'Vai trò',en:'Roles',ko:'역할'},v:{vi:['Lớp phó học tập 3 năm liền','Bí thư chi đoàn lớp 11CV (2024 – 2025)','Head of Content, CLB Văn hoá Việt Nam (2024 – 2025)'],en:['Vice monitor for academics, 3 years running','Youth Union secretary, class 11CV (2024 – 2025)','Head of Content, Vietnamese Culture Club (2024 – 2025)'],ko:['학습부반장 3년 연속','11CV 학급 청년단 서기 (2024 – 2025)','베트남 문화 동아리 콘텐츠 팀장 (2024 – 2025)']}},
  {k:{vi:'Thành tích nổi bật',en:'Highlights',ko:'주요 성과'},v:{vi:['Đội tuyển HSG Quốc gia môn Địa lý TP.HCM (2025)','Giải Nhất HSG cấp Thành phố môn Địa lý (2025)','Huy chương Vàng Olympic 30/4 môn Ngữ Văn (2021)','Học bổng hệ Chuyên top 10 (2024, 2025)'],en:['HCMC team, National Gifted Students Exam — Geography (2025)','First Prize, city Gifted Students Exam — Geography (2025)','Gold Medal, April 30 Olympiad — Literature (2021)','Specialised-track top-10 scholarship (2024, 2025)'],ko:['전국 우수학생 시험 호찌민시 지리 대표 (2025)','시 우수학생 시험 지리 1등상 (2025)','4월 30일 올림피아드 국어 금메달 (2021)','영재 과정 상위 10명 장학금 (2024, 2025)']}}
];
function renderProfile(){
  document.getElementById('profileInfo').innerHTML = PROFILE.map(r => { const v = L(r.v); return `<li><b>${L(r.k)}</b><span>${Array.isArray(v) ? `<ul>${li(v)}</ul>` : v}</span></li>`; }).join('');
}

const INTRO = {
  vi:['Mình là Suziee — một người trẻ với hàng vạn ý tưởng và một trái tim chẳng muốn bị giới hạn trong bất kỳ khuôn hình nào. Mình tạo ra Suziee Corner như một mảnh trời riêng, nơi những giấc mơ còn dang dở được cất tiếng, những ý tưởng điên rồ được phép thành hình, và những phiên bản khác nhau của mình được tự do tồn tại. Từ khởi nghiệp, phim ảnh, board game đến thời trang và nghiên cứu khoa học, mỗi dự án là một mảnh ghép của hành trình khám phá thế giới — và cũng là hành trình khám phá chính mình.','Mình không biết sau này sẽ trở thành ai. Nhưng mình muốn tự tay tạo nên những điều khiến hành trình ấy trở nên đáng nhớ.','Welcome to Suziee Corner — not just a place to create, but a place to become.'],
  en:['I\'m Suziee — a young person with ten thousand ideas and a heart that refuses to fit inside any frame. I made Suziee Corner as a patch of sky of my own, where unfinished dreams get a voice, wild ideas are allowed to take shape, and every version of me is free to exist. From startups, film and board games to fashion and research, each project is a piece of a journey to discover the world — and to discover myself.','I don\'t know who I will become. But I want to make, with my own hands, the things that make that journey worth remembering.','Welcome to Suziee Corner — not just a place to create, but a place to become.'],
  ko:['저는 Suziee예요. 수만 가지 아이디어와 어떤 틀에도 갇히고 싶지 않은 마음을 가진 사람입니다. Suziee Corner는 저만의 작은 하늘이에요. 미완성의 꿈이 목소리를 내고, 엉뚱한 아이디어가 모양을 갖추고, 여러 모습의 제가 자유롭게 존재하는 곳이죠. 창업, 영화, 보드게임부터 패션과 연구까지, 모든 프로젝트는 세상을, 그리고 저 자신을 알아가는 여정의 한 조각입니다.','앞으로 제가 어떤 사람이 될지는 모르겠어요. 하지만 그 여정을 기억할 만하게 만드는 일들은 제 손으로 직접 만들고 싶어요.','Welcome to Suziee Corner — not just a place to create, but a place to become.']
};
const MOTTOS = [
  {en:'For the ideas I dare to dream, and the worlds I dare to build.',vi:'Dành cho những ý tưởng mình dám mơ, và những thế giới mình dám dựng xây.',ko:'꿈꿀 용기를 낸 아이디어와, 지어 올릴 용기를 낸 세계를 위해.'},
  {en:'Not just what I make, but who I become.',vi:'Không chỉ là những gì mình tạo ra, mà còn là con người mình trở thành.',ko:'내가 만드는 것만이 아니라, 내가 되어 가는 사람까지.'},
  {en:'A little corner. A thousand possibilities.',vi:'Một góc nhỏ. Ngàn khả thể.',ko:'작은 구석, 천 가지 가능성.'}
];
const GPA = [{g:'10',v:'9.44',r:'-2deg'},{g:'11',v:'9.60',r:'1.5deg'},{g:'12',v:'9.75',r:'-1deg'}];
const ACH = [
  {y:'2025',c:'study',m:true,h:{vi:'Đội tuyển thi HSG Quốc gia 2025 môn Địa lý TP.HCM',en:'HCMC team, National Gifted Students Exam 2025 — Geography',ko:'2025 전국 우수학생 시험 호찌민시 지리 대표팀'},n:{vi:'Xếp hạng 23/40',en:'Ranked 23/40',ko:'40명 중 23위'},l:{vi:'Cấp quốc gia',en:'National',ko:'전국'}},
  {y:'2025',c:'study',m:true,h:{vi:'Giải Nhất học sinh giỏi môn Địa lý',en:'First Prize, Geography — Gifted Students Exam',ko:'지리 우수학생 시험 1등상'},l:{vi:'Cấp thành phố',en:'City level',ko:'시 단위'}},
  {y:'2025',c:'study',m:true,h:{vi:'Huy chương Đồng Olympic 30/4 môn Địa lý',en:'Bronze Medal, April 30 Olympiad — Geography',ko:'4월 30일 올림피아드 지리 동메달'},l:{vi:'Các trường chuyên khu vực phía Nam',en:'Southern specialised schools',ko:'남부 영재고'}},
  {y:'2025',c:'study',h:{vi:'Học bổng hệ Chuyên – top 10 điểm môn chuyên cao nhất (kì 1 & kì 2)',en:'Specialised-track scholarship — top 10 subject scores (both terms)',ko:'영재 과정 장학금 — 전공 과목 상위 10명 (1·2학기)'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2025',c:'art',h:{vi:'Giải Ba “Nét Vẽ Xanh”',en:'Third Prize, “Nét Vẽ Xanh”',ko:'「Nét Vẽ Xanh」 3등상'},l:{vi:'Cấp thành phố',en:'City level',ko:'시 단위'}},
  {y:'2025',c:'art',h:{vi:'Giải Nhất “Nét Vẽ Xanh”',en:'First Prize, “Nét Vẽ Xanh”',ko:'「Nét Vẽ Xanh」 1등상'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2024',c:'lead',h:{vi:'Giải Nhất cuộc thi “Ý tưởng khởi nghiệp học sinh – sinh viên”',en:'First Prize, “Student Startup Ideas”',ko:'「학생 창업 아이디어」 1등상'},n:{vi:'Vai trò: Leader',en:'Role: leader',ko:'역할: 리더'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2024',c:'lead',h:{vi:'Giải Nhì nghiên cứu khoa học',en:'Second Prize, Science Research',ko:'과학 연구 2등상'},n:{vi:'Vai trò: Leader',en:'Role: leader',ko:'역할: 리더'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2024',c:'study',h:{vi:'Học bổng hệ Chuyên – top 10 điểm môn chuyên cao nhất',en:'Specialised-track scholarship — top 10 subject scores',ko:'영재 과정 장학금 — 전공 과목 상위 10명'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2024',c:'art',h:{vi:'Giải Ba “Nét vẽ xanh”',en:'Third Prize, “Nét vẽ xanh”',ko:'「Nét vẽ xanh」 3등상'},l:{vi:'Thành phố Hồ Chí Minh',en:'Ho Chi Minh City',ko:'호찌민시'}},
  {y:'2024',c:'art',h:{vi:'Giải Nhất “Nét vẽ xanh”',en:'First Prize, “Nét vẽ xanh”',ko:'「Nét vẽ xanh」 1등상'},l:{vi:'Cấp trường',en:'School level',ko:'교내'}},
  {y:'2024',c:'art',h:{vi:'Giải Ba “Gói gọn mùa hè trên trang giấy”',en:'Third Prize, “Gói gọn mùa hè trên trang giấy”',ko:'「Gói gọn mùa hè trên trang giấy」 3등상'},l:{vi:'Cuộc thi online của Hải Tiến Creative',en:'Online contest by Hải Tiến Creative',ko:'Hải Tiến Creative 온라인 대회'}},
  {y:'2023',c:'art',m:true,h:{vi:'Giải Nhất cuộc thi vẽ tranh “Áo dài và hoa”',en:'First Prize, painting contest “Áo dài and Flowers”',ko:'회화 대회 「아오자이와 꽃」 1등상'},l:{vi:'Thành phố Hồ Chí Minh',en:'Ho Chi Minh City',ko:'호찌민시'}},
  {y:'2023',c:'art',h:{vi:'Giải Ba “Gói gọn mùa hè trên trang giấy”',en:'Third Prize, “Gói gọn mùa hè trên trang giấy”',ko:'「Gói gọn mùa hè trên trang giấy」 3등상'},l:{vi:'Cuộc thi online của Hải Tiến Creative',en:'Online contest by Hải Tiến Creative',ko:'Hải Tiến Creative 온라인 대회'}},
  {y:'2021',c:'study',m:true,h:{vi:'Huy chương Vàng Olympic 30/4 môn Ngữ Văn',en:'Gold Medal, April 30 Olympiad — Literature',ko:'4월 30일 올림피아드 국어(문학) 금메달'},l:{vi:'Khu vực các tỉnh miền Nam',en:'Southern provinces',ko:'남부 지역'}}
];
const CERTS = [
  {h:{vi:'Kỹ năng công dân toàn cầu',en:'Global citizenship skills',ko:'글로벌 시민 역량'}},
  {h:{vi:'Tư duy thiết kế & đổi mới sáng tạo',en:'Design thinking & innovation',ko:'디자인 씽킹과 혁신'}},
  {h:{vi:'Thiết kế Website',en:'Website design',ko:'웹사이트 디자인'}}
];
let achFilter = 'all', achAll = false;
function renderAbout(){
  const it = document.getElementById('introText');
  it.innerHTML = L(INTRO).map(par => `<p>${esc(par)}</p>`).join('');
  document.getElementById('mottos').innerHTML = MOTTOS.map(m => `<li>${m.en} — ${L(m)}</li>`).join('');
  document.getElementById('gpa').innerHTML = GPA.map(g => `<div style="--r:${g.r}"><span>${L({vi:'GPA lớp ',en:'GPA · Grade ',ko:'GPA · 고'})}${g.g}</span><b>${g.v}</b></div>`).join('');
  const cats = [['all',{vi:'Tất cả',en:'All',ko:'전체'}],['study',{vi:'Học thuật',en:'Academic',ko:'학업'}],['art',{vi:'Mỹ thuật',en:'Art',ko:'미술'}],['lead',{vi:'Nghiên cứu & khởi nghiệp',en:'Research & startup',ko:'연구·창업'}]];
  document.getElementById('achFilters').innerHTML = cats.map(([k,v]) => `<button data-ach="${k}" aria-pressed="${k===achFilter}">${L(v)}</button>`).join('');
  const list = ACH.filter(a => achFilter==='all' || a.c===achFilter), shown = achAll ? list : list.slice(0,6);
  const mb = document.getElementById('achMore'); mb.hidden = list.length <= 6; mb.textContent = achAll ? L({vi:'Thu gọn',en:'Show less',ko:'접기'}) : L({vi:'Xem tất cả',en:'Show all',ko:'모두 보기'}) + ` (${list.length})`;
  document.getElementById('ach').innerHTML = shown.map(a => `<li><span class="y">${a.y}</span><span class="t">${a.m?'<span class="medal">✦</span>':''}${esc(L(a.h))}${a.n?`<small>${esc(L(a.n))}</small>`:''}</span><span class="lv">${esc(L(a.l))}</span></li>`).join('');
  document.getElementById('certs').innerHTML = CERTS.map(c => `<li><b>${L(c.h)}</b><span>${L({vi:'Trại hè VLU Summer Camp 2024 · Đại học Văn Lang',en:'VLU Summer Camp 2024 · Van Lang University',ko:'VLU 여름 캠프 2024 · 반랑 대학교'})}</span></li>`).join('');
}
document.addEventListener('click', e => { const b = e.target.closest('[data-ach]'); if (b){ achFilter = b.dataset.ach; achAll = false; renderAbout(); } if (e.target.closest('#achMore')){ achAll = !achAll; renderAbout(); } });
const PAGES = ['home','about','projects','conducts','business','experience','blog','docs','contact'];

const COURSES = [
  {n:{vi:'Khoá 1',en:'Course 1',ko:'1과정'},h:{vi:'Cơ bản',en:'Foundations',ko:'기초'},price:'600.000đ',
   pts:{vi:['Học online','Tối đa 5 học viên / lớp'],en:['Online','Max 5 students per class'],ko:['온라인','반당 최대 5명']}},
  {n:{vi:'Khoá 2',en:'Course 2',ko:'2과정'},h:{vi:'Luyện thi',en:'Competition prep',ko:'대회 준비'},price:'800.000đ',
   pts:{vi:['Học online','Tối đa 5 học viên / lớp'],en:['Online','Max 5 students per class'],ko:['온라인','반당 최대 5명']}},
  {n:{vi:'Khoá 3',en:'Course 3',ko:'3과정'},h:{vi:'Học 1 kèm 1',en:'One-to-one',ko:'1:1 수업'},price:null,
   pts:{vi:['Một giáo viên, một học viên','Học phí: liên hệ trực tiếp'],en:['One teacher, one student','Fee: contact me directly'],ko:['교사 1명, 학생 1명','수강료: 직접 문의']}}
];
const SCHEDULE = [
  {k:{vi:'Phát triển kỹ năng (6–12 tuổi)',en:'Skills (ages 6–12)',ko:'기초 실력 (6–12세)'},v:{vi:'Thứ 3 & Thứ 6 · 19:30–21:00',en:'Tue & Fri · 19:30–21:00',ko:'화·금 · 19:30–21:00'}},
  {k:{vi:'Thi phong trào',en:'Competition class',ko:'대회반'},v:{vi:'Thứ 4 & Thứ 5 · 18:30–20:00',en:'Wed & Thu · 18:30–20:00',ko:'수·목 · 18:30–20:00'}}
];
const AWARDS = [
  {h:{vi:'3 Giải Nhất + 4 Giải Ba (2023–2025)',en:'3 First Prizes + 4 Third Prizes (2023–2025)',ko:'1등상 3회 + 3등상 4회 (2023–2025)'},p:{vi:'Cấp TP.HCM, cấp trường THPT Chuyên và cuộc thi online Hải Tiến Creative',en:'City level, specialised-school level and the online Hải Tiến Creative contest',ko:'호찌민시, 영재고 교내, 온라인 Hải Tiến Creative 대회'}},
  {h:{vi:'Giải Nhất “Áo dài và Hoa”',en:'First Prize, “Áo dài and Flowers”',ko:'「아오자이와 꽃」 1등상'},p:{vi:'Được báo Du Lịch TP.HCM đưa tin',en:'Featured in Du Lịch TP.HCM newspaper',ko:'Du Lịch TP.HCM 신문 보도'}},
  {h:{vi:'Giải Ba “Nét vẽ xanh”',en:'Third Prize, “Green Strokes”',ko:'「푸른 붓질」 3등상'},p:{vi:'Các cuộc thi đã đoạt giải: Áo dài và Hoa, Nét vẽ xanh, Gói gọn mùa hè trên trang giấy',en:'Prize-winning contests: Áo dài và Hoa, Nét vẽ xanh, Gói gọn mùa hè trên trang giấy',ko:'수상 대회: Áo dài và Hoa, Nét vẽ xanh, Gói gọn mùa hè trên trang giấy'}}
];
const BIZ_ART = {
  brush:`<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M60 120 L130 40"/><path d="M130 40 l12 -14 l10 9 l-13 13 z" fill="currentColor"/><path d="M60 120 c-10 10 -26 6 -30 14 c14 2 30 0 36 -10 z" fill="currentColor"/><circle cx="150" cy="105" r="22"/><circle cx="142" cy="98" r="4" fill="currentColor"/><circle cx="156" cy="96" r="4" fill="currentColor"/><circle cx="160" cy="110" r="4" fill="currentColor"/><circle cx="146" cy="114" r="4" fill="currentColor"/></svg>`,
  easel:`<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="62" y="20" width="76" height="62" rx="4"/><path d="M100 82 L80 135 M100 82 L120 135 M100 82 V128"/><path d="M74 70 C86 50 96 62 104 46 C112 34 120 48 128 40"/><circle cx="84" cy="38" r="6" fill="currentColor"/></svg>`
};
function lightweaveDetail(){
  return `
    ${head('Lightweave · '+L({vi:'Lớp 12 – Đại học',en:'Grade 12 – university',ko:'고3 – 대학'}),L({vi:'Lớp vẽ online & gia sư',en:'Online art classes & tutoring',ko:'온라인 미술 수업 & 과외'}))}
    <div class="m-gallery"><figure class="wide"><img src="img/lightweave-banner.jpg" alt="Lớp vẽ Ánh Sáng" loading="lazy"></figure></div>
    <div class="ext-links"><a class="btn fill" href="${LW_WEB}" target="_blank" rel="noopener">${L({vi:'Mở website lớp vẽ',en:'Open the class website',ko:'수업 웹사이트 열기'})} ↗</a></div>
    <p class="lede"><span class="hl" style="font-style:italic">Lớp vẽ Ánh Sáng — Where art weaves light into life.</span><br>${t('biz.intro')} ${L({vi:'Bên cạnh đó mình làm gia sư dạy kèm môn Ngữ Văn và Địa lý.',en:'I also tutor Literature and Geography.',ko:'또한 국어(문학)와 지리 과외를 하고 있습니다.'})}</p>
    <div class="stats"><div class="stat"><b>6–15</b><span>${t('biz.s1')}</span></div><div class="stat"><b>90</b><span>${t('biz.s2')}</span></div><div class="stat"><b>5</b><span>${t('biz.s3')}</span></div><div class="stat"><b>7</b><span>${t('biz.s4')}</span></div></div>
    <div class="courses" style="margin:0">${COURSES.map(c => `<article class="course"><span class="mono num">${L(c.n)}</span><h3>${L(c.h)}</h3><p class="price">${c.price ? c.price+`<small>${t('biz.month')}</small>` : t('biz.contactFee')}</p><ul>${li(L(c.pts))}</ul></article>`).join('')}</div>
    <div class="m-cols">
      <div><h4>${t('biz.schedule')}</h4><ul>${SCHEDULE.map(s=>`<li><b>${L(s.k)}</b>: ${L(s.v)}</li>`).join('')}</ul></div>
      <div><h4>${t('biz.home')}</h4><p>Thủ Đức · Quận 2 · Bình Thạnh · Quận 1 · Phú Nhuận · Gò Vấp</p></div>
      <div><h4>${L({vi:'Gia sư',en:'Tutoring',ko:'과외'})}</h4><ul>${li(L({vi:['Ngữ Văn','Địa lý'],en:['Literature','Geography'],ko:['국어(문학)','지리']}))}</ul></div>
    </div>
    <div class="m-cols"><div><h4>${t('biz.awards')}</h4><ul>${AWARDS.map(a=>`<li><b>${L(a.h)}</b> — ${L(a.p)}</li>`).join('')}</ul></div></div>
    <div class="m-cols"><div><h4>${t('biz.reach')}</h4><p>${t('biz.reachTxt')}</p></div><div><ul style="list-style:none;padding:0"><li>Phone: <span style="user-select:all">0773 076 302</span></li><li>Email: <span style="user-select:all">nthaozy126@gmail.com</span></li><li>Facebook: Lily Nguyễn (Nguyễn Hoàng Thảo Vy)</li></ul></div></div>`;
}
const BUSINESSES = [
  { id:'slime', img:'img/biz-slime.jpg',
    when:{vi:'Lớp 4 – 5',en:'Grades 4–5',ko:'초등 4–5학년'}, title:'Slime & Squishy',
    sum:{vi:'Tự làm slime, squishy và bán ở nhà sách cạnh trường, cho các bạn cùng khối và trên Facebook.',en:'Made slime and squishies myself and sold them at the bookshop next to school, to classmates and on Facebook.',ko:'슬라임과 스퀴시를 직접 만들어 학교 옆 서점, 같은 학년 친구들, 페이스북에서 판매했습니다.'},
    fig:{vi:'~1 triệu',en:'~1M VND',ko:'약 100만 동'}, figNote:{vi:'doanh thu / tháng',en:'revenue / month',ko:'월 매출'},
    detail:() => `
      ${head(L({vi:'Lớp 4 – 5 · Sản phẩm đầu tiên',en:'Grades 4–5 · My first product',ko:'초등 4–5학년 · 첫 번째 상품'}),'Slime & Squishy')}
      <p class="lede">${L({vi:'Công việc kinh doanh đầu tiên của mình: tự pha slime nhiều màu, trang trí bằng hình nhân vật nhỏ và đóng hũ, cùng với squishy.',en:'My first business: mixing colourful slime, decorating each jar with small figures, plus squishies.',ko:'처음 해 본 장사였습니다. 알록달록한 슬라임을 직접 만들어 작은 피규어로 꾸민 통에 담고, 스퀴시도 함께 팔았습니다.'})}</p>
      <div class="stats"><div class="stat"><b>~1M</b><span>${L({vi:'đồng doanh thu mỗi tháng',en:'VND revenue per month',ko:'동, 월 매출'})}</span></div><div class="stat"><b>3</b><span>${L({vi:'kênh bán hàng',en:'sales channels',ko:'판매 채널'})}</span></div></div>
      <div class="m-cols"><div><h4>${L({vi:'Kênh bán',en:'Where I sold',ko:'판매처'})}</h4><ul>${li(L({vi:['Nhà sách kế bên trường','Các bạn cùng khối','Facebook'],en:['The bookshop next to school','Classmates in my grade','Facebook'],ko:['학교 옆 서점','같은 학년 친구들','페이스북']}))}</ul></div></div>
      <div class="m-gallery"><img src="img/biz-slime.jpg" alt="Slime" loading="lazy" style="aspect-ratio:3/4;max-width:420px"></div>`},
  { id:'supplies', art:'brush',
    when:{vi:'Lớp 6 – 7',en:'Grades 6–7',ko:'중1–2학년'}, title:{vi:'Hoạ cụ online',en:'Online art supplies',ko:'온라인 미술 용품'},
    sum:{vi:'Kinh doanh hoạ cụ qua mạng: màu, cọ, giấy và dụng cụ vẽ.',en:'Sold art supplies online: paints, brushes, paper and drawing tools.',ko:'물감, 붓, 종이 등 미술 용품을 온라인으로 판매했습니다.'},
    fig:{vi:'30 triệu',en:'30M VND',ko:'3,000만 동'}, figNote:{vi:'tổng doanh thu đến khi ngừng bán',en:'total revenue until I stopped',ko:'판매 종료까지 총매출'},
    detail:() => `
      ${head(L({vi:'Lớp 6 – 7',en:'Grades 6–7',ko:'중1–2학년'}),L({vi:'Hoạ cụ online',en:'Online art supplies',ko:'온라인 미술 용품'}))}
      <p class="lede">${L({vi:'Từ việc tự vẽ, mình chuyển sang bán hoạ cụ qua mạng cho người cùng sở thích. Cửa hàng đạt tổng doanh thu khoảng 30 triệu đồng cho tới khi mình ngừng bán.',en:'Painting led me to selling art supplies online to people who shared the hobby. The shop made about 30 million VND in total before I closed it.',ko:'그림을 그리다 보니 같은 취미를 가진 사람들에게 미술 용품을 온라인으로 팔게 되었습니다. 판매를 그만둘 때까지 총매출은 약 3,000만 동이었습니다.'})}</p>
      <div class="stats"><div class="stat"><b>30M</b><span>${L({vi:'đồng tổng doanh thu',en:'VND total revenue',ko:'동 총매출'})}</span></div></div>
      <p class="note">${L({vi:'Hình ảnh cửa hàng sẽ được cập nhật sau.',en:'Shop photos will be added later.',ko:'매장 사진은 추후 업데이트됩니다.'})}</p>`},
  { id:'clay', img:'img/clay-stall.jpg',
    when:{vi:'Lớp 10',en:'Grade 10',ko:'고1'}, title:{vi:'Hoa đất sét',en:'Clay flowers',ko:'클레이 꽃'},
    sum:{vi:'Nặn hoa và thú đất sét, bó thành bó hoa để bán ở hội chợ và làm quà tặng thầy cô, bạn bè.',en:'Hand-made clay flowers and animals, wrapped into bouquets for a fair and as gifts for teachers and friends.',ko:'클레이로 꽃과 동물을 빚어 꽃다발로 만들어 축제에서 팔고, 선생님과 친구들에게 선물했습니다.'},
    fig:{vi:'1 triệu+',en:'1M+ VND',ko:'100만 동+'}, figNote:{vi:'trong 3 ngày hội chợ',en:'in 3 days at the fair',ko:'축제 3일간'},
    detail:() => `
      ${head(L({vi:'Lớp 10 · Hội chợ',en:'Grade 10 · Fair',ko:'고1 · 축제'}),L({vi:'Hoa đất sét',en:'Clay flowers',ko:'클레이 꽃'}))}
      <p class="lede">${L({vi:'Mình tự nặn từng bông hoa, từng chú thú đất sét gắn que, rồi bó thành bó hoa. Bán 3 ngày ở hội chợ được hơn 1 triệu đồng; ngoài ra các bó hoa còn là quà mình tặng thầy cô và bạn bè.',en:'I sculpted each clay flower and animal on a stick, then wrapped them into bouquets. Three days at the fair brought in over 1 million VND, and the bouquets also became my gifts for teachers and friends.',ko:'클레이 꽃과 동물을 하나하나 빚어 막대에 꽂고 꽃다발로 포장했습니다. 축제 3일 동안 100만 동 이상을 벌었고, 선생님과 친구들에게 주는 선물로도 만들었습니다.'})}</p>
      <div class="stats"><div class="stat"><b>3</b><span>${L({vi:'ngày hội chợ',en:'days at the fair',ko:'축제 일수'})}</span></div><div class="stat"><b>1M+</b><span>${L({vi:'đồng doanh thu',en:'VND revenue',ko:'동 매출'})}</span></div></div>
      <div class="m-gallery">
        <figure class="wide"><img src="img/clay-stall.jpg" alt="" loading="lazy"><figcaption class="mono">${L({vi:'Gian hàng ở hội chợ',en:'My stall at the fair',ko:'축제 부스'})}</figcaption></figure>
        <img src="img/clay-stall2.jpg" alt="" loading="lazy"><img src="img/clay-stall3.jpg" alt="" loading="lazy"><img src="img/clay-stall4.jpg" alt="" loading="lazy">
        <figure><img src="img/clay-b1.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><figcaption class="mono">${L({vi:'Bó hoa quà tặng',en:'Gift bouquet',ko:'선물 꽃다발'})}</figcaption></figure>
        <img src="img/clay-b2.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><img src="img/clay-b3.jpg" alt="" loading="lazy" style="aspect-ratio:3/4">
        <img src="img/clay-b4.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><img src="img/clay-b5.jpg" alt="" loading="lazy" style="aspect-ratio:3/4">
        <figure><img src="img/clay-pot.jpg" alt="" loading="lazy" style="aspect-ratio:3/4"><figcaption class="mono">${L({vi:'Chậu đất sét kèm thiệp vẽ tay',en:'Clay pot with a hand-drawn card',ko:'손그림 카드와 클레이 화분'})}</figcaption></figure>
      </div>`},
  { id:'teach', img:'img/lightweave-banner.jpg', link:LW_WEB,
    when:{vi:'Lớp 12 – Đại học',en:'Grade 12 – university',ko:'고3 – 대학'}, title:{vi:'Lớp vẽ online & gia sư',en:'Art classes & tutoring',ko:'미술 수업 & 과외'},
    sum:{vi:'Mở Lớp vẽ Ánh Sáng (Lightweave) dạy online cho các bạn 6–15 tuổi và làm gia sư dạy kèm Văn – Địa.',en:'Founded Lightweave, online painting classes for kids aged 6–15, and tutor Literature and Geography.',ko:'6–15세 대상 온라인 미술 수업 Lightweave를 열고, 국어·지리 과외를 하고 있습니다.'},
    fig:{vi:'600k – 800k',en:'600k – 800k VND',ko:'60만–80만 동'}, figNote:{vi:'học phí / tháng',en:'fee / month',ko:'월 수강료'},
    detail: lightweaveDetail }
];
function renderBusiness(){
  document.getElementById('bizGrid').innerHTML = BUSINESSES.map(b => `
    <article class="biz-card">
      <div class="row-media" data-biz="${b.id}">${b.img ? `<img src="${b.img}" alt="${esc(L(b.title))}" loading="lazy">` : `<div class="art">${BIZ_ART[b.art]}</div>`}</div>
      <span class="mono when">${esc(L(b.when))}</span>
      <h3>${esc(L(b.title))}</h3>
      <p>${esc(L(b.sum))}</p>
      <p class="figure">${esc(L(b.fig))}<small>${esc(L(b.figNote))}</small></p>
      <div class="actions"><button class="btn fill" data-biz="${b.id}">${t('ui.details')}</button>${b.link?`<a class="btn" href="${b.link}" target="_blank" rel="noopener">Website ↗</a>`:''}</div>
    </article>`).join('');
}

/* ---------- State ---------- */
const root = document.documentElement;
const store = { get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch(e){} } };
let lang = store.get('suziee-lang'); if (!['vi','en','ko'].includes(lang)) lang = 'vi';
const savedTheme = store.get('suziee-theme2');
root.setAttribute('data-theme', (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
let currentFilter = 'all';
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function t(k){ return L(T[k]) ?? k; }

/* ---------- Render ---------- */
const ART = {
  map:`<svg viewBox="0 0 200 150"><g fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 120 C60 40 120 140 180 30" stroke-dasharray="5 6"/><circle cx="20" cy="120" r="6"/><circle cx="104" cy="88" r="5"/></g><path d="M180 12c-9 0-15 7-15 15 0 11 15 25 15 25s15-14 15-25c0-8-6-15-15-15z" fill="currentColor"/><circle cx="180" cy="27" r="5" fill="var(--paper-2)"/></svg>`,
  lotus:`<svg viewBox="0 0 24 24" class="lotus" style="width:46%;height:auto"><use href="#lotus"/></svg>`
};
function media(p){ return p.img ? `<img src="${p.img}" alt="${esc(L(p.title))}" loading="lazy" style="object-position:${p.imgPos||'center'}">` : `<div class="art">${ART[p.art]}</div>`; }
function rowHTML(p){
  const links = (p.links||[]).map(l=>`<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('');
  const vid = p.id==='vietland' ? `<button class="btn" data-open="vietland" data-video="1">▶ Video</button>` : '';
  return `<article class="row">
    <div class="row-media" data-open="${p.id}">${media(p)}</div>
    <div class="row-text">
      <p class="meta mono">${esc(L(p.meta))}${p.now?` · <span style="color:var(--son)">${t('ui.now')}</span>`:''}</p>
      <h3>${esc(L(p.title))}</h3>
      <p class="desc">${esc(L(p.desc))}</p>
      <div class="actions"><button class="btn fill" data-open="${p.id}">${t('ui.details')}</button>${vid}${links}</div>
    </div></article>`;
}
function renderProjects(){
  const q = (document.getElementById('projSearch')?.value || '').trim().toLowerCase();
  const list = PROJECTS.filter(p => (currentFilter==='all' || p.cat===currentFilter) && (!q || [L(p.title),L(p.desc),L(p.meta)].join(' ').toLowerCase().includes(q)));
  document.getElementById('projRows').innerHTML = list.length ? list.map(rowHTML).join('') : `<p class="empty">${t('ui.noresult')}</p>`;
}
function renderFilters(){
  const cats = ['all','startup','research','film','community','art'];
  const q = document.getElementById('projSearch')?.value || '';
  document.getElementById('filters').innerHTML = cats.map(c => `<button data-filter="${c}" aria-pressed="${c===currentFilter}">${t('cat.'+c)}<span class="count">${c==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===c).length}</span></button>`).join('') +
    `<label class="search" for="projSearch"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="projSearch" type="search" autocomplete="off" placeholder="${t('ui.search')}" value="${esc(q)}"></label>`;
  document.getElementById('projSearch').addEventListener('input', renderProjects);
}
function renderTimeline(){
  document.getElementById('timeline').innerHTML = TIMELINE.map(e => `
    <div class="tl-item">
      <div class="tl-when mono">${esc(L(e.when))}${e.now?`<br><span class="now">${t('ui.now')}</span>`:''}</div>
      <div class="tl-body">
        <h3>${esc(L(e.h))}</h3>
        <p class="org mono">${esc(L(e.org))}</p>
        ${e.p ? `<p>${esc(L(e.p))}</p>` : ''}
        ${e.list ? `<ul>${L(e.list).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        ${e.thumbs ? `<div class="tl-thumbs">${e.thumbs.map(s=>`<img src="${s}" alt="" loading="lazy" data-open="${e.open}">`).join('')}</div>` : ''}
        ${e.open ? `<button class="more" data-open="${e.open}">${(DOCS[e.open]||[]).length ? t('ui.photos') : t('ui.details')} →</button>` : ''}
      </div></div>`).join('');
}
function renderBlog(){
  document.getElementById('blogList').innerHTML = POSTS.map(p => `
    <article class="post">
      <p class="meta mono"><span style="color:var(--son)">${esc(L(p.tag))}</span><span>${t('ui.soon')} · ${p.read} ${t('ui.min')}</span></p>
      <div><h3>${esc(L(p.title))}</h3><p>${esc(L(p.excerpt))}</p></div>
      <button data-post="${p.id}">${t('ui.read')} →</button></article>`).join('');
}
function renderDocs(){
  document.getElementById('docsAll').innerHTML = PROJECTS.filter(p => (DOCS[p.id]||[]).length).map(p => `
    <section class="doc-group">
      <div><h3>${esc(L(p.title))}</h3><span class="mono">${esc(L(p.meta))}</span></div>
      ${docsList(p.id)}
    </section>`).join('');
}
function renderStatic(){
  root.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang===lang));
  if (document.getElementById('skills')) document.getElementById('skills').innerHTML = SKILLS.map(s => `<div><h3 class="mono" style="color:var(--son)">${L(s.h)}</h3><ul>${li(L(s.c))}</ul></div>`).join('');
  document.getElementById('principles').innerHTML = PRINCIPLES.map(x => `<div class="pr"><svg viewBox="0 0 24 24" class="lotus"><use href="#lotus"/></svg><div><h3>${L(x.h)}</h3><p>${L(x.p)}</p></div></div>`).join('');
  const STRIP = [['img/playtest.jpg','Vietland Adventure'],['img/club-japan.jpg',L({vi:'CLB Văn hoá Việt Nam',en:'Vietnamese Culture Club',ko:'베트남 문화 동아리'})],['img/charity-1.jpg',L({vi:'Xuân ấm cho ông bà',en:'A Warm Spring',ko:'따뜻한 봄'})],['img/clay-stall.jpg',L({vi:'Hoa đất sét',en:'Clay flowers',ko:'클레이 꽃'})],['img/poster-1.jpg','Mênh Mang Nỗi Người'],['img/th-stage.jpg','Tuổi Hồng 29'],['img/lightweave-banner.jpg','Lớp vẽ Ánh Sáng'],['img/amsac-thanks.jpg','Âm sắc: Ấm II']];
  const fig = STRIP.map(([s,c])=>`<figure><img src="${s}" alt="" loading="lazy"><figcaption class="mono">${esc(c)}</figcaption></figure>`).join('');
  document.getElementById('strip').innerHTML = `<div class="strip-track">${fig}${fig.replace(/<figure>/g,'<figure aria-hidden="true">')}</div>`;
  document.getElementById('featuredRows').innerHTML = ['vietland','club','film'].map(id => rowHTML(PROJECTS.find(p=>p.id===id))).join('');
  document.getElementById('hub').innerHTML = PAGES.slice(1).map(pg => `<li><a href="#${pg}"><b>${t('nav.'+pg)}</b><span>${t('hub.'+pg)}</span><i>→</i></a></li>`).join('');
  renderFilters(); renderProjects(); renderTimeline(); renderBlog(); renderDocs(); renderBusiness(); renderProfile(); renderAbout(); setTitle();
}

/* ---------- Router ---------- */
let currentPage = 'home';
function setTitle(){ document.title = currentPage==='home' ? 'Suziee Corner' : `${t('nav.'+currentPage)} · Suziee Corner`; }
const menu = document.getElementById('menu'), burger = document.getElementById('burger');
function route(){
  const h = (location.hash || '#home').slice(1);
  const pg = PAGES.includes(h) ? h : 'home';
  const changed = pg !== currentPage; currentPage = pg;
  document.querySelectorAll('.page').forEach(el => {
    const show = el.dataset.page === pg;
    if (show && el.hidden) { el.hidden = false; el.style.animation='none'; void el.offsetWidth; el.style.animation=''; }
    else if (!show) el.hidden = true;
  });
  document.querySelectorAll('.menu a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+pg));
  menu.classList.remove('open'); burger.setAttribute('aria-expanded', false);
  if (changed && modal.open) closeModal();
  if (changed) window.scrollTo(0,0);
  setTitle();
  fxPage();
}
burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
window.addEventListener('hashchange', route);

/* ---------- Events ---------- */
function isDark(){ const a = root.getAttribute('data-theme'); return a ? a==='dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
document.getElementById('themeToggle').addEventListener('click', () => { const next = isDark() ? 'light' : 'dark'; root.setAttribute('data-theme', next); store.set('suziee-theme2', next); });
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('suziee-lang', lang); renderStatic(); if (modal.open && openState) mContent.innerHTML = openState(); }));

const modal = document.getElementById('modal'), mContent = document.getElementById('mContent');
let openState = null;
function openModal(fn){ openState = fn; mContent.innerHTML = fn(); if (!modal.open) { modal.showModal ? modal.showModal() : modal.setAttribute('open',''); } modal.scrollTop = 0; }
function closeModal(){ const v = modal.querySelector('video'); if (v) v.pause(); openState = null; modal.close ? modal.close() : modal.removeAttribute('open'); }
document.addEventListener('click', e => {
  const f = e.target.closest('[data-filter]');
  if (f) { currentFilter = f.dataset.filter; document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed', x===f)); renderProjects(); return; }
  const o = e.target.closest('[data-open]');
  if (o) { const p = PROJECTS.find(x => x.id === o.dataset.open); if (!p) return; openModal(p.detail);
    if (o.dataset.video) { const v = document.getElementById('vlVideo'); if (v) { v.scrollIntoView({block:'center'}); v.play().catch(()=>{}); } } return; }
  const bz = e.target.closest('[data-biz]');
  if (bz) { const x = BUSINESSES.find(y => y.id === bz.dataset.biz); if (x) openModal(x.detail); return; }
  const b = e.target.closest('[data-post]');
  if (b) { const p = POSTS.find(x => x.id === b.dataset.post);
    openModal(() => `${head(esc(L(p.tag))+' · '+t('ui.soon'), esc(L(p.title)))}<article>${L(p.body)}</article><p class="note">${t('ui.preview')}</p>`); }
});
document.getElementById('mClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modal.addEventListener('close', () => { const v = modal.querySelector('video'); if (v) v.pause(); openState = null; });

const mail = document.getElementById('mailAddr').textContent, copyBtn = document.getElementById('copyMail');
function selectText(el){ const r=document.createRange(); r.selectNodeContents(el); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }
copyBtn.addEventListener('click', () => {
  const done = () => { copyBtn.textContent = t('ui.copied'); setTimeout(()=>copyBtn.textContent=t('ui.copy'),1800); };
  try { navigator.clipboard.writeText(mail).then(done, () => selectText(document.getElementById('mailAddr'))); } catch(e){ selectText(document.getElementById('mailAddr')); }
});
const form = document.getElementById('contactForm'), status = document.getElementById('formStatus');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !d.message.trim() || !/^\S+@\S+\.\S+$/.test(d.email)) { status.textContent = t('f.err'); return; }
  const subject = `[Suziee Corner] ${d.topic} – ${d.name}`, body = `${d.message}\n\n— ${d.name} (${d.email})`;
  const fb = () => status.textContent = t('f.fallback').replace('{m}', mail);
  try { navigator.clipboard.writeText(`To: ${mail}\nSubject: ${subject}\n\n${body}`).then(() => status.textContent = t('f.ok').replace('{m}', mail), fb); } catch(err){ fb(); }
  const a = document.createElement('a'); a.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; a.click();
});

/* ===================== Motion ===================== */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;
const cssVar = n => getComputedStyle(root).getPropertyValue(n).trim();
const LOTUS_SVG = '<svg viewBox="0 0 24 24"><use href="#lotus"/></svg>';
function renderRibbons(){
  const a = L({vi:['A little corner for big ideas','Văn hoá Việt là chất liệu','Học qua chơi','Hiểu qua làm'],en:['A little corner for big ideas','Vietnamese culture as material','Learn by play','Understand by doing'],ko:['A little corner for big ideas','베트남 문화가 재료','놀면서 배우기','하면서 이해하기']});
  const b = ['Vietland Adventure','Ikigai','Mênh Mang Nỗi Người','Âm sắc: Ấm II','Tuổi Hồng 29','Lớp vẽ Ánh Sáng'];
  const run = list => { const one = list.map(x=>`<span>${esc(x)} ${LOTUS_SVG}</span>`).join(''); return one+one+one+one; };
  const r1 = document.getElementById('rib1'), r2 = document.getElementById('rib2');
  if (r1) r1.innerHTML = run(a); if (r2) r2.innerHTML = run(b);
}
renderRibbons();
document.querySelectorAll('.lang button').forEach(btn => btn.addEventListener('click', renderRibbons));

/* hero title: split letters */
(function splitTitle(){
  let i = 0;
  document.querySelectorAll('.hero h1 .uline').forEach(w => {
    w.innerHTML = [...w.textContent].map(c => `<span class="ch" style="animation-delay:${reduce?0:1.35 + (i++)*0.05}s">${c}</span>`).join('');
  });
})();

/* reveal on scroll + count-up */
const REVEAL = '.page-head,.row,.biz-card,.tl-item,.post,.doc-group,.pr,.fact,.course,.index li,.sec-title,.about-intro,.profile,.next-page,.skills > div,.photo-wide,.quote-big,.contact-grid';
function countUp(el){
  if (el.dataset.counted) return; el.dataset.counted = '1';
  const m = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild.textContent.match(/^(\d{1,4})([^\d]*)$/) : null;
  if (!m || reduce) return;
  const end = +m[1], suf = m[2], t0 = performance.now(), dur = 1200, node = el.firstChild;
  const step = now => { const k = Math.min(1,(now-t0)/dur), e = 1-Math.pow(1-k,3); node.textContent = Math.round(end*e) + suf; if (k<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add('in'); en.target.querySelectorAll('.fact b,.stat b').forEach(countUp); if (en.target.matches('.fact')) en.target.querySelectorAll('b').forEach(countUp); io.unobserve(en.target); } });
},{threshold:.12, rootMargin:'0px 0px -6% 0px'}) : null;
function fxPage(){
  if (!io || reduce) return;
  const page = document.querySelector(`.page[data-page="${currentPage}"]`); if (!page) return;
  let n = 0;
  page.querySelectorAll(REVEAL).forEach(el => {
    if (el.classList.contains('rv')) return;
    el.classList.add('rv'); el.style.transitionDelay = ((n++ % 4) * 70) + 'ms'; io.observe(el);
  });
}
let mo_t; new MutationObserver(() => { clearTimeout(mo_t); mo_t = setTimeout(fxPage, 30); }).observe(document.getElementById('main'), {childList:true, subtree:true});
/* stats inside modal count up when opened */
new MutationObserver(() => { if (modal.open) mContent.querySelectorAll('.stat b').forEach(b => { delete b.dataset.counted; countUp(b); }); }).observe(mContent, {childList:true});

/* scroll progress + drum parallax */
const prog = document.getElementById('progress'), drumEl = document.getElementById('drum');
let mx = 0, my = 0;
function onScroll(){
  const h = document.documentElement.scrollHeight - innerHeight;
  prog.style.transform = `scaleX(${h>0 ? scrollY/h : 0})`;
  if (drumEl && !reduce) drumEl.style.transform = `translate(${mx}px,${my + scrollY*0.12}px) rotate(${scrollY*0.08}deg)`;
}
addEventListener('scroll', onScroll, {passive:true}); onScroll();
if (fine && !reduce){
  (document.querySelector('.hero')||document.body).addEventListener('pointermove', e => { mx = (e.clientX/innerWidth - .5) * -24; my = (e.clientY/innerHeight - .5) * -18; onScroll(); });
}

/* tilt on project images + magnetic primary buttons */
if (fine && !reduce){
  document.addEventListener('pointermove', e => {
    const m = e.target.closest('.row-media');
    if (m){ const r = m.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      m.style.transform = `perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.015)`; }
    const b = e.target.closest('.btn.fill');
    if (b){ const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`; }
  });
  document.addEventListener('pointerout', e => {
    const m = e.target.closest('.row-media'); if (m && !m.contains(e.relatedTarget)) m.style.transform = '';
    const b = e.target.closest('.btn.fill'); if (b && !b.contains(e.relatedTarget)) b.style.transform = '';
  });
}

/* paint-brush cursor trail: dabs of đỏ son, vàng hoè, xanh chàm, lá tre */
(function paintTrail(){
  const cv = document.getElementById('paint'); if (!fine || reduce || !cv.getContext) { cv.remove(); return; }
  const ctx = cv.getContext('2d'); let dabs = [], running = false, ci = 0, last = null, dpr = Math.min(2, devicePixelRatio||1);
  const size = () => { cv.width = innerWidth*dpr; cv.height = innerHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); };
  size(); addEventListener('resize', size);
  const cols = () => [cssVar('--son'), cssVar('--hoe'), cssVar('--cham'), cssVar('--la')];
  let palette = cols(); new MutationObserver(()=>palette = cols()).observe(root,{attributes:true,attributeFilter:['data-theme']});
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const p = {x:e.clientX, y:e.clientY};
    if (last){ const d = Math.hypot(p.x-last.x, p.y-last.y); if (d < 7) return; }
    last = p; ci = (ci + 1) % 120;
    dabs.push({x:p.x, y:p.y, r: 3 + Math.random()*4, c: palette[Math.floor(ci/30)], t: performance.now()});
    if (dabs.length > 60) dabs.shift();
    if (!running){ running = true; requestAnimationFrame(draw); }
  });
  function draw(now){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    dabs = dabs.filter(d => now - d.t < 650);
    dabs.forEach(d => { const k = 1 - (now-d.t)/650; ctx.globalAlpha = k*.55; ctx.fillStyle = d.c; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r*k+1, (d.r*k+1)*.7, .6, 0, Math.PI*2); ctx.fill(); });
    ctx.globalAlpha = 1;
    if (dabs.length) requestAnimationFrame(draw); else { running = false; ctx.clearRect(0,0,innerWidth,innerHeight); }
  }
})();

/* drifting lotus petals behind the hero */
(function petals(){
  const cv = document.getElementById('petals'); if (reduce || !cv || !cv.getContext) return;
  const ctx = cv.getContext('2d'), hero = cv.parentElement; let W, H, dpr = Math.min(2, devicePixelRatio||1), P = [];
  const size = () => { W = hero.clientWidth; H = hero.clientHeight; cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); };
  size(); addEventListener('resize', size);
  const N = innerWidth < 640 ? 10 : 20;
  for (let i=0;i<N;i++) P.push({x:Math.random()*W, y:Math.random()*H, s:6+Math.random()*10, a:Math.random()*6.28, va:(Math.random()-.5)*.01, vx:.15+Math.random()*.35, vy:.1+Math.random()*.3, c:i%3});
  function petal(p, col){
    ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.a); ctx.fillStyle = col; ctx.globalAlpha = .22;
    ctx.beginPath(); ctx.moveTo(0,-p.s); ctx.quadraticCurveTo(p.s*.7,0,0,p.s); ctx.quadraticCurveTo(-p.s*.7,0,0,-p.s); ctx.fill(); ctx.restore();
  }
  function frame(){
    if (currentPage === 'home' && !document.hidden){
      const cols = [cssVar('--son'), cssVar('--hoe'), cssVar('--la')];
      ctx.clearRect(0,0,W,H);
      P.forEach(p => { p.x += p.vx; p.y += p.vy + Math.sin(p.a)*.15; p.a += p.va; if (p.x > W+20) p.x = -20; if (p.y > H+20) p.y = -20; petal(p, cols[p.c]); });
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();


/* ===== Background music: generated live, C-major pentatonic (ngũ cung), soft marimba + bells ===== */
(function music(){
  const btn = document.getElementById('music'), lbl = document.getElementById('musicLbl');
  let ac = null, master = null, timer = null, next = 0, step = 0, on = false;
  const setLbl = () => { btn.setAttribute('aria-pressed', on); btn.title = t(on ? 'music.on' : 'music.off'); lbl.textContent = on ? '♪ ' + t('music.on') : '♪ ' + t('music.off'); };
  setLbl(); document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', setLbl));
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  // progression C – Am – F – G (2 bars each loop of 8 bars)
  const CH = [[60,64,67],[57,60,64],[53,57,60],[55,59,62]];
  const PENTA = [72,74,76,79,81,84,86,88];
  const MEL = [0,2,4,-1,3,2,1,-1, 4,5,4,2,3,-1,2,-1, 2,3,4,6,5,4,3,-1, 1,2,3,1,0,-1,-1,-1];
  function voice(freq, t0, dur, type, gain, dest){
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function marimba(m, t0, v){ voice(hz(m), t0, .55, 'sine', .22*v, master); voice(hz(m)*4, t0, .12, 'sine', .05*v, master); }
  function bell(m, t0){ voice(hz(m), t0, 1.4, 'triangle', .05, delay); }
  let delay;
  function build(){
    ac = new (window.AudioContext || window.webkitAudioContext)();
    master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
    delay = ac.createDelay(); delay.delayTime.value = .33; const fb = ac.createGain(); fb.gain.value = .32;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
    delay.connect(lp); lp.connect(fb); fb.connect(delay); lp.connect(master);
  }
  function schedule(){
    const spb = 60 / 104 / 2; // eighth notes at 104 bpm
    while (next < ac.currentTime + 0.25){
      const bar = Math.floor(step / 8) % 8, ch = CH[Math.floor(bar / 2) % 4], pos = step % 8;
      if (pos === 0){ voice(hz(ch[0]-12), next, 1.6, 'sine', .16, master); }
      if (pos === 0 || pos === 4){ ch.forEach((n,i)=> voice(hz(n), next + i*0.03, 1.2, 'sine', .035, master)); }
      if (pos % 2 === 1) marimba(ch[(pos>>1)%3] + 12, next, .45);
      const mi = MEL[step % 32]; if (mi >= 0) marimba(PENTA[mi], next, 1);
      if (step % 16 === 14) bell(PENTA[(step/16|0)%2 ? 7 : 5], next);
      next += spb; step++;
    }
  }
  function start(){
    if (!ac) build();
    ac.resume(); next = ac.currentTime + .05;
    master.gain.cancelScheduledValues(ac.currentTime); master.gain.setTargetAtTime(.55, ac.currentTime, .6);
    timer = setInterval(schedule, 60); on = true; setLbl(); store.set('suziee-music','on');
  }
  function stop(){
    if (!ac) return; master.gain.setTargetAtTime(0, ac.currentTime, .25);
    clearInterval(timer); on = false; setLbl(); store.set('suziee-music','off');
  }
  btn.addEventListener('click', e => { e.stopPropagation(); on ? stop() : start(); });
  document.addEventListener('visibilitychange', () => { if (!ac) return; document.hidden ? ac.suspend() : (on && ac.resume()); });
})();
/* sparkle burst on click */
if (!reduce) document.addEventListener('pointerdown', e => {
  if (e.target.closest('input,textarea,select')) return;
  for (let i=0;i<6;i++){
    const s = document.createElement('span'); s.className = 'burst'; s.textContent = '✦';
    const a = Math.PI*2*i/6 + Math.random()*.6, d = 30 + Math.random()*30;
    s.style.left = (e.clientX-8)+'px'; s.style.top = (e.clientY-10)+'px';
    s.style.setProperty('--dx', Math.cos(a)*d+'px'); s.style.setProperty('--dy', Math.sin(a)*d+'px');
    s.style.color = i%2 ? 'var(--hoe)' : 'var(--son)'; s.style.fontSize = (10+Math.random()*10)+'px';
    document.body.appendChild(s); setTimeout(()=>s.remove(), 800);
  }
});

/* ===== cover: count-up year + layered parallax ===== */
(function cover(){
  const c = document.getElementById('cover'); if (!c) return;
  const y = document.getElementById('cvYear');
  if (!reduce){ let n = 1990; y.textContent = n; setTimeout(() => { const t = setInterval(() => { n++; y.textContent = n; if (n >= 2027) clearInterval(t); }, 32); }, 1950); }
  const L = [...c.querySelectorAll('.cv-layer')], depth = [6, 14, 26, 9];
  let sx = 0, sy = 0, mx = 0, my = 0;
  const apply = () => L.forEach((l,i) => l.style.transform = `translate(${mx*depth[i]}px, ${my*depth[i] - sy*(i===1?0.12:i===2?-0.06:0.04)}px)`);
  if (fine && !reduce) c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); mx = (e.clientX-r.left)/r.width - .5; my = (e.clientY-r.top)/r.height - .5; apply(); });
  c.addEventListener('pointerleave', () => { mx = my = 0; apply(); });
  if (!reduce) addEventListener('scroll', () => { if (currentPage !== 'home') return; sy = Math.min(scrollY, 800); apply(); }, {passive:true});
})();
renderStatic(); route();
})();
