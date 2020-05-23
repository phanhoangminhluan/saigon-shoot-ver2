/* SLIDER */
const sliders = [
    {
        sliderId: "sld-1",
        sliderImg: "slider-1.jpg"
    },
    {
        sliderId: "sld-2",
        sliderImg: "slider-2.jpg"
    },
    {
        sliderId: "sld-3",
        sliderImg: "slider-3.jpeg"
    }
];

/* NHÂN SỰ CHỦ LỰC */
const humans = [
    {
        humanId: "hm-1",
        humanName: "Võ Dương Uy",
        humanTitle: "<p>Director - D.P</p>",
        humanImage: "human-duong-uy.JPG",
        humanFacebook: "https://www.facebook.com/vo.uy.3",
        humanInstagram: "",
        humanDescEng: `
<strong> Picture Director of:</strong>
<li> TVC University of VN Cambridge </li>
<li> TVC Lotion Ice Sun </li>
<li> TVC between Nguyen Kiem và Galaxy  </li>
<li> Viral clip Galaxy Note 8 </li>
<li> Viral clip Goody Biscuits của Bibica </li>
<li> Short Films “Lam” của Đạo diễn Hoàng Nhật Nam </li>
<li> Fashion Show “Hành Trình Về Phương Đông” của  Huỳnh Hiểu Long Designer</li>
<li> Fashion Show “Junior Fashion show” của Xuân Lan Model Academy</li>
<li> Event “Launching Alpha King Corporation” at Dinh Độc Lập </li>
<li> Event “Saigon Rugby” (The Unique Football Event at Vietnam) </li>
<li> Event “Happy At Work 2017” (The Biggest Human Resource Event at Vietnam) </li>
<li> "Travelling and Cuisine" that periodically showed on VTV 4 </li>
<strong>Đạo diễn của:</strong>
<li> + MV “Hai ta đã bao lâu?” (musician Hoài An, by Singer Dương Ánh Nga and Long Ca) </li>
<li> + MV “Chợt Nhớ Tình Đầu” (musician Hoàng Luân, by Milktea Hotboy in 'Thách Thức Danh Hài') </li>
<li> + Short Film “Đi Qua Cơn Mê” </li>
<li> + Short Film “Xe ôm, em dám yêu không?” </li>
<li> + TVC Air Cooler Boss </li>
<li> + TV Show “Bốn Mùa Yêu Thương” periodically showed on VTV2 </li>
<li> + Youtube channel “Rainbow Crafts” </li>
And many more projects…
        `,
        humanDesc:
            `
<strong> Đạo diễn hình ảnh của:</strong>
<li> TVC Đại Học Cambridge Việt Nam </li>
<li> TVC kem dưỡng ẩm Ice Sun </li>
<li> TVC liên kết giữa Siêu thị điện máy Nguyễn Kim và hệ thống rạp phim Galaxy </li>
<li> Viral clip Galaxy Note 8 </li>
<li> Viral clip Bánh Goody của Bibica </li>
<li> Phim ngắn “Lam” của Đạo diễn Hoàng Nhật Nam </li>
<li> Show thời trang “Hành Trình Về Phương Đông” của nhà thiết kế Huỳnh Hiểu Long </li>
<li> Show thời trang “Junior Fashion show” của trường đào tạo người mẫu Xuân Lan </li>
<li> Event “Ra mắt tập đoàn bất động sản Alpha King” tại Dinh Độc Lập </li>
<li> Event “Saigon Rugby” (giải bóng bầu dục duy nhất tại Việt Nam) </li>
<li> Event “Happy At Work 2017” (hội nghị nhân sự lớn nhất Việt Nam) </li>
<li> Chương trình truyền hình “Du Lịch Và Ẩm Thực” phát sóng hàng tuần trên VTV4 </li>
<strong>Đạo diễn của:</strong>
<li> + MV “Hai ta đã bao lâu?” (nhạc sĩ Hoài An, do ca sĩ Dương Ánh Nga và Long Ca trình bày) </li>
<li> + MV “Chợt Nhớ Tình Đầu” (nhạc sĩ Hoàng Luân, do Hot boy trà sữa Thách Thức Danh Hài trình bày) </li>
<li> + Phim ngắn “Đi Qua Cơn Mê” </li>
<li> + Phim ngắn “Xe ôm, em dám yêu không?” </li>
<li> + TVC Quạt Làm Mát Không Khí Boss </li>
<li> + Chương trình truyền hình “Bốn Mùa Yêu Thương” phát hàng tuần trên VTV2 </li>
<li> + Kênh youtube “Rainbow Crafts” </li>
Và nhiều dự án khác…
            `
    },
    {
        humanId: "hm-2",
        humanName: "Sỹ Tuấn",
        humanTitle: "<p>Film Director - D.P - Camera Operator</p>",
        humanImage: "human-sy-tuan.jpg",
        humanFacebook: "",
        humanInstagram: "",
        humanDescEng: `
<strong> Picture Director of:</strong>
<li> TVC Joylada </li>
<li> Viral Takasimaya </li>
<li> TVC Mailinh Group </li>
<li> TVC Amoon Spa </li>
<li> TVC Beauty Salon Thiện Mỹ </li>
<li> TVC Pandora city </li>
<li> Self-Introduction Vanhanhmail </li>
<strong>Camera Operator Of:</strong>
<li>TVC Vĩnh Tiến</li>
<li>TVC Coffee 1$</li>
<li>TVC Mplex</li>
<li>TVC Coffee Factory</li>
<li>Paramount channel Vietnam</li>
<li>MTV Vietnam</li>
<li>Live show MTV connection (MTV viet nam)</li>
<li>Live show Hennessy very special</li>
<li>Live show Sky connection Vietjet air</li>
<li>Game show Miss Sinh viên</li>
<li>Game show Ngôi Sao xanh</li>
<li>Fashion show</li>
<li>Live show oppo</li>
<li>Live show Realme</li>
<li>Live show Đại nhạc hội IMC</li>
<li>Game show Thách thức danh hài</li>
<li>Game show Người hùng tí hon</li>
<li>Game show Biệt tài tí hon</li>
<li>Game show Giọng ải giọng ai</li>
<li>Game show Mảnh ghép tình yêu</li>
<li>Game show Tường lửa</li>
<li>Game show Nhóc cưng siêu đẳng</li>
<li>Game show Tình yêu hoàn mỹ</li>
<li>Tv show, Talk show, Documetary Movie, Event, Beauty...</li>
        `,
        humanDesc:
            `
<strong> Đạo diễn hình ảnh của:</strong>
<li> TVC Joylada </li>
<li> Viral Takasimaya </li>
<li> TVC Mailinh Group </li>
<li> TVC Amoon Spa </li>
<li> TVC Thẩm mỹ viện Thiện Mỹ </li>
<li> TVC Pandora city </li>
<li> Tự giới thiệu Vanhanhmail </li><strong>Camera Operator của:</strong>
<li>TVC Vĩnh Tiến</li>
<li>TVC Coffee 1$</li>
<li>TVC Mplex</li>
<li>TVC Coffee Factory</li>
<li>Paramount channel Vietnam</li>
<li>MTV Vietnam</li>
<li>Live show MTV connection (MTV viet nam)</li>
<li>Live show Hennessy very special</li>
<li>Live show Sky connection Vietjet air</li>
<li>Game show Miss Sinh viên</li>
<li>Game show Ngôi Sao xanh</li>
<li>Fashion show</li>
<li>Live show oppo</li>
<li>Live show Realme</li>
<li>Live show Đại nhạc hội IMC</li>
<li>Game show Thách thức danh hài</li>
<li>Game show Người hùng tí hon</li>
<li>Game show Biệt tài tí hon</li>
<li>Game show Giọng ải giọng ai</li>
<li>Game show Mảnh ghép tình yêu</li>
<li>Game show Tường lửa</li>
<li>Game show Nhóc cưng siêu đẳng</li>
<li>Game show Tình yêu hoàn mỹ</li>
<li>Tv show, Talk show, Phim tài liệu, Event, Beauty...</li>
            `,
    },
    {
        humanId: "hm-3",
        humanName: "Nguyễn Tuấn Anh",
        humanTitle: "<p>D.P - Camera Operator</p>",
        humanImage: "human-tuan-anh.jpg",
        humanFacebook: "",
        humanInstagram: "",
        humanDescEng: `
<strong>Picture Director of:</strong>
<li>MV Nắm Tay Khi Mưa Đến – Singer Ái Phương</li>
<li>MV Anh Không Theo Đuổi Em Nữa – Singer Thanh Duy</li>
<li>MV Đâu Ai Ngờ - Singer Chi Dân</li>
<li>MV Chẳng Sao Đâu – Singer Việt Athen X San</li>
<li>MV Tình Yêu Chậm Trễ - Singer Monstar from ST.319</li>
<li>MV Hai Ta Đã Bao Lâu? – Singer Dương Ánh Nga & Long Ca</li>
<li>TVC Chào Mừng Sinh Nhật Việt Nam 2/9 của Siêu chợ Sen Đỏ</li>
<li>TVC Lime Cosmetic</li>
<li>Viral Lime Cosmetic 2018</li>
<li>Gameshow Kỳ Án Cung Diên Thọ</li>
<strong>Cameraman for the other projects:</strong>
<li> MV Một Vòng Tay, Ngàn Lời Yêu – Singer Mỹ Tâm </li>
<li> MV Yêu Từ Phía Xa – Singer Chi Dân </li>
<li> MV Live For This Moment – Singer Hương Tràm </li>
<li>MV Người Lạ Thân Quen – Singer Thanh Duy</li>
<li>TVC Cambrigde Assessment English</li>
<li>Viral Tết Sao Cho Ngọt? – Tết chỉ “NGỌT” Khi Đượm Vị Chân Tình</li>
<li>Bật Mí Bí Kíp Tán Crush của Jun Vũ</li>Và nhiều dự án khác…
        `,
        humanDesc:
            `
<strong> Đạo diễn hình ảnh của:</strong>
<li>MV Nắm Tay Khi Mưa Đến – Ca sĩ Ái Phương</li>
<li>MV Anh Không Theo Đuổi Em Nữa – Ca sĩ Thanh Duy</li>
<li>MV Đâu Ai Ngờ - Ca sĩ Chi Dân</li>
<li>MV Chẳng Sao Đâu – Ca sĩ Việt Athen X San</li>
<li>MV Tình Yêu Chậm Trễ - Ca sĩ Monstar from ST.319</li>
<li>MV Hai Ta Đã Bao Lâu? – Ca sĩ Dương Ánh Nga & Long Ca</li>
<li>TVC Chào Mừng Sinh Nhật Việt Nam 2/9 của Siêu chợ Sen Đỏ</li>
<li>TVC Lime Cosmetic</li>
<li>Viral Lime Cosmetic 2018</li>
<li>Gameshow Kỳ Án Cung Diên Thọ</li><strong>Cameraman cho các dự án:</strong>
<li> MV Một Vòng Tay, Ngàn Lời Yêu – Ca sĩ Mỹ Tâm </li>
<li> MV Yêu Từ Phía Xa – Ca Sĩ Chi Dân </li>
<li> MV Live For This Moment – Ca sĩ Hương Tràm </li>
<li>MV Người Lạ Thân Quen – Ca sĩ Thanh Duy</li>
<li>TVC Cambrigde Assessment English</li>
<li>Viral Tết Sao Cho Ngọt? – Tết chỉ “NGỌT” Khi Đượm Vị Chân Tình</li>
<li>Bật Mí Bí Kíp Tán Crush của Jun Vũ</li>Và nhiều dự án khác…
            `,
    },
    {
        humanId: "hm-4",
        humanName: "Nguyệt Trang",
        humanTitle: "<p>Script Writer - Assistant Producer</p>",
        humanImage: "human-nguyet-trang.png",
        humanFacebook: "",
        humanInstagram: "",
        humanDescEng: `
<strong> Writer of:</strong>
<li> Sitcom Nhà Là Nơi Để Về </li>
<li> Sitcom Gia đình hết sảy </li>
<li>Sitcom Cười lên vợ ơi</li>
<li>Drama 1 chàng 3 nàng</li>
<li>Drama Vẫn có em bên đời</li>
<li>Drama Tình Như Vô Hình</li>
<li>Sitcom Chồng à VỢ ơi</li>
<li>Sitcom Cặp đôi nội chiến</li>
<li>Sitcom Văn phòng ma nữ</li>
<li>Dâu Tây Đón Tết</li>
<li>Drama Dâu Tây Đón Tết 2</li>
<strong>Writer of:</strong>
<li> ZPOP DREAM VIỆT NAM </li>
<li> TV show Ô cửa trái tim </li>
<li> TV show Bữa cơm gia đình </li>
And many more projects...
        `,
        humanDesc:
            `
<strong> Biên kịch của:</strong>
<li> Phim Sitcom Nhà Là Nơi Để Về </li>
<li> Sitcom Gia đình hết sảy </li>
<li>Sitcom Cười lên vợ ơi</li>
<li>Drama 1 chàng 3 nàng</li>
<li>Drama Vẫn có em bên đời</li>
<li>Drama Tình Như Vô Hình</li>
<li>Sitcom Chồng à VỢ ơi</li>
<li>Sitcom Cặp đôi nội chiến</li>
<li>Sitcom Văn phòng ma nữ</li>
<li>Dâu Tây Đón Tết</li>
<li>Drama Dâu Tây Đón Tết 2</li><strong>Biên tập của:</strong>
<li> ZPOP DREAM VIỆT NAM </li>
<li> TV show Ô cửa trái tim </li>
<li> TV show Bữa cơm gia đình </li>Và nhiều dự án khác…
            `,
    },
    {
        humanId: "hm-5",
        humanName: "Lan Nguyên",
        humanTitle: "<p>Script Writer - Art Designer</p>",
        humanImage: "human-lan-nguyen.png",
        humanFacebook: "",
        humanInstagram: "",
        humanDescEng: `
<li> Graduate at Second Position at Architecture University in HCMC. Bachelor Degree at Industry Art. </li>
<li> 2014:Trainning with Lumiere Mondediff (Pháp) </li>
<li>2015: Participated Asia Doc</li>
<li>2014 - 2017: Television editor in Documentary reportage Department</li>
<li>2018 - 2019: Television editor - Movie screenwriter.</li>
<strong>Worked with brands:</strong>
<li> Vespa - Nàng project </li>
<li> Toyota </li>
<li> Fusion Suites </li>
And many more projects...
        `,
        humanDesc:
            `       
<li> Tốt nghiệp Á khoa trường ĐH Kiến trúc TPHCM , cử nhân Mỹ Thuật công nghiệp. </li>
<li> 2014: Học làm phim cùng Lumiere Mondediff (Pháp) </li>
<li>2015: Tham gia Asia Doc</li>
<li>2014 - 2017: Biên tập viên truyền hình chuyên mảng Phóng sự tài liệu</li>
<li>2018 - 2019: Biên tập viên truyền hình - Biên kịch điện ảnh.</li><strong>Làm việc với các nhãn hàng:</strong>
<li> Vespa - Nàng project </li>
<li> Toyota </li>
<li> Fusion Suites </li>Và nhiều dự án khác…
            `,
    },
];
const humanMap = new Map();
humans.forEach(n => humanMap.set(n.humanId, n));
/* SẢN PHẨM */
const products = [
    {
        productId: "tvc",
        productName: "TVC - viral",
        productNameEng: "TVC - viral",
        productVideo: "0wUnbxDRzrU",
        productYoutube: "PLjvruBiuDjAaf-bmpuaDytD04s5UHAxyz",
        productImage: "sp-1.jpg",
    },
    {
        productId: "film",
        productName: "Phim",
        productNameEng: "Film",
        productVideo: "F1wK0qqohsc",
        productYoutube: "PLjvruBiuDjAaNDeG57gZYrocegrOVC-WU",
        productImage: "sp-2.jpg",
    },
    {
        productId: "tv-show",
        productName: "TV Show - Youtube Channel",
        productNameEng: "TV Show - Youtube Channel",
        productVideo: "eSk6ud-GWZE",
        productYoutube:
            "https://www.youtube.com/channel/UCWXrx8EldKEgeP1KpbmUjBQ/videos",
        productImage: "sp-3.jpg",
    },
    {
        productId: "event",
        productName: "Sự kiện - Livestream",
        productNameEng: "Event - Livestream",
        productVideo: "ZSQqE2FWjF8",
        productYoutube: "PLjvruBiuDjAaYTJAgnhYIwJ1u4SO0Xrnh",
        productImage: "sp-4.jpg",
    },
    {
        productId: "food",
        productName: "Food - Cooking",
        productNameEng: "Food - Cooking",
        productVideo: "MR24D5E6LHs",
        productYoutube: "PLjvruBiuDjAarCj1V9n4ExaonNEJjSZ3W",
        productImage: "sp-5.jpg",
    },
    {
        productId: "graphic",
        productName: "Motion Graphic",
        productNameEng: "Motion Graphic",
        productVideo: "_VN-6dGzSBo",
        productYoutube: "PLjvruBiuDjAY57zLnKwuxWUObbmjSejz0",
        productImage: "sp-6.jpg",
    },
];

const services = [
    {
        serviceId: 0,
        serviceName: "Sản xuất TVC <br> Phim Giới Thiệu Doanh Nghiệp",
        serviceNameEng: "Producing TVC <br> Film Introduction Business",
        serviceImage: "dv-1.jpg",
        serviceDescEng: `
<br> Why are 98% of consumers watching TVCs and self-introduction videos?
Why do marketing experts always insist that businesses should make their own advertisement?
<br> Because of its outstanding benefits:
<li> Film advertising (also known as TVC) is a very popular and rich form of communication. Delivers effective
    audiovisual effects in a moderate amount of time.</li>
<li> Based on statistic that:
    <ol class="ol-circle">
        <li> 72% of businesses that use video from the internet significantly improve their chances of connecting
            customers, </li>
        <li> 64% more effive in receiving new order since using TVC, </li>
        <li> 93% of marketers say their customers understand products more easily through videos. </li>
    </ol>
</li>
<li> The customer after watching TVC: <ol class="ol-circle">
        <li> 74% of them fully understand products and services after watching product introduction videos, </li>
        <li> 77% completely convinced of a purchase decision after watching TVC or a self-introduction video, </li>
        <li> 70% of customers said that they always immediately share introductory videos or TVCs to their friends
            through social networking channels. </li>
    </ol>
</li>
<li> A TVC Advertising is the perfect combination of image, sound as well as body language, ... creating more attraction
    when strongly impacting the senses: seeing, listening and feeling. </li>
<li> Diverse forms of transmission: traditional channels such as TV, Internet advertising, in elevators, in public
    places, product launch press conferences, ... </li>
<li> Advertising film is a complex medium, needing a lot of resources involved in implementation, so efficiency is
    always the resonance of an organization of ideas to ensure effectiveness </li>
<li> An impressive advertising film will bring the brand to a large audience. </li>
But what is the difficulty of implementing a TVC:
<li> In a short period of time, you must convey all the message about the product or business, and bring emotions to the
    viewers. </li>
<li> Needs a lot of resources, especially a professional creative team. </li>
<li> A complete investment from the smallest details to make the perfect impression on the customer. </li>
<li> High funding for implementation. But rest assured, the effect brought about by it will be worth the money when rice
    sales break through. </li>
<br> Are you a business? Are you preparing for a new product? Have you prepared a decent budget to bring customers'
emotions with a TVC and earn huge sales?
<br> <br> Please contact Feeling Media so we can advise you.
        `,
        serviceDesc: `
<br>Vì sao có 98% người tiêu dùng xem các TVC và video tự giới thiệu ? 
<br>Vì sao các chuyên gia marketing vẫn luôn nhấn mạnh rằng doanh nghiệp vẫn nên làm phim quảng cáo cho riêng mình? 
<br>Bởi vì các ưu điểm vượt trội của nó: 
<li> Phim quảng cáo (hay còn gọi là TVC) chính là một hình thức truyền thông phổ biến vô cùng phong phú và xúc tích. Đem lại hiệu quả nghe nhìn trong một khoảng thời gian vừa phải. 
</li>
<li> Theo thống kê thì: 
    <ol class="ol-circle">
        <li>72% việc kinh doanh sử dụng video từ internet cải thiện đáng kể về cơ hội kết nối khách hàng,</li>
        <li>64% hiệu quả đơn hàng hơn kể từ khi sử dụng TVC,</li>
        <li>93% những người marketing cho biết là khách hàng của họ hiểu về sản phẩm dễ dàng hơn thông qua các video.</li>
    </ol>
</li>
<li> Các đối tượng khách hàng sau khi xem TVC thì: <ol class="ol-circle">
        <li>74% họ hoàn toàn thấu hiểu về sản phẩm và dịch vụ sau khi xem các video giới thiệu sản phẩm,</li>
        <li>77% hoàn toàn bị thuyết phục đưa ra quyết định mua hang sau khi đã xem TVC hay video tự giới thiệu,</li>
        <li>70% các khách hàng cho biết, họ luôn chia sẻ ngay các video giới thiệu hoặc TVC cho bạn bè thông qua các kênh mạng xã hội.</li>
    </ol>
</li>
<li> Một TVC Quảng Cáo là sự kết hợp hoàn hảo giữa hình ảnh, âm thanh cũng như ngôn ngữ cơ thể,… tạo sự thu hút hơn khi tác động mạnh mẽ tới đa giác quan: nhìn, nghe và cảm nhận. </li>
<li>Hình thức truyền tải đa dạng: kênh truyền thống như TV, quảng cáo trên Internet, trong thang máy, tại các địa điểm công cộng, họp báo ra mắt sản phẩm, …</li>
<li>Phim quảng cáo là một phương tiện phức hợp, cần nhiều nguồn lực tham gia thực hiện, vì vậy tính hiệu quả luôn là sự cộng hưởng của một tổ chức các ý tưởng để đảm bảo hiệu quả</li>
<li>Một phim quảng cáo ấn tượng sẽ đưa được thương hiệu đến với đông đảo khách hàng.</li>
<br>Nhưng điều khó khăn khi thực hiện một TVC là gì: 
<li>Trong một khoảng thời gian ngắn phải truyền tải hết thông điệp về sản phẩm hoặc doanh nghiệp, đồng thời mang lại cảm xúc cho người xem.</li>
<li>Cần nhiều nguồn lực, đặc biệt là đội ngũ sáng tạo chuyên nghiệp.</li>
<li>Sự đầu tư chỉnh chu từ những chi tiết nhỏ nhất để có thể gây ấn tượng hoàn hảo với khách hàng.</li>
<li>Kinh phí thực hiện cao. Nhưng yên tâm, hiệu quả mang lại từ nó sẽ đáng đồng tiền bát gạo khi doanh số bán hàng đột phá.</li>
<br>Bạn là doanh nghiệp? Bạn chuẩn bị ra sản phẩm mới? Bạn đã chuẩn bị một nguồn ngân sách kha khá để có thể đem lại cảm xúc cho khách hàng bằng một TVC và thu về doanh số bán hàng khủng? 
<br><br>Hãy liên hệ với Feeling Media để chúng tôi có thể tư vấn cho bạn.
        `,
    },
    {
        serviceId: 1,
        serviceName: "Sản xuất phim",
        serviceNameEng: "Producing Film",
        serviceImage: "dv-2.jpg",
        serviceDescEng: `
Tell us your story, we will rewrite it in visual language.
<br> Why do people often like to watch movies?
<li> Because the content of the film reflects on the perception of the viewer makes them curious, interested and then receive and think about the hidden issues in the film, and their emotions and thoughts will change. change. From there improve the awareness </li>
<li> Movies bring smiles and engagement. Remember when you were watching comedy, were you going to get caught up in it, the humorous details would make you laugh naturally? Right? </li>
<li> Great movies will inspire you in life and work. You will realize that each person has his or her own path that suits your qualities and talents. It will motivate you to look at life from different angles, and at the same time, give you the motivation to strive for everything, respect for those around you </li>
<br> Do you have a story and want to tell people through realistic frames and sounds?
<br> We think you are in need of a professional and dedicated team like us.
<br> <br> Please contact Feeling Media so we can advise you.
<br> <br> Lightly mention what has been said: "Tell us your story, we will rewrite it in visual language."
        `,
        serviceDesc: `
Hãy kể cho chúng tôi nghe câu chuyện của bạn, chúng tôi sẽ viết lại nó bằng ngôn ngữ hình ảnh. 
<br>Vì sao mọi người thường thích xem phim? 
<li>Vì nội dung phim phản ánh vào nhận thức của người xem khiến họ tò mò, thích thú rồi tiếp nhận và suy nghĩ về những vấn đề ẩn chứa trong bộ phim, đồng thời cảm xúc và suy nghĩ của họ cũng sẽ thay đổi. Từ đó nâng cao khả năng nhận thức</li>
<li>Phim mang đến nụ cười và sự gắn kết. Hãy nhớ lại những lúc bạn chăm chú xem phim hài, có phải bạn sẽ bị cuốn theo nó, những chi tiết hài hước sẽ khiến bạn bật cười rất tự nhiên đúng không?</li>
<li>Những bộ phim hay sẽ truyền cảm hứng cho bạn trong cuộc sống và công việc. Bạn sẽ nhận ra rằng mỗi người có những con đường riêng phù hợp với tố chất và tài năng của mình. Điều đó sẽ thúc đẩy bạn nhìn cuộc đời với nhiều góc độ khác nhau, đồng thời, truyền cho bạn động lực để phấn đấu trong mọi việc, biết cách tôn trọng những người xung quanh</li>
<br>Bạn có một câu chuyện và muốn kể cho mọi người nghe qua những khung hình, những âm thanh chân thật?
<br>Chúng tôi nghĩ bạn đang cần một ekip chuyên nghiệp và tận tâm như chúng tôi đấy. 
<br><br>Hãy liên hệ với Feeling Media để chúng tôi có thể tư vấn cho bạn. 
<br><br>Nhắc nhẹ điều đã nói: “Hãy kể cho chúng tôi nghe câu chuyện của bạn, chúng tôi sẽ viết lại nó bằng ngôn ngữ hình ảnh.”
            `,
    },
    {
        serviceId: 2,
        serviceName: "TV show - Kênh youtube",
        serviceNameEng: "TV show - Youtube Channel",
        serviceImage: "dv-3.jpg",
        serviceDescEng: `
Youtube is the most popular video entertainment medium today! That is an affirmation.
<br> <br> And YouTube also makes you money from it. Why not try to try?
<br> <br> You started being a YouTuber, or did you want to build your own content channel to post on youtbe and make money from that video.
<br> <br> Whoever you are, contact Feeling Media.
<br> <br> You have ideas, we have the team to build your ideas in more detail in each video.
<br> <br> Do you have a specific idea for each video but don't have a professional team to realize your idea? We have a team of directors, writers, cameramen, montagers with full equipment to build you one or a video content system.
<br> <br> Call us so we can listen to your inquiries and specific advice.
<br> <br> Maybe you will be a successful Youtuber after creating your own content system.
        `,
        serviceDesc: `
Youtube là phương tiện giải trí bằng video thông dụng nhất hiện nay! Đó là một lời khẳng định. 
<br><br>Và Youtube cũng cho bạn kiếm tiền từ nó. Ngại gì không thử? 
<br><br>Bạn bắt đầu làm một Youtuber, hay bạn đã làm và đang mong muốn xây dựng những kênh nội dung cho riêng mình để đăng tải trên youtbe và kiếm tiền từ video đó. 
<br><br>Dù bạn có là ai thì cũng nên liên hệ với Feeling Media. 
<br><br>Bạn có ý tưởng, chúng tôi có đội ngũ để xây dựng ý tưởng của bạn chi tiết hơn trong từng video. 
<br><br>Bạn đã có ý tưởng cụ thể cho từng video nhưng không có ekip chuyên nghiệp để thực hiện hoá ý tưởng của bạn? Chúng tôi thì có đội ngũ từ đạo diễn, biên kịch, quay phim, dựng phim với thiết bị đầy đủ để xây dựng cho bạn một hoặc một hệ thống nội dung bằng video. 
<br><br>Hãy gọi cho chúng tôi để chúng tôi có thể lắng nghe yêu cầu của bạn và tư vấn cụ thể. 
<br><br>Có thể bạn sẽ là một Youtuber thành công sau khi đã tạo ra một hệ thống nội dung cho riêng mình.
            `,
    },
    {
        serviceId: 3,
        serviceName: "Event filming - Livestream",
        serviceNameEng: "Event - Livestream",
        serviceImage: "dv-4.jpg",
        serviceDescEng: `
Are you a business or you have a new product to promote, have you thought about hosting an event? Let check out the benefits from hosting the event:
<li> Organizing events to help effectively promote the brand </li>
<li> Help the brand rise to a new level </li>
<li> Bring in a source of revenue </li>
<li> Creating business opportunities </li>
<li> Increase employment opportunities </li>
<br> Too many benefits. But unfortunately that event only happens in a certain area (hall, stadium, or a certain area), in a certain period of time (one day, several days, or even months. ). So it can only reach a certain number of customers.
How can we help you?
<br> <br> We will record the special moments of your event. You will have an interesting video to document as an event where your company spent a lot of money and effort to organize, a beautiful memory. And these images when sending to your customers, partners, employees, the effect will be very surprising, you will become professional and gain more trust from them.
<br> <br> We will also help you live stream at your event through social networking platforms or websites. There will be many people from all over the world attending your event without you having to rent an extra space to book their seats, right?
<br> <br> Too reasonable! So, call Feeling Media, we will bring the event you worked hard to more people and store the beautiful moments in that event.
        `,
        serviceDesc: `
Bạn là một doanh nghiệp hoặc bạn có một sản phẩm mới muốn quảng bá, bạn đã nghĩ đến việc tổ chức một sự kiện chưa? Cùng xem qua lợi ích từ việc tổ chức sự kiện nhé: 
<li>Tổ chức sự kiện giúp quảng bá hiệu quả cho thương hiệu</li>
<li>Giúp thương hiệu được nâng lên một tầm cao mới</li>
<li>Mang lại nguồn doanh thu</li>
<li>Tạo ra cơ hội kinh doanh</li>
<li>Tăng cơ hội việc làm</li>
<br>Quá nhiều lợi ích. Nhưng tiếc là sự kiện đó chỉ xảy ra trong một phạm vi (hội trường,sân vận động, hoặc một khu vực nhất định nào đó), trong một khoảng thời gian nhất định (một ngày, vài ngày, hay thậm chí vài tháng). Nên nó cũng chỉ tiếp cận được một lượng khách hàng nhất định. 
<br><br>Chúng tôi giúp được gì cho bạn?
<br><br>Chúng tôi sẽ ghi hình lại các khoảnh khắc đặc biệt trong sự kiện của bạn. Bạn sẽ có một video hấp dẫn để dành làm tư liệu về một sự kiện mà công ty mình đã bỏ rất nhiều tiền của và công sức để tổ chức, một kỷ niệm đẹp. Và những hình ảnh này khi gửi cho khách hàng, đối tác, nhân viên của các bạn thì hiệu quả sẽ rất bất ngờ đó, bạn sẽ trở nên chuyên nghiệp và chiếm thêm nhiều niềm tin từ họ. 
<br><br>Chúng tôi cũng sẽ giúp bạn live stream trực tiếp tại sự kiện của các bạn thông qua các nền tảng mạng xã hội hoặc website. Sẽ có nhiều người ở khắp nơi trên thế giới tham dự sự kiện của các bạn mà bạn không cần phải thuê thêm một phần diện tích để đặt ghế ngồi cho họ phải không nào? 
<br><br>Quá hợp lý! Vậy nên, hãy gọi cho Feeling Media, chúng tôi sẽ đưa sự kiện mà bạn dày công tổ chức đến với nhiều người hơn và lưu trữ những khoảnh khắc đẹp trong sự kiện đó.
            `,
    },
    {
        serviceId: 4,
        serviceName: "Video & Hình Ảnh ngành F&B",
        serviceNameEng: "Video & Image for F&B",
        serviceImage: "dv-5.jpg",
        serviceDescEng: `
Food service industry is very "hot", and devotees eat and drink more and more.
<br> <br> How can your restaurant and bar compete in this fierce race?
<br> <br> Now that people eat with their eyes, do you believe it?
<br> <br> The culinary experts are very focused on "beautifying" the food, because before tasting the dish, you need to "feel good" first.
<br> <br> Customers who "feel good" will buy and order online.
<br> <br> If you want to give your food and drink "delicious", let Feeling Media help you.
<br> <br> We have a team of stylish food, food photographer, experienced cameraman, knowledgeable about food, how to arrange food, food, drinks so that viewers "feel good".
<br> <br> In this audiovisual era, you want to win against your competitors and let customers know how your product "tastes good", let customers "feel good" first.
<br> <br> If you are a restaurant owner, a coffee shop owner, ... don't hesitate to give us a call.
<br> <br> We will help your future customers "enjoy" your product.
        `,
        serviceDesc: `
Ngành dịch vụ ăn uống đang rất “hot”, và các tín đồ ăn uống ngày càng nhiều. 
<br><br>Làm sao để nhà hàng, quán của bạn cạnh tranh được trong cuộc đua khốc liệt này? 
<br><br>Bây giờ người ta ăn bằng mắt là chính, bạn có tin không?
<br><br>Những chuyên gia ẩm thực đều rất chú trọng về việc "làm đẹp" món ăn, vì trước khi nếm món ăn, bạn cần “thấy ngon” cái đã. 
<br><br>Khách hàng “thấy ngon” thì sẽ mua, sẽ đặt hàng online. 
<br><br>Mà muốn cho thức ăn, đồ uống của bạn “thấy ngon” thì hãy để Feeling Media giúp bạn. 
<br><br>Chúng tôi có đội ngũ food stylish, food photographer, food cameraman kinh nghiệm, hiểu biết về ẩm thực, về cách bày trí thực phẩm, món ăn, thức uống sao cho người xem “thấy ngon”.
<br><br>Trong thời đại nghe nhìn bây giờ, bạn muốn thắng đối thủ và cho thực khách biết sản phẩm của bạn “ăn ngon” như thế nào thì hãy để thực khách “thấy ngon” trước đã. 
<br><br>Nếu bạn là chủ nhà hàng, chủ quán coffee,… đừng ngần ngại gọi cho chúng tôi nhé. 
<br><br>Chúng tôi sẽ giúp thực khách tương lai của bạn “thấy ngon” với sản phẩm của bạn.
            `,
    },
    {
        serviceId: 5,
        serviceName: "Hậu kỳ - Motion Graphic",
        serviceNameEng: "Post production - Motion Graphic",
        serviceImage: "dv-6.jpg",
        serviceDescEng: `
Have you ever been drawn to videos with humorous hand-drawn images, or epic visual effects?
<br> <br> Do you want a video that shows your skills or cute graphics?
<br> <br> Feeling Media will help you.
<br> <br> With a team of professional, skilled, experienced and creative designers and editors, we will create videos for you with great effects and exciting sounds, or pop-ups, infor graphics with sound, and witty effects.
<br> <br> These videos will definitely make you more professional in the eyes of your customers.
        `,
        serviceDesc: `
Bạn đã từng bị thu hút bởi những video có những hình ảnh vẽ tay hài hước, hoặc những kỹ xảo hình ảnh hoành tráng chưa?
<br><br>Bạn muốn có một video thể hiện trình độ kỹ xảo hoặc những nét vẽ graphic dễ thương như vậy không?
<br><br>Feeling Media sẽ giúp bạn. 
<br><br>Với đội ngũ Designer và Editor chuyên nghiệp, tay nghề cao, nhiều kinh nghiệm và sáng tạo, chúng tôi sẽ tạo ra cho bạn những video với những kỹ xảo hoành tráng kèm theo những âm thanh hào hứng, hoặc những pop-up, infor graphic kèm âm thanh, hiệu ứng dí dỏm. 
<br><br>Chắc chắn những video này sẽ làm cho bạn chuyên nghiệp hơn trong mắt khách hàng của bạn đấy.
            `,
    },
    {
        serviceId: 6,
        serviceName: "Cho thuê studio",
        serviceNameEng: "Studio for rent",
        serviceImage: "dv-7.jpg",
        serviceDescEng: `
<br>Bạn là streamer? 
<br><br>Bạn đang quản lý một shop online nào đó? 
<br><br>Bạn đang cần tương tác với khách hàng?
<br><br>Bạn đang tìm một địa điểm để chụp ảnh lookbook, chụp ảnh gia đình, chụp ảnh sản phẩm,…? 
<br><br>Hay bạn đang cần quay một talkshow mà chưa có địa điểm phù hợp? 
<br><br>Hãy đến với Feeling Media bạn sẽ được đáp ứng những nhu cầu này.
<br><br>Chúng tôi chuyên cho thuê studio để phục vụ các nhu cầu về hình ảnh của bạn (quay phim, chụp ảnh, livestream, talkshow). 
<br><br>Giá cả phù hợp, đạo cụ đầy đủ, có phục vụ nước uống tuỳ chọn.  
<br><br>Hãy gọi cho chúng tôi nếu thấy phù hợp với nhu cầu của bạn nhé!
        `,
        serviceDesc: `
<br>Bạn là streamer? 
<br><br>Bạn đang quản lý một shop online nào đó? 
<br><br>Bạn đang cần tương tác với khách hàng?
<br><br>Bạn đang tìm một địa điểm để chụp ảnh lookbook, chụp ảnh gia đình, chụp ảnh sản phẩm,…? 
<br><br>Hay bạn đang cần quay một talkshow mà chưa có địa điểm phù hợp? 
<br><br>Hãy đến với Feeling Media bạn sẽ được đáp ứng những nhu cầu này.
<br><br>Chúng tôi chuyên cho thuê studio để phục vụ các nhu cầu về hình ảnh của bạn (quay phim, chụp ảnh, livestream, talkshow). 
<br><br>Giá cả phù hợp, đạo cụ đầy đủ, có phục vụ nước uống tuỳ chọn.  
<br><br>Hãy gọi cho chúng tôi nếu thấy phù hợp với nhu cầu của bạn nhé!
            `,
    },
    {
        serviceId: 7,
        serviceName: "Digital Marketing",
        serviceNameEng: "Digital Marketing",
        serviceImage: "dv-8.jpg",
        serviceDescEng: `
Are we living in the online marketing era?
<br> <br> So if you already have a video and a picture, how do you get it to the most people?
<br> <br> Don't worry, Feeling Media will help you with this last stitch.
<br> <br> We are ready to build you the right packages for your budget, reaching the right target audience of your industry.
<br> <br> And your job is just waiting to reap the results of that approach by getting tired.
<br> <br> Give us a call whenever you need us!
        `,
        serviceDesc: `
Chúng ta đang sống trong thời đại marketing online đúng không? 
<br><br>Vậy nếu như bạn đã có video rồi và có hình ảnh rồi, nhưng phải làm sao để đưa được nó đến với nhiều người nhất? 
<br><br>Đừng lo, Feeling Media sẽ giúp bạn khâu cuối cùng này. 
<br><br>Chúng tôi sẵn sàng xây dựng cho bạn những gói phù hợp với ngân sách, tiếp cận đúng đối tượng mục tiêu ngành hàng của bạn. 
<br><br>Và việc của bạn chỉ là chờ gặt hái kết quả từ sự tiếp cận đó bằng việc ra đơn hàng mỏi tay thôi. 
<br><br>Hãy gọi cho chúng tôi bất cứ khi nào bạn cần chúng tôi nhé!
            `,
    },
];

// ĐỐI TÁC
const associates = [
    {
        assId: "dt1",
        assImage: "doitac-1.png"
    },
    {
        assId: "dt2",
        assImage: "doitac-2.png"
    },
    {
        assId: "",
        assImage: "doitac-3.png"
    },
    {
        assId: "",
        assImage: "doitac-4.png"
    },
    {
        assId: "",
        assImage: "doitac-5.png"
    },
    {
        assId: "",
        assImage: "doitac-6.png"
    },
    {
        assId: "",
        assImage: "doitac-7.png"
    },
    {
        assId: "",
        assImage: "doitac-8.png"
    },
    {
        assId: "",
        assImage: "doitac-9.png"
    },
    {
        assId: "",
        assImage: "doitac-10.png"
    }
];

const fanpages = [
    {
        name: "The Camera Studio",
        link: "https://www.facebook.com/TheCameraStudio.Official/",
        tab: "timeline",
        width: 340,
        isAdaptToContainer: "false",
    },
    {
        name: "Feeling Media",
        link: "https://www.facebook.com/feelingmediavn/",
        tab: "timeline",
        width: 340,
        isAdaptToContainer: "false",
    },
    {
        name: "The Camera House's",
        link: "https://www.facebook.com/TheCameraHouses/",
        tab: "timeline",
        width: 340,
        isAdaptToContainer: "false",
    },
];

const menus = [
    {
        menu: "Trang chủ",
        menuEng: "Home"
    },
    {
        menu: "Giới thiệu",
        menuEng: "Introduction"
    },
    {
        menu: "Đội ngũ sáng tạo",
        menuEng: "Creative team"
    },
    {
        menu: "Dịch vụ - Sản phẩm",
        menuEng: "Service - Product"
    },
    {
        menu: "Liên kết",
        menuEng: "Fanpages"
    },
    {
        menu: "Liên hệ",
        menuEng: "Contact"
    }

]
const headings = [
    {
        heading: "GIỚI THIỆU",
        headingEng: "INTRODUCTION",
    },
    {
        heading: "ĐỐI TÁC",
        headingEng: "PARTNERS",
    },
    {
        heading: "Đội ngũ sáng tạo",
        headingEng: "Creative Team",
    },
    {
        heading: "Dịch vụ",
        headingEng: "Services",
    },
    {
        heading: "Sản phẩm",
        headingEng: "Products",
    },
    {
        heading: "Liên kết với chúng tôi",
        headingEng: "Our Fanpages",
    },
    {
        heading: "Liên hệ",
        headingEng: "Contact",
    },
];

const intro = {
    introVie: `
        <p>Là đơn vị có nhiều năm kinh nghiệm trong lĩnh vực làm video quảng cáo, các show truyền hình, quảng bá sản phẩm trên các nền tảng mạng xã hội. Feeling Media đem lại cho bạn những gói dịch vụ phức hợp và riêng lẻ tuỳ theo từng nhu cầu.
        </p>
        <ul style="list-style-type:none;">
            Thế mạnh của Feeling Media
            <li>⁃	Cơ sở vật chất đầy đủ (trang thiết bị, studio, phòng hậu kỳ)</li>
            <li>⁃	Đội ngũ nhân sự chủ chốt dày dặn kinh nghiệp thực tế (Account, Đạo diễn, Biên tập, Dựng phim)</li>
            <li>⁃	Đội ngũ nhân sự trẻ sáng tạo, nhiệt huyết, bắt trend</li>
            <li>⁃	Có thể kết nối một lượng Kols lớn trên toàn quốc.</li>
        </ul>
        <p>Feeling Media cung cấp gì?</p>
        <ol>
            <li> <strong>Giải pháp quảng cáo bằng video</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Sản xuất TVC, Phim Giới Thiệu Doanh Nghiệp</li>
                    <li>⁃	Thực hiện Live Stream trên nhiều nền tảng (web, facebook, youtube,...)</li>
                    <li>⁃	Thực hiện các video mang tính viral cao (tiktok, tiểu phẩm ngắn,...)</li>
                    <li>⁃	Xây dựng và thực hiện nội dung kênh youtube đa dạng thể loại (Craft & DIY, Ẩm Thực, Beauty, Food, giới thiệu sản phẩm...)</li>
                    <li>⁃	Thực hiện Video Motion Graphic, 2D, 3D, kỹ xảo Vfx.</li>
                </ul>
            </li>
            <br>
            <li> <strong>Giải pháp quảng cáo bằng hình ảnh</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Chụp ảnh sản phẩm theo concept, chụp trên nền đơn sắc</li>
                    <li>⁃	Chụp ảnh Food, Menu nhà hàng/Quán ăn</li>
                    <li>⁃	Chụp ảnh mỹ phẩm, quần áo</li>
                    <li>⁃	Chụp ảnh người mẫu, lookbook</li>
                    <li>⁃	Chụp ảnh sự kiện</li>
                </ul>
            </li>
            <br>
            <li> <strong>Giải pháp quảng cáo bằng con người kết hợp với social media</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Mời những Kols (Nghệ sĩ, Streamer, Youtuber,...) tham gia giới thiệu sản phẩm, dịch vụ cho doanh nghiệp trên các nền tảng mạng xã hội.
                    </li>
                    <li>⁃	Đề xuất và kết nối Người nổi tiếng làm đại sứ thương hiệu cho nhãn hàng.</li>
                    <li>⁃	Tổ chức event, sự kiện, nhạc hội nhằm quảng bá doanh nghiệp.</li>
                </ul>
            </li>
        </ol>
        <p>Bạn chọn giải pháp nào?</p>
        <p>Bạn có thể kết hợp những giải pháp lại với nhau.
            <br> Hoặc bạn có thể đề xuất với chúng tôi một giải pháp mà bạn muốn.
        </p>
        <p>Tất cả đều có thể.
            <br>Feeling Media luôn đồng hành cùng bạn trong hành trình chạm tới cảm xúc của khách hàng.
        </p>
    `,
    introEng: `
        <p>Is a unit with many years of experience in the field of advertising videos, television shows, product promotion on social networking platforms. Feeling Media gives you complex and individual service packages depending on your needs.
        </p>
        <ul style="list-style-type:none;">
           Our strengths
            <li>⁃	Fully facilitated</li>
            <li>⁃	Staffs with strongly experiences in Accounting, Director, Screen Writer</li>
            <li>⁃	An enthusiastic, energetic, trendy team</li>
            <li>⁃	Can be able to connect to KOLS accross the country.</li>
        </ul>
        <p>Feeling Media provides:</p>
        <ol>
            <li> <strong>Video advertisement</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Producing TVC, Business Introduction Film</li>
                    <li>⁃	Livestream on multiple platforms(web, facebook, youtube,...)</li>
                    <li>⁃	Making viral videos (tiktok, short film,...)</li>
                    <li>⁃	Develop diverse video content on Youtube (Craft & DIY, Cuisine, Beauty, Food, introducing product...)</li>
                    <li>⁃	Develop Video Motion Graphic, 2D, 3D, VFX effect.</li>
                </ul>
            </li>
            <br>
            <li> <strong>Image advertisement</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Product photography conceptual, monochrome photography</li>
                    <li>⁃	Food photography, Restaurant menu / Restaurant</li>
                    <li>⁃	cosmetics and clothes photography</li>
                    <li>⁃	Model, Lookbook Photography</li>
                    <li>⁃	Event Photography</li>
                </ul>
            </li>
            <br>
            <li> <strong>Human in comnination with social media advertisement</strong> 
                <ul style="list-style-type: none;">
                    <li>⁃	Invite Kols (Artists, Streamer, Youtuber, ...) to introduce products and services for businesses on social networking platforms.
                    </li>
                    <li>⁃	Proposing and connecting Celebrities as brand ambassadors for brands.</li>
                    <li>⁃	Organize events, events, festivals to promote businesses.</li>
                </ul>
            </li>
        </ol>
        <p>Which solution will you opt for ?</p>
        <p>You can combine
            <br> Or you can suggest us a solution you want.
        </p>
        <p>It's possible
            <br>Feeling Media always accompanies with you in the journey to touch customers' emotions.
        </p>
    `,
};

const footer = {
    footerVie: `
    <strong> Công ty TNHH Feeling Media </strong><br>
    Tầng M, Toà Nhà An Phú Plaza, 117 - 119 Lý Chính Thắng, Phường 7, Quận 3, Thành Phố Hồ Chí Minh <br>
    Phòng hậu kỳ: The Camera Studio, 36 Đường số 11, Khu phố 6, phường Hiệp Bình Chánh, quận Thủ Đức (Khu dân cư Sông Đà)
    `,
    footerEng: `
    <strong> Feeling Media Co.,Ltd</strong><br>
    Floot M, An Phu Plaza Building, 117 - 119 Ly Chinh Thang Street, Ward 7 , District 3, HCMC <br>
    Post production room: The Camera Studio, 36 Street 11, Town 6, Hiep Binh Chanh Ward, Thu Duc District (Sông Đà Resident)
    `,
};