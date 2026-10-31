// data-heroes.js
const HEROES_DATABASE = [
    {
        id: "hero_001",
        name: "Kiếm Sư Ánh Sáng",
        title: "Thánh Kiếm Bất Diệt",
        avatarImage: "hero_001.png", // Tên file ảnh (để cùng thư mục)
        rarity: "SSR",               // "SSR", "SR", "R", "N"
        role: "Fighter",             // "Fighter", "Mage", "Tanker", "Support"
        isFeatured: true,            // true = hiện ở Trang Chủ
        
        base_stats: {
            atk: 250,
            hp: 1500,
            def: 80,
            mres: 50,
            atk_speed: 1.2
        },
        
        skills: [
            {
                name: "Thánh Kiếm Trảm",
                description: "Chém ra một luồng kiếm khí gây sát thương vật lý lên kẻ địch phía trước.",
                cooldown: 10,
                tiers: {
                    tier_1: "Gây 200% sát thương vật lý lên mục tiêu.",
                    tier_2: "Gây 250% sát thương vật lý và làm chậm 20% trong 2s.",
                    tier_3: "Gây 300% sát thương vật lý, làm chậm 30% và giảm 20% giáp.",
                    tier_4: "Gây 400% sát thương vật lý, làm choáng 1.5s và hồi 10% máu tối đa."
                }
            },
            {
                name: "Ánh Sáng Hộ Thể",
                description: "Tạo lá chắn ánh sáng bảo vệ bản thân.",
                cooldown: 15
            },
            {
                name: "Lướt Kiếm",
                description: "Lướt nhanh về phía trước, trở nên miễn nhiễm sát thương trong 0.5s.",
                cooldown: 8
            },
            {
                name: "Thức Tỉnh Thánh Kiếm",
                description: "Giải phóng sức mạnh thánh kiếm, tăng mạnh tốc độ đánh.",
                cooldown: 30
            }
        ],
        bio: "Chiến binh được chọn bởi Thánh Điện, mang trong mình thanh kiếm ánh sáng có thể xua tan mọi bóng tối."
    },
    {
        id: "hero_002",
        name: "Pháp Sư Băng Giá",
        title: "Nữ Hoàng Mùa Đông",
        avatarImage: "hero_002.png",
        rarity: "SR",
        role: "Mage",
        isFeatured: false,
        
        base_stats: {
            atk: 320,
            hp: 850,
            def: 30,
            mres: 100,
            atk_speed: 1.5
        },
        
        skills: [
            {
                name: "Mưa Băng",
                description: "Triệu hồi mưa băng rơi xuống khu vực chỉ định, gây sát thương phép.",
                cooldown: 12,
                tiers: {
                    tier_1: "Gây 150% sát thương phép diện rộng trong 2s.",
                    tier_2: "Gây 200% sát thương phép, làm chậm kẻ địch 30%.",
                    tier_3: "Gây 250% sát thương phép, 20% cơ hội đóng băng mục tiêu 1s.",
                    tier_4: "Gây 350% sát thương phép, đóng băng toàn bộ mục tiêu trúng chiêu trong 2s."
                }
            },
            {
                name: "Giáo Băng",
                description: "Bắn một ngọn giáo băng xuyên thấu kẻ địch.",
                cooldown: 6
            },
            {
                name: "Khiên Băng",
                description: "Tạo một lớp khiên bằng băng giúp hấp thụ sát thương phép.",
                cooldown: 18
            },
            {
                name: "Kỷ Băng Hà",
                description: "Đóng băng một vùng rộng lớn, giam giữ tất cả kẻ địch bên trong.",
                cooldown: 40
            }
        ],
        bio: "Sinh ra tại vùng đất vĩnh cửu băng tuyết, cô có khả năng điều khiển nhiệt độ xuống dưới cả âm độ."
    }
];