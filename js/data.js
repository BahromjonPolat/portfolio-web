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
        platforms: [
            {
                platform: "ios",
                rating: 4.7,
                id: "1",
                link: "https://apps.apple.com/us/app/hilol/id6454192226"
            },
            {
                platform: "android",
                rating: 4.7,
                id: "2",
                link: "https://play.google.com/store/apps/details?id=uz.hilal.hilol_uz"
            }
        ],
        primaryScreenshot: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/3f/b1/e4/3fb1e4c2-a342-3564-a31c-c42b63c48ff5/8c1cb78c-ad8b-4246-8bbf-4dca4174edc7_image_185.png/230x0w.webp",
        secondaryScreenshot: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/fc/4f/e3/fc4fe36c-9bb5-ff49-0418-6eca71422a60/66294520-5696-468a-b2a6-3ff21cbf68f4_image_186.png/230x0w.webp"
    },
    {
        id: "14",
        title: "Nomakler",
        description: "With our innovative 360-degree tour feature, you can explore properties from every angle, providing an immersive viewing experience from the palm of your hand.",
        logo: "https://play-lh.googleusercontent.com/AyCdzz9rfvJ7hUNI695xLp_SaBy2pxLF1Ep3ELUk8H1lxT52Y6xt1x5xgdSA_1hcwQ=w240-h480-rw",
        platforms: [
            {
                platform: "ios",
                rating: 4.5,
                id: "1",
                link: "https://apps.apple.com/uz/app/nomakler/id6477270693"
            },
            {
                platform: "android",
                rating: 4.7,
                id: "2",
                link: "https://play.google.com/store/apps/details?id=uz.nomakler.mobile"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/ez8mzFaU7E3HaM8W5I7sNSpd-0cBiVwx5dfMViW0YwPfNff8ew2I6x0xVMcdYRnyKw_q=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/-jHhMTv_QlH_5x5HTX3rT3CfHqifXHduSWbdjhI5LV0vDvdTvkK6BX7k9QO_0iC3M_0=w526-h296-rw"
    },
    {
        id: "15",
        title: "Nomakler Agent",
        description: "For Agents",
        logo: "https://play-lh.googleusercontent.com/PmaAyPIKXNgpfsTQ49kET_08tmsiBVcp_l5zuyhVRmd_5LzZ3MTcFYl9LvUN93pO0EY=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 4.7,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.nomakler.agent"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/q24ArX3mpJKllC0KokkICvMPo73re-8HMvGce2Vf-a6nVJuPromA-2B9zajNTVlSQ7g=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/-mBmclOZ38IaKs__EqwTu3dioL1igbtGVf4VrCSoMkasrjPTpCRPdq2w1GToBoxlHKs=w526-h296-rw"
    },
    {
        id: "17",
        title: "Hilol eBook Desktop",
        description: "Ushbu Hilol eBook dasturi yordamida Siz e-hilolnashr.uz sahifasidan harid qilgan elektron va audio kitoblardan foydalanishingiz mumkin.",
        logo: "https://e-hilolnashr.uz/Application/images/and-1.png",
        platforms: [
            {
                platform: "windows",
                rating: 4.7,
                id: "1",
                link: "https://e-hilolnashr.uz/download"
            },
            {
                platform: "linux",
                rating: 4.9,
                id: "2",
                link: "https://e-hilolnashr.uz/download"
            }
        ],
        primaryScreenshot: "https://e-hilolnashr.uz/Application/images/windows-hilol.png",
        secondaryScreenshot: "https://e-hilolnashr.uz/Application/images/linux.png"
    },
    {
        id: "16",
        title: "Tafsiri hilol",
        description: "Hilol Nashr publishing house presenting the electronic version of the Tafsir Hilal.",
        logo: "https://play-lh.googleusercontent.com/JIMp5fBD60MDDjtFTn7uNEECOgwiqs76y8eE1WmNl12PeBnCps-3VmYVPhFQgJZm874=w240-h480-rw",
        platforms: [
            {
                platform: "ios",
                rating: 4.7,
                id: "1",
                link: "https://apps.apple.com/ru/app/tafsiri-hilol/id1130844977"
            },
            {
                platform: "android",
                rating: 4.9,
                id: "2",
                link: "https://play.google.com/store/apps/details?id=uz.hilal.tafsir"
            }
        ],
        primaryScreenshot: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4f/8a/6e/4f8a6e50-1f1c-fe31-f7ba-92172656d631/IMG_5787_1.png/460x996bb.webp",
        secondaryScreenshot: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f4/a5/ca/f4a5ca4c-082e-688d-f87b-4cc114c786ea/IMG_5779_1.png/460x996bb.webp"
    },
    {
        id: "9",
        title: "Invan POS",
        description: "Desktop application for POS (Point of sale).",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: [
            {
                platform: "windows",
                rating: 5.0,
                id: "1",
                link: "https://in1.uz/"
            }
        ],
        primaryScreenshot: "https://drive.google.com/u/0/uc?id=1qdW5PXpPuoLxgqYDKuqJOkYcgNavN9qB&export=download",
        secondaryScreenshot: "https://drive.google.com/u/0/uc?id=1VQRXCLsH9y_4UGHLEi-6xUMIy_Voqb2F&export=download"
    },
    {
        id: "13",
        title: "Opke Delivery",
        description: "Eltib beruvchilar uchun ilova",
        logo: "https://play-lh.googleusercontent.com/Rtqz85XdY5bFI4TBJm-Hy6yHgwN0Job4OfXhc6eaSfV3u43PTcVAUHHxQuDFX4YbZXc=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.mirrikhsoftware.bring_it"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/ELO7BTcc6GK9IX0EQsrOjpz2PJhnmcPS-GrLawjeg4qkoOLydKtPBrJM3NlYhnrKdHw=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/bD1IBoYRCXhjvInZZ2hqZ98o7V8_tA89W_Prk3lD46ND1bUAAtdDw4HAJ0u5Uaw6uA=w526-h296-rw"
    },
    {
        id: "10",
        title: "InCom (Invan communicator)",
        description: "Integration with Soliq",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: [
            {
                platform: "windows",
                rating: 5.0,
                id: "1",
                link: "https://in1.uz/"
            }
        ],
        primaryScreenshot: "https://in1.uz/_next/image?url=%2Fimages%2Fblog%2Fblog-1.webp&w=384&q=75",
        secondaryScreenshot: "https://in1.uz/_next/image?url=%2Fimages%2Fequipment.png&w=640&q=75"
    },
    {
        id: "1",
        title: "Tiin Loyalty",
        description: "Application Loyalty Tiin market",
        logo: "https://play-lh.googleusercontent.com/Klj3MYGqK6Tqt5Mjj9er7-JIXsGdChxXm4PiWUjm55NfF5tgdwIZL9-u_xf_9l9C79Td=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 4.2,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=cashback.in1.uz"
            },
            {
                platform: "ios",
                rating: 2.5,
                id: "2",
                link: "https://apps.apple.com/uz/app/tiin-loyalty/id1609771623"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/_-Pv9i8gJoGGSp4FPwqEghKEV68uYFeGvFe3VnUCiGoVVCBKhoczBhctn2rt6oTU6QU=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/C6evt3avimnAju6RI7a812y4jOWPptcXQSS32mcD_dWHy7Elae0niBa7WdEG3J_W_w=w526-h296-rw"
    },
    {
        id: "4",
        title: "Inventory App",
        description: "Multi-user app for stock management and tracking sales and purchases. Especially useful for small retailers or warehouses.",
        logo: "https://play-lh.googleusercontent.com/XsR74TLnoi3-phB9AcLsze5fG5_dD2tFMlYkqlntGkUhKLv_N8pxjViaPb_KWAadrlTv=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.in1.inventory"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/qbMPwrI06LLVVXh3HAKRtgF6dsI8UVOE1bFpJgNCIuuz1YQiocpi1pAUyY43WKoTlX4=w2560-h1440-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/0i-h-lWwQ9Mm6p3HSFqu2U1iaaiDtpDSc25ZWRlhRvYYDiY9LGH61dcNqNoP_h75rjoR=w526-h296-rw"
    },
    {
        id: "2",
        title: "Beeto",
        description: "E-commerce application for Tiin market",
        logo: "https://play-lh.googleusercontent.com/tpl8g5aOVbPyT_5sL7bJjRibnM3LjnDdbYir4X4YMnxyEAl7qSFCEZRYL5XKV-3jGhuu=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.group.beeto_supermarket"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/r_0UN88Wi50QnPXIJHhr6jPEIDQBeCnCiUsBDSHEzNVSWl6QzprWCfU53ygU_RlanKQ=w2560-h1440-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/UEc3MuY_5-O8h7x_hxKR-Fp6MvWcmFa6h9XrfVn19kMyWkJ-2uc-kotwAW-aoayX5TQ5=w526-h296-rw"
    },
    {
        id: "3",
        title: "Beeto Driver",
        description: "Bee to driver — служба быстрой доставки. Вы можете сделать заказ в этом приложении",
        logo: "https://play-lh.googleusercontent.com/re6eeAPrvjmr1_L3mfjZohA7viFnMyRi4mWn9pf8rTXfh3Ge-QbHZQWNU5k5BQ_-WA=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.in1.betoodelivery.betoodelivery"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/II8rTDVwWKcB8Y-n41KSaEBpAH49fQesYGfisCKRO_q2kOutc1-N9emg04dIHXJ6bW0=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/aPVf-G5BkAZehmkigmtdjhQuEYmzCOg9G0BkAODdSOsgmApw5mwU7RNvGVSqS21FR91y=w2560-h1440-rw"
    },
    {
        id: "5",
        title: "Agent",
        description: "Agent application for business",
        logo: "https://play-lh.googleusercontent.com/3JpTKLT28fJXBH5Nuu6iH9myyo1aif5f-t2anMn_bquPtMRMbIRfmZhDZXj_VeUykg=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.in1.agent"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/eE6EE5gb2u5I_FBAzZjx8kQ5DEIt3mrLhxeFOayGzr5sM6NJpAWBdYH81r2LMs4bbxo=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/ofH_hGkQuHgTUzWJyo_8dcG_FCnvd_mVcrCeHSP_PbHzIcir79p0tjHne-FoakZEmA=w526-h296-rw"
    },
    {
        id: "6",
        title: "Timecard",
        description: "Timecard allows you the recording of your working hours with a simple push of a button. You can easily add breaks, expenses and notes.",
        logo: "https://play-lh.googleusercontent.com/n220dd0I2RvdFbjr7aYuR61gP0VGiajegZiFeIi_BdPJuGPtqdC1aWLoUCdsuAqPGHp6=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.in1.time_card"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/bo71D5_pXce9Xdiviy1rbJhAyxWmQrWLRlYxa98RvLA1ngxcm9EWEQKTUN6N0xoqjQ=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/bo71D5_pXce9Xdiviy1rbJhAyxWmQrWLRlYxa98RvLA1ngxcm9EWEQKTUN6N0xoqjQ=w526-h296-rw"
    },
    {
        id: "7",
        title: "Yosin surasi",
        description: "Arabic text, transcription and translation of meanings of Surah Yasin. There is also an audio of the surah.",
        logo: "https://play-lh.googleusercontent.com/12zCiNhSY2yY0sXb-07VSjiavXY3FY0rbBJemTm7XDfSr7I8mwA8OKSOrJ_NPJDjvg=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 4.7,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.mirrikh.yaaseen"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/MXwvmaEM00IJ2Bl_TXDh1Gtsc9J_MfaxUpFGwvCdHyMp7CfS_5FF2qD8R0EZiaYAF2A=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/IQsKwo49pPBcWLISG90g7mG_TuxeHUwqNxUMwxO5MhAzC8IhMJGo2Ci8Fj5kHJ6bK3g=w526-h296-rw"
    },
    {
        id: "8",
        title: "Qur'oni karim",
        description: "Translation of the Arabic text and meanings of the Holy Quran.",
        logo: "https://play-lh.googleusercontent.com/i4Ngy_DqVTNUsaimflvzHiJQuQkFXLr7j5osB1JXkTmaPvHjsUY-XhlfQ460L2uS4iM=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.mirrikhsoftware.quran"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/_DzVh_ZxVhPxUS-cPCtxjoqIoxTYWoWSQZ25Xb4eV5O_p1BnFDMM55oUUTPAIOIH_Eg=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/C826zHKLzMQB_6Z_9-op07HNdm_6RBQNh_04dXCcfl0tRmtkGxZfk3xma_oAoG80Gv0=w526-h296-rw"
    },
    {
        id: "11",
        title: "Foodly (UI Template)",
        description: "There are 45+ screens in application for Food delivery.",
        logo: "https://play-lh.googleusercontent.com/nJV9xPlUhORzw_5rFifLrRoBnxdjAh3vBInJ3HALE_6Y0tPVWbhtS4HWQ7R1nsmDRcE=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.mirrikh.foodly"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/-I8VuHMZc7W-5lorJOB7F_osxFo67hgbYVIe5bjSow2F2TcOsRgcz6FWkgnrG2EZIw=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/KqEKNqQY8t9gPF89poCRfwDDo2Z6pjUot9PbCTfTifSa5vHW6LbX7SokyhDoGPqJSw=w526-h296-rw"
    },
    {
        id: "12",
        title: "Bahromjon Po'lat",
        description: "My personal application",
        logo: "https://play-lh.googleusercontent.com/GiA-NuSxfCVkYLiPOPC_r6Ec3i2GMmf8SK6NigFDw0aCf7jeIH1tlJNe_ZLCPhfcWc4D=w240-h480-rw",
        platforms: [
            {
                platform: "android",
                rating: 5.0,
                id: "1",
                link: "https://play.google.com/store/apps/details?id=uz.mirrikh.profile"
            }
        ],
        primaryScreenshot: "https://play-lh.googleusercontent.com/8dmcP_vO3Py-rY9pNC9iTXYGpJeK7jCwe1jvLnr-UHbXt9PpCMwp9HJ6BhTuT7fIYaEm=w526-h296-rw",
        secondaryScreenshot: "https://play-lh.googleusercontent.com/6DLc8RCkXRdq_qAetYNArrCOAgeXabcJZwzdU_uu5c8Br-vQDEbMyQH5BrQJSyGfXg=w526-h296-rw"
    }
];
