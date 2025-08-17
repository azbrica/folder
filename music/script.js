// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/cons.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 100000, text: "You know you want me" },
            { time: 1000, text: "So don't keep sayin' our hands are tied" },
            { time: 1000, text: "You claim it's not in the cards" },
            { time: 1000, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 1000, text: "But you're here in my heart" },
            { time: 1000, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 1000, text: "What if we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "Nothin' could keep us apart" },
            { time: 1000, text: "You'd be the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one can say what we get to be" },
            { time: 1000, text: "So why don't we rewrite the stars?" },
            { time: 1000, text: "Maybe the world could be ours tonight" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You think it's easy" },
            { time: 1000, text: "You think I don't wanna run to you, yeah" },
            { time: 1000, text: "But there are mountains (There are mountains)" },
            { time: 1000, text: "And there are doors that we can't walk through" },
            { time: 1000, text: "I know you're wonderin' why" },
            { time: 1000, text: "Because we're able to be just you and me within these walls" },
            { time: 1000, text: "But when we go outside" },
            { time: 1000, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 1000, text: "No one can rewrite the stars" },
            { time: 1000, text: "How can you say you'll be mine?" },
            { time: 1000, text: "Everything keeps us apart" },
            { time: 1000, text: "And I'm not the one you were meant to find" },
            { time: 1000, text: "It's not up to you, it's not up to me" },
            { time: 1000, text: "When everyone tells us what we can be" },
            { time: 1000, text: "And how can we rewrite the stars?" },
            { time: 1000, text: "Say that the world can be ours tonight" },
            { time: 1000, text: "All I want is to fly with you" },
            { time: 1000, text: "All I want is to fall with you" },
            { time: 1000, text: "So just give me all of you" },
            { time: 1000, text: "It feels impossible" },
            { time: 1000, text: "It's not impossible" },
            { time: 1000, text: "Is it impossible?" },
            { time: 1000, text: "Say that it's possible" },
            { time: 1000, text: "How do we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "And nothin' could keep us apart" },
            { time: 1000, text: "'Cause you are the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one could say what we get to be" },
            { time: 1000, text: "And why don't we rewrite the stars?" },
            { time: 1000, text: "Changin' the world to be ours" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 1000, text: "But I can't have you" },
            { time: 1000, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/somebodypleasure.mp3",
        videoBgSrc: "videos/somebodypleasure.mp4",
        lyrics: [
            { time: 1000, text: "It was in a blink of an eye" },
            { time: 1000, text: "Find a way how to say goodbye" },
            { time: 1000, text: "I've got to take me away from all sadness" },
            { time: 1000, text: "Stitch all my wounds, confess all the sins" },
            { time: 1000, text: "And took all my insecurities" },
            { time: 1000, text: "When will I got the love that is so pure?" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 1000, text: "Gotta have, gotta have to always make sure" },
            { time: 1000, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i wanna.mp4",
        lyrics: [
            { time: 1000, text: "I wanna be your vacuum cleaner" },
            { time: 1000, text: "Breathing in your dust" },
            { time: 1000, text: "I wanna be your Ford Cortina" },
            { time: 1000, text: "I will never rust" },
            { time: 1000, text: "If you like your coffee hot" },
            { time: 1000, text: "Let me be your coffee pot" },
            { time: 1000, text: "You call the shots, babe" },
            { time: 1000, text: "I just wanna be yours" },
            
            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 1000, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 1000, text: "Let me be the portable heater that you'll get cold without" },
            { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
            { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 1000, text: "At least as deep as the Pacific Ocean" },
            { time: 1000, text: "I wanna be yours" },

            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours" },

            { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
            { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 1000, text: "I will never rust (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    {
        id: 7,
        title: "123456",
        artist: "Budi DoReMi",
        album: "Ok Computer",
        albumArtUrl: "https://i.ytimg.com/vi/b7cmBqicC9c/hqdefault.jpg",
        audioSrc: "audio/Budi.mp3",
        videoBgSrc: "videos/Budi.mp4",
        lyrics: [
            { time: 1000, text: "Ada sebuah cerita tentang aku dan dia" },
            { time: 1000, text: "Jumpa pertama ku dengannya di satu sore yang cerah" },
            { time: 1000, text: "Singkat kata singkat cerita ku berjalan dengannya" },
            { time: 1000, text: "Namun apa yang aku rasa mungkinkah ini cinta?" },
            { time: 1000, text: "Dan aku pun bayangkan dirimu" },
            { time: 1000, text: "Mulai ada rindu" },
            { time: 1000, text: "Duniaku terhenti karena kamu" },
            { time: 1000, text: "Mungkin bisa jadi milikku" },
            { time: 1000, text: "Semoga lagu cinta ini bersarang tepat di hatimu" },
            { time: 1000, text: "Satu kali ku bertemu, Dua lama sudah rasaku" },
            { time: 1000, text: "Tiga kata yang ku tahu, Aku cinta padamu" },
            { time: 1000, text: "Empat malam ku menunggu jawaban cinta darimu" },
            { time: 1000, text: "Lima tanda yang kau beri, Enampaknya kau cinta padaku" },
        ] 
    }, 
    {
        id: 8,
        title: "Penjaga Hati",
        artist: "Nadhif Basalamah",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/jia3fhBQ8qI/hqdefault.jpg", 
        audioSrc: "audio/penjaga hati.mp3",
        videoBgSrc: "videos/penjaga hati.mp4",
        lyrics: [
            { time: 3, text: "Karna bersamamu semua terasa indah" },
            { time: 8, text: "Gundah gulana hatiku pun hancur sirna" },
            { time: 14, text: "Janji ku tak kan ku lepas wahai kau bidadariku dari surga" },
            { time: 21, text: "Tuk selamanya" },
            { time: 27, text: "Tuk selamanya" },
            { time: 32, text: "Tuk selamanya" }
        ]
    }, 
    {
        id: 9,
        title: "Bergema Sampai Selamanya",
        artist: "Nadhif Basalamah",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/jG_I7HGVlvs/hqdefault.jpg",
        audioSrc: "audio/bergema.mp3",
        videoBgSrc: "videos/bergema.mp4",
        lyrics: [
            { time: 1000, text: "Aku ingin jadi teman nyamanmu" },
            { time: 1000, text: "Tempat kauhilangkan keluh kesahmu" },
            { time: 1000, text: "Kita berbincang tak karuan tanpa beban" },
            { time: 1000, text: "Dan juga khayalan tentang masa depan" },
            { time: 1000, text: "Ku tak ingin cepat berlalu (berlalu)" },
            { time: 1000, text: "Waktu yang kupunya denganmu" },
            { time: 1000, text: "Kita berdansa dan tertawa, gandeng tangan" },
            { time: 1000, text: "Semoga bergema sampai selamanya" },
            { time: 1000, text: "Dunia pasti ada akhirnya" },
            { time: 1000, text: "Bintang-bintang pun ada umurnya" },
            { time: 1000, text: "Maka tenang saja, kita di sini berdua" },
            { time: 1000, text: "Nikmati sementara yang ada" },
            { time: 1000, text: "Bersandar padaku, taruh di bahuku" },
            { time: 1000, text: "Relakan semua, bebas semaumu (bebas semaumu)" },
            { time: 1000, text: "Percayalah, ini sayang terlewatkan (percayalah, terlewatkan)" },
            { time: 1000, text: "Kusampaikan dalam nyanyian, bergema sampai s'lamanya" },
            { time: 1000, text: "Dunia pasti ada akhirnya" },
            { time: 1000, text: "Bintang-bintang pun ada umurnya" },
            { time: 1000, text: "Maka tenang saja, kita di sini berdua" },
            { time: 1000, text: "Nikmati sementara yang ada" },
            { time: 1000, text: "Dunia pasti ada akhirnya" },
            { time: 1000, text: "Bintang-bintang pun ada umurnya" },
            { time: 1000, text: "Maka tenang saja, kita di sini berdua" },
            { time: 1000, text: "Nikmati sementara yang ada" },
            { time: 1000, text: "Semoga bergema selamanya" }
       ]
   }, 
   {
        id: 10,
        title: "Where We Are",
        artist: "One Direction",
        album: "Midnight Memories (Deluxe Edition)",
        albumArtUrl: "https://i.ytimg.com/vi/yYxMH3twnjk/hqdefault.jpg",
        audioSrc: "audio/where we are.mp3",
        videoBgSrc: "videos/where we are.mp4",
        lyrics: [
            { time: 1000, text: "Did we ever know?" },
            { time: 1000, text: "Is it all inside of my head?" },
            { time: 1000, text: "Maybe you still think I don't care" },
            { time: 1000, text: "But all I need is you" },
            { time: 1000, text: "Yeah, you know it's true, yeah, you know it's true" },
            { time: 1000, text: "Forget about where we are and let go" },
            { time: 1000, text: "We're so close" },
            { time: 1000, text: "If you don't know where to start, just hold on" },
            { time: 1000, text: "And don't run, no" },
            { time: 1000, text: "We're looking back, we messed around" },
            { time: 1000, text: "But that was then and this is now" },
            { time: 1000, text: "All we need's enough love to hold us" },
            { time: 1000, text: "Where we are" }
        ]
   },
   {
        id: 11,
        title: "Karena kamu",
        artist: "Geisha",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/aGSggATnKp0/hqdefault.jpg",
        audioSrc: "audio/karenakamu.mp3",
        videoBgSrc: "videos/karenakamu.mp4",
        lyrics: [
            { time: 0, text: "Karena kamu, aku rela menunggu semua" },
            { time: 6, text: "Sungguh berat yang kurasa" },
            { time: 9, text: "Karena kamu, aku tetap bertahan" },
            { time: 13, text: "Meskipun kini engkau di peluknya" },
            { time: 17, text: "Masih mungkinkah semua" },
            { time: 21, text: "Abadi seperti dahulu?" },
            { time: 25, text: "Kar'namu, selalu kar'namu" },
            { time: 29, text: "Ku cemburu" }
        ]
   }, 
   {
        id: 12,
        title: "Breathe",
        artist: "Olly Alexander",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/c7nyleyyL6I/hqdefault.jpg",
        audioSrc: "audio/breathe2.mp3",
        videoBgSrc: "videos/breathe1.mp4",
        lyrics: [
            { time: 1000, text: "What's that supposed to be about, baby?" },
            { time: 1000, text: "Go free up your vibe, stop acting crazy" },
            { time: 1000, text: "Reminiscing all the good times daily" },
            { time: 1000, text: "Try and pull that, got me acting shady" },
            { time: 1000, text: "What's that supposed to be about, baby?" },
            { time: 1000, text: "Go free up your vibe, stop acting crazy" },
            { time: 1000, text: "You know I give you the good loving daily" },
            { time: 1000, text: "Try and pull that, got me actin' shady" },
            { time: 1000, text: "Oh" }
        ]
    }, 
    {
        id: 13,
        title: "Only",
        artist: "Lee Hi",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/Nr8xZ5fhZzQ/hqdefault.jpg",
        audioSrc: "audio/myonlylove.mp3",
        videoBgSrc: "videos/myonlylove.mp4",
        lyrics: [
            { time: 0, text: "My only love" },
            { time: 5, text: "My only one" },
            { time: 9, text: "Geudaereul bomyeun" }, 
            { time: 1000, text: "(when i see you)" },
            { time: 11, text: "Gidaego sipeo" }, 
            { time: 1000, text: "(i want to lean on you)" },
            { time: 14, text: "Gajigo sipeo" }, 
            { time: 1000, text: "(i want to have you)" },
            { time: 17, text: "I sarangiramyeon" }, 
            { time: 1000, text: "(a love like this would make)" },
            { time: 20, text: "Eoseolpeun kkumdo" }, 
            { time: 1000, text: "(even the most immature)" },
            { time: 22, text: "Irwojil geot gateund" }, 
            { time: 1000, text: "(dream come true)" }, 
            { time: 28, text: "Now i believe" }, 
            { time: 30, text: "Georeogeoreo ganeun" },
            { time: 1000, text: "(every step we take)" }, 
            { time: 36, text: "Gibun joa kkok duriseo chuneun chum gata" }, 
            { time: 1000, text: "(it's like a dance we perform together)" }, 
            { time: 43, text: " My,oh my,oh my,oh" }, 
            { time: 44, text: "Nae sarang be" }, 
            { time: 1000, text: "(my love)" }, 
            { time: 47, text: "My only love" }, 
            { time: 54, text: "La-la-la-la-la-la-la-la" }, 
            { time: 58, text: "La-la-la-la-la-la-la-la" }, 
            { time: 65, text: "La-la-la-la-la-la-la-la" }, 
            { time: 70, text: "My only one" }, 
        ]
   },
   {
        id: 14,
        title: "You (=i)",
        artist: "Bolbbalgan4",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/B6mI1mVMAB4/hqdefault.jpg",
        audioSrc: "audio/bol4.mp3",
        videoBgSrc: "videos/bol4.mp4",
        lyrics: [
            { time: 1000, text: "baboya oneureun andoendago malhajima" },
            { time: 1000, text: "oneulmankeumeun naegedo kkok" },
            { time: 1000, text: "gihoereul jwo" },
            { time: 1000, text: "sarangseureobge utneun geotto" }, 
            { time: 1000, text: "yeppeuge malhaneun geotto" },
            { time: 1000, text: "manhi yeonseuphaesseo" },
            { time: 1000, text: "bogo sipeodo chameurago hajima" },
            { time: 1000, text: "baby nan jom eokji burineun geotdo maja" },
            { time: 1000, text: "oneuldo nae nunmul yeongiro" },
            { time: 1000, text: "badanaen neowa-ui deiteu" },
            { time: 1000, text: "bogo sipeodo maeil kkuk isseodo" },
            { time: 1000, text: "naneun niga anajugiman" },
            { time: 1000, text: "hamyeon syareureureureu noga yeah" },
            { time: 1000, text: "baby you you you yeah yeah" }, 
            { time: 1000, text: "you you you yeah yeah" }, 
        ]
   }, 
   {
        id: 14,
        title: "Still With You",
        artist: "Jungkook",
        album: "Single",
        albumArtUrl: "https://i.ytimg.com/vi/BksBNbTIoPE/hqdefault.jpg",
        audioSrc: "audio/jungkook.mp3",
        videoBgSrc: "videos/jungkook.mp4",
        lyrics: [
    { time: 1000, text: "Nal seuchineun geudaeui yeoteun geu moksori" },
    { time: 1000, text: "Nae ireumeul han beonman deo bulleojuseyo" },
    { time: 1000, text: "Eoreobeorin noeul arae meomchwo seoitjiman" },
    { time: 1000, text: "Geudae hyanghae han georeumssik georeogallaeyo" },
    { time: 1000, text: "Still with you" },
    { time: 1000, text: "Eoduunbang jomyeong hana eopsi" },
    { time: 1000, text: "Iksukaejimyeon an doeneunde" },
    { time: 1000, text: "Geuge tto iksukae" },
    { time: 1000, text: "Najimagi deullineun" },
    { time: 1000, text: "I eeokeon sori" },
    { time: 1000, text: "Igeorado eopseumyeon" },
    { time: 1000, text: "Na jeongmal muneojil geot gata" },
    { time: 1000, text: "Hamkke utgo hamkke ulgo" },
    { time: 1000, text: "I dansunhan gamjeongdeuri" },
    { time: 1000, text: "Naegen jeonbuyeonna bwa" },
    { time: 1000, text: "Eonjejjeumilkka" },
    { time: 1000, text: "Dasi geudael majuhandamyeon" },
    { time: 1000, text: "Nuneul bogo malhallaeyo" },
    { time: 1000, text: "Bogo sipeosseoyo" },
    { time: 1000, text: "Hwangholhaetdeon gieok soge" },
    { time: 1000, text: "Na hollo chumeul chwodo biga naerijana" },
    { time: 1000, text: "I angaega geotil ttaejjeum" },
    { time: 1000, text: "Jeojeun ballo dallyeogal ge" },
    { time: 1000, text: "Geuttae nal anajwo" },
    { time: 1000, text: "Jeo dari oerowo boyeoseo" },
    { time: 1000, text: "Bamhaneure hwanhage ulgo inneun geot gataseo" },
    { time: 1000, text: "Eonjenga achimi oneun geol almyeonseodo" },
    { time: 1000, text: "Byeolcheoreom neoui haneure meomulgo sipeosseo" },
    { time: 1000, text: "Harureul geu sunganeul" },
    { time: 1000, text: "Ireoke doel geol aratdamyeon" },
    { time: 1000, text: "Deo damadwosseul tende" },
    { time: 1000, text: "Eonjejjeumilkka" },
    { time: 1000, text: "Dasi geudael majuhandamyeon" },
    { time: 1000, text: "Nuneul bogo malhallaeyo" },
    { time: 1000, text: "Bogo sipeosseoyo" },
    { time: 1000, text: "Hwangholhaetdeon gieok soge" },
    { time: 1000, text: "Na hollo chumeul chwodo biga naerijana" },
    { time: 1000, text: "I angaega geotil ttaejjeum" },
    { time: 1000, text: "Jeojeun ballo dallyeogal ge" },
    { time: 1000, text: "Geuttae nal jabajwo" },
    { time: 1000, text: "Nal baraboneun huimihan miso dwipyeone" },
    { time: 1000, text: "Areumdaun boratbicheul geuryeobollaeyo" },
    { time: 1000, text: "Seoro balgeoreumi an majeul sudo itjiman" },
    { time: 1000, text: "Geudaewa hamkke i gireul geotgo sipeoyo" },
    { time: 1000, text: "Still with you" }
]
 }, 
    {
    id: 15,
    title: "Eight Letters",
    artist: "Why Don't We",
    album: "Eight Letters",
    albumArtUrl: "https://i.ytimg.com/vi/8yamg7y-Jv0/hqdefault.jpg",
    audioSrc: "audio/8.mp3",
    videoBgSrc: "videos/8.mp4",
    lyrics: [
        { time: 1000, text: "When I close my eyes" },
        { time: 1000, text: "It's you there in my mind" },
        { time: 1000, text: "When I close my eyes" },
        { time: 1000, text: "If all it is is eight letters" },
        { time: 1000, text: "Why is it so hard to say?" },
        { time: 1000, text: "If all it is is eight letters" },
        { time: 1000, text: "Why am I in my own way?" },
        { time: 1000, text: "Why do I pull you close?" },
        { time: 1000, text: "And then ask you for space" },
        { time: 1000, text: "If all it is is eight letters" },
        { time: 1000, text: "Why is it so hard to say?" }
    ]
},
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();

// Sinkronisasi video dengan audio
audioPlayer.addEventListener("play", () => {
    if (videoPlayer) {
        videoPlayer.currentTime = audioPlayer.currentTime;
        videoPlayer.play();
    }
});

audioPlayer.addEventListener("pause", () => {
    if (videoPlayer) {
        videoPlayer.pause();
    }
});

audioPlayer.addEventListener("timeupdate", () => {
    if (videoPlayer && Math.abs(videoPlayer.currentTime - audioPlayer.currentTime) > 0.3) {
        videoPlayer.currentTime = audioPlayer.currentTime;
    }
});

audioPlayer.addEventListener("ended", () => {
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
});
