// Skills Data
const skills = [
    { name: "Dart" },
    { name: "Flutter" },
    { name: "OOP" },
    { name: "SOLID" },
    { name: "Design Patterns" },
    { name: "Git" },
    { name: "MVVM" },
    { name: "Bloc" },
    { name: "Provider" },
    { name: "Firebase" },
    { name: "REST API" },
    { name: "Web Socket" },
    { name: "Shelf" },
    { name: "CI/CD" },
    { name: "Sqflite" },
    { name: "Sqlite3" },
    { name: "Sql Cipher" },
    { name: "Hive" },
    { name: "Freezed" },
    { name: "Google APIs" },
    { name: "Google Maps" },
    { name: "Yandex MapKit" },
    { name: "Google Play" },
    { name: "App Store" },
    { name: "Clean Architecture" },
];

// Experience Data
const experience = [
    {
        id: '5',
        companyName: 'Nomakler LLC',
        jobTitle: 'Flutter Developer',
        description: 'Strategic Group',
        workingType: 'Online',
        startDate: 'May 2023',
        endDate: 'Present'
    },
    {
        id: '4',
        companyName: 'Hilol Nashr LLC',
        jobTitle: 'Flutter Developer',
        description: 'Hilol nashr',
        workingType: 'Online',
        startDate: 'May 2023',
        endDate: 'Present'
    },
    {
        id: '3',
        companyName: 'Invan Soft',
        jobTitle: 'Flutter Developer',
        description: 'Work automation and e-commerce applications. Integrations with Soliq, Humo, Click, Payme and Uzum',
        workingType: 'Full time',
        startDate: 'Apr 2022',
        endDate: 'Apr 2023'
    },
    {
        id: '2',
        companyName: 'Mirrikh Software',
        jobTitle: 'Flutter Developer',
        description: 'Mirrikh Software',
        workingType: 'Hybrid',
        startDate: 'Feb 2022',
        endDate: 'Ongoing'
    },
    {
        id: '1',
        companyName: "Najot Ta'lim",
        jobTitle: 'Teacher assistant',
        description: 'Working with the students, examining their knowledge and explaining what they miss, assessing their overall performance.',
        workingType: 'Part time',
        startDate: 'Jan 2022',
        endDate: 'Feb 2022'
    }
];

// Education Data
const education = [
    {
        id: '2',
        title: 'Flutter programming',
        school: "Najot Ta'lim",
        startDate: 'Jul 2021',
        endDate: 'Feb 2022'
    },
    {
        id: '1',
        title: 'Foundation',
        school: "Najot Ta'lim",
        startDate: 'Jan 2021',
        endDate: 'Jun 2021'
    }
];

// Projects Data
const projects = [
    {
        id: "18",
        title: "Hilol uz",
        description: "Book reading and publishing platform",
        logo: "https://play-lh.googleusercontent.com/awE1CZj4dd-3pyOET_w90Wg0wVlSX5LiozZXm7OQB1cnarW_dmEnptcEJYvCoQupyqs=w240-h480-rw",
        platforms: ["iOS", "Android"]
    },
    {
        id: "14",
        title: "Nomakler",
        description: "With our innovative 360-degree tour feature, you can explore properties from every angle, providing an immersive viewing experience from the palm of your hand.",
        logo: "https://play-lh.googleusercontent.com/AyCdzz9rfvJ7hUNI695xLp_SaBy2pxLF1Ep3ELUk8H1lxT52Y6xt1x5xgdSA_1hcwQ=w240-h480-rw",
        platforms: ["iOS", "Android"]
    },
    {
        id: "15",
        title: "Nomakler Agent",
        description: "For Agents",
        logo: "https://play-lh.googleusercontent.com/PmaAyPIKXNgpfsTQ49kET_08tmsiBVcp_l5zuyhVRmd_5LzZ3MTcFYl9LvUN93pO0EY=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "17",
        title: "Hilol eBook Desktop",
        description: "Ushbu Hilol eBook dasturi yordamida Siz e-hilolnashr.uz sahifasidan harid qilgan elektron va audio kitoblardan foydalanishingiz mumkin.",
        logo: "https://e-hilolnashr.uz/Application/images/and-1.png",
        platforms: ["Windows", "Linux"]
    },
    {
        id: "16",
        title: "Tafsiri hilol",
        description: "Hilol Nashr publishing house presenting the electronic version of the Tafsir Hilal.",
        logo: "https://play-lh.googleusercontent.com/JIMp5fBD60MDDjtFTn7uNEECOgwiqs76y8eE1WmNl12PeBnCps-3VmYVPhFQgJZm874=w240-h480-rw",
        platforms: ["iOS", "Android"]
    },
    {
        id: "9",
        title: "Invan POS",
        description: "Desktop application for POS (Point of sale).",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: ["Windows"]
    },
    {
        id: "13",
        title: "Opke Delivery",
        description: "Eltib beruvchilar uchun ilova",
        logo: "https://play-lh.googleusercontent.com/Rtqz85XdY5bFI4TBJm-Hy6yHgwN0Job4OfXhc6eaSfV3u43PTcVAUHHxQuDFX4YbZXc=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "10",
        title: "InCom (Invan communicator)",
        description: "Integration with Soliq",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: ["Windows"]
    },
    {
        id: "1",
        title: "Tiin Loyalty",
        description: "Application Loyalty Tiin market",
        logo: "https://play-lh.googleusercontent.com/Klj3MYGqK6Tqt5Mjj9er7-JIXsGdChxXm4PiWUjm55NfF5tgdwIZL9-u_xf_9l9C79Td=w240-h480-rw",
        platforms: ["Android", "iOS"]
    },
    {
        id: "4",
        title: "Inventory App",
        description: "Multi-user app for stock management and tracking sales and purchases. Especially useful for small retailers or warehouses.",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "2",
        title: "Beeto",
        description: "E-commerce application for Tiin market",
        logo: "https://play-lh.googleusercontent.com/tpl8g5aOVbPyT_5sL7bJjRibnM3LjnDdbYir4X4YMnxyEAl7qSFCEZRYL5XKV-3jGhuu=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "3",
        title: "Beeto Driver",
        description: "Bee to driver — служба быстрой доставки. Вы можете сделать заказ в этом приложении",
        logo: "https://play-lh.googleusercontent.com/re6eeAPrvjmr1_L3mfjZohA7viFnMyRi4mWn9pf8rTXfh3Ge-QbHZQWNU5k5BQ_-WA=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "5",
        title: "Agent",
        description: "Agent application for business",
        logo: "https://play-lh.googleusercontent.com/3JpTKLT28fJXBH5Nuu6iH9myyo1aif5f-t2anMn_bquPtMRMbIRfmZhDZXj_VeUykg=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "6",
        title: "Timecard",
        description: "Timecard allows you the recording of your working hours with a simple push of a button. You can easily add breaks, expenses and notes.",
        logo: "https://play-lh.googleusercontent.com/n220dd0I2RvdFbjr7aYuR61gP0VGiajegZiFeIi_BdPJuGPtqdC1aWLoUCdsuAqPGHp6=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "7",
        title: "Yosin surasi",
        description: "Arabic text, transcription and translation of meanings of Surah Yasin. There is also an audio of the surah.",
        logo: "https://play-lh.googleusercontent.com/12zCiNhSY2yY0sXb-07VSjiavXY3FY0rbBJemTm7XDfSr7I8mwA8OKSOrJ_NPJDjvg=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "8",
        title: "Qur'oni karim",
        description: "Translation of the Arabic text and meanings of the Holy Quran.",
        logo: "https://play-lh.googleusercontent.com/i4Ngy_DqVTNUsaimflvzHiJQuQkFXLr7j5osB1JXkTmaPvHjsUY-XhlfQ460L2uS4iM=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "11",
        title: "Foodly (UI Template)",
        description: "There are 45+ screens in application for Food delivery.",
        logo: "https://play-lh.googleusercontent.com/nJV9xPlUhORzw_5rFifLrRoBnxdjAh3vBInJ3HALE_6Y0tPVWbhtS4HWQ7R1nsmDRcE=w240-h480-rw",
        platforms: ["Android"]
    },
    {
        id: "12",
        title: "Bahromjon Po'lat",
        description: "My personal application",
        logo: "https://play-lh.googleusercontent.com/GiA-NuSxfCVkYLiPOPC_r6Ec3i2GMmf8SK6NigFDw0aCf7jeIH1tlJNe_ZLCPhfcWc4D=w240-h480-rw",
        platforms: ["Android"]
    }
];
