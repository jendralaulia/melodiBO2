const songBank = [
    // ==========================================
    // 1. INDONESIA - 80-an
    // ==========================================
    { artist: "Chrisye", title: "Pergilah Kasih", origin: "Indonesia", era: "80-an", artistOptions: ["Chrisye", "Iwan Fals", "Ebiet G. Ade", "Fariz RM"], titleOptions: ["Pergilah Kasih", "Anak Sekolah", "Kisah Kasih di Sekolah", "Cintaku"] },
    { artist: "Iwan Fals", title: "Bento", origin: "Indonesia", era: "80-an", artistOptions: ["Iwan Fals", "Slank", "God Bless", "Doel Sumbang"], titleOptions: ["Bento", "Bongkar", "Oemar Bakri", "Pesawat Tempurku"] },
    { artist: "God Bless", title: "Semut Hitam", origin: "Indonesia", era: "80-an", artistOptions: ["God Bless", "Slank", "Boomerang", "Edane"], titleOptions: ["Semut Hitam", "Kehidupan", "Rumah Kita", "Panggung Sandiwara"] },
    { artist: "Gombloh", title: "Kugadaikan Cintaku", origin: "Indonesia", era: "80-an", artistOptions: ["Gombloh", "Doel Sumbang", "Iwan Fals", "Fariz RM"], titleOptions: ["Kugadaikan Cintaku", "Kebyar Kebyar", "Lestari Alamku", "Berita Cuaca"] },
    { artist: "Vina Panduwinata", title: "Burung Camar", origin: "Indonesia", era: "80-an", artistOptions: ["Vina Panduwinata", "Ruth Sahanaya", "Titi DJ", "Nia Daniaty"], titleOptions: ["Burung Camar", "Surat Cinta", "Logika", "Aku Makin Cinta"] },
    { artist: "Fariz RM", title: "Barcelona", origin: "Indonesia", era: "80-an", artistOptions: ["Fariz RM", "Deddy Dhukun", "Mus Mujiono", "Dian Pramana Poetra"], titleOptions: ["Barcelona", "Sakura", "Nada Kasih", "Penari"] },
    { artist: "Ikang Fawzi", title: "Preman", origin: "Indonesia", era: "80-an", artistOptions: ["Ikang Fawzi", "Gito Rollies", "Hari Moekti", "Ahmad Albar"], titleOptions: ["Preman", "Selamat Malam", "Catatan Si Boy", "Randy & Cindy"] },
    { artist: "Nicky Astria", title: "Jarum Neraka", origin: "Indonesia", era: "80-an", artistOptions: ["Nicky Astria", "Anggun C. Sasmi", "Inka Christie", "Nike Ardilla"], titleOptions: ["Jarum Neraka", "Tangan Tangan Setan", "Biar Semua Hilang", "Panggung Sandiwara"] },
    { artist: "Dian Pramana Poetra", title: "Kau Seputih Melati", origin: "Indonesia", era: "80-an", artistOptions: ["Dian Pramana Poetra", "Fariz RM", "Harvey Malaihollo", "Broery Marantika"], titleOptions: ["Kau Seputih Melati", "Masih Ada", "Aku Cinta Padamu", "Biru"] },
    { artist: "KLa Project", title: "Rentak Ria", origin: "Indonesia", era: "80-an", artistOptions: ["KLa Project", "Java Jive", "Trio Libels", "Kahitna"], titleOptions: ["Rentak Ria", "Tentang Kita", "Yogyakarta", "Terpuruk Ku Disini"] },

    // ==========================================
    // 2. INDONESIA - 90-an
    // ==========================================
    { artist: "Dewa 19", title: "Kangen", origin: "Indonesia", era: "90-an", artistOptions: ["Dewa 19", "Slank", "Padi", "Gigi"], titleOptions: ["Kangen", "Pupus", "Risalah Hati", "Separuh Nafas"] },
    { artist: "Sheila On 7", title: "Dan...", origin: "Indonesia", era: "90-an", artistOptions: ["Sheila On 7", "Padi", "Naif", "Kla Project"], titleOptions: ["Dan...", "Sephia", "Melompat Lebih Tinggi", "Kita"] },
    { artist: "Slank", title: "Terlalu Manis", origin: "Indonesia", era: "90-an", artistOptions: ["Slank", "Dewa 19", "Boomerang", "Jamrud"], titleOptions: ["Terlalu Manis", "Ku Tak Bisa", "Balikin", "Mawar Merah"] },
    { artist: "Padi", title: "Sobat", origin: "Indonesia", era: "90-an", artistOptions: ["Padi", "Sheila On 7", "Dewa 19", "Gigi"], titleOptions: ["Sobat", "Mahadewi", "Kasih Tak Sampai", "Begitu Indah"] },
    { artist: "Gigi", title: "Janji", origin: "Indonesia", era: "90-an", artistOptions: ["Gigi", "Naif", "Slank", "Dewa 19"], titleOptions: ["Janji", "11 Januari", "Nakal", "Terbang"] },
    { artist: "Naif", title: "Mobil Balap", origin: "Indonesia", era: "90-an", artistOptions: ["Naif", "Sheila On 7", "The Changcuters", "Gigi"], titleOptions: ["Mobil Balap", "Posesif", "Benci Untuk Mencinta", "Piknik 72"] },
    { artist: "Stinky", title: "Mungkinkah", origin: "Indonesia", era: "90-an", artistOptions: ["Stinky", "Base Jam", "Caffeine", "Element"], titleOptions: ["Mungkinkah", "Jangan Tutup Dirimu", "Cinta Suci", "Kuingin Bersamamu"] },
    { artist: "Base Jam", title: "Bukan Pujangga", origin: "Indonesia", era: "90-an", artistOptions: ["Base Jam", "Stinky", "Java Jive", "Wayang"], titleOptions: ["Bukan Pujangga", "Bermimpi", "Sayang", "Jatuh Cinta"] },
    { artist: "Java Jive", title: "Gerangan Cinta", origin: "Indonesia", era: "90-an", artistOptions: ["Java Jive", "Kahitna", "KLa Project", "ME"], titleOptions: ["Gerangan Cinta", "Kau Yang Terindah", "Gadis Malam", "Selalu Untuk Selamanya"] },
    { artist: "Kahitna", title: "Cantik", origin: "Indonesia", era: "90-an", artistOptions: ["Kahitna", "Yovie & Nuno", "Java Jive", "Glenn Fredly"], titleOptions: ["Cantik", "Cerita Cinta", "Andai Dia Tahu", "Mantan Terindah"] },

    // ==========================================
    // 3. INDONESIA - 2000-an
    // ==========================================
    { artist: "Peterpan", title: "Mungkin Nanti", origin: "Indonesia", era: "2000-an", artistOptions: ["Peterpan", "Radja", "Ungu", "ST12"], titleOptions: ["Mungkin Nanti", "Ada Apa Denganmu", "Bintang Di Surga", "Topeng"] },
    { artist: "Letto", title: "Ruang Rindu", origin: "Indonesia", era: "2000-an", artistOptions: ["Letto", "Nidji", "D'Masiv", "Samsons"], titleOptions: ["Ruang Rindu", "Sebelum Cahaya", "Sandaran Hati", "Permintaan Hati"] },
    { artist: "Nidji", title: "Hapus Aku", origin: "Indonesia", era: "2000-an", artistOptions: ["Nidji", "D'Masiv", "Geisha", "Peterpan"], titleOptions: ["Hapus Aku", "Biarlah", "Laskar Pelangi", "Arti Sahabat"] },
    { artist: "Samsons", title: "Kenangan Terindah", origin: "Indonesia", era: "2000-an", artistOptions: ["Samsons", "Kerispatih", "Ungu", "Ada Band"], titleOptions: ["Kenangan Terindah", "Naluri Lelaki", "Kisah Tak Sempurna", "Akhir Rasa Ini"] },
    { artist: "Ungu", title: "Demi Waktu", origin: "Indonesia", era: "2000-an", artistOptions: ["Ungu", "ST12", "Wali", "Kangen Band"], titleOptions: ["Demi Waktu", "Tercipta Untukku", "Kekasih Gelapku", "Cinta Dalam Hati"] },
    { artist: "Radja", title: "Jujur", origin: "Indonesia", era: "2000-an", artistOptions: ["Radja", "Repvblik", "Armada", "Kangen Band"], titleOptions: ["Jujur", "Tulus", "Benci Bilang Cinta", "Manusia Biasa"] },
    { artist: "The Changcuters", title: "Racun Dunia", origin: "Indonesia", era: "2000-an", artistOptions: ["The Changcuters", "Naif", "Kuburan", "Netral"], titleOptions: ["Racun Dunia", "I Love U Bibeh", "Gila Gilaan", "Main Serong"] },
    { artist: "Mocca", title: "Secret Admirer", origin: "Indonesia", era: "2000-an", artistOptions: ["Mocca", "Ten2Five", "White Shoes", "Endah N Rhesa"], titleOptions: ["Secret Admirer", "I Remember", "Me And My Boyfriend", "Do What You Wanna Do"] },
    { artist: "Ada Band", title: "Manusia Bodoh", origin: "Indonesia", era: "2000-an", artistOptions: ["Ada Band", "Kerispatih", "Samsons", "Yovie & Nuno"], titleOptions: ["Manusia Bodoh", "Karena Wanita", "Setengah Hati", "Pemain Cinta"] },
    { artist: "D'Masiv", title: "Cinta Ini Membunuhku", origin: "Indonesia", era: "2000-an", artistOptions: ["D'Masiv", "Geisha", "Nidji", "Vierra"], titleOptions: ["Cinta Ini Membunuhku", "Jangan Menyerah", "Di Antara Kalian", "Merindukanmu"] },

    // ==========================================
    // 4. INDONESIA - 2010-an
    // ==========================================
    { artist: "Tulus", title: "Sepatu", origin: "Indonesia", era: "2010-an", artistOptions: ["Tulus", "Kunto Aji", "Glenn Fredly", "Afgan"], titleOptions: ["Sepatu", "Sewindu", "Gajah", "Teman Hidup"] },
    { artist: "Raisa", title: "Kali Kedua", origin: "Indonesia", era: "2010-an", artistOptions: ["Raisa", "Isyana Sarasvati", "Yura Yunita", "Maudy Ayunda"], titleOptions: ["Kali Kedua", "Mantan Terindah", "Serba Salah", "Apalah (Arti Menunggu)"] },
    { artist: "Isyana Sarasvati", title: "Tetap Dalam Jiwa", origin: "Indonesia", era: "2010-an", artistOptions: ["Isyana Sarasvati", "Raisa", "Tiara Andini", "Lyodra"], titleOptions: ["Tetap Dalam Jiwa", "Kau Adalah", "Mimpi", "Lexicon"] },
    { artist: "Payung Teduh", title: "Akad", origin: "Indonesia", era: "2010-an", artistOptions: ["Payung Teduh", "Fourtwnty", "Banda Neira", "Float"], titleOptions: ["Akad", "Untuk Perempuan", "Menuju Senja", "Resah"] },
    { artist: "Virgoun", title: "Surat Cinta Untuk Starla", origin: "Indonesia", era: "2010-an", artistOptions: ["Virgoun", "Armada", "Anji", "Judika"], titleOptions: ["Surat Cinta Untuk Starla", "Bukti", "Selamat (Selamat Tinggal)", "Saat Kau Telah Mengerti"] },
    { artist: "RAN", title: "Dekat Di Hati", origin: "Indonesia", era: "2010-an", artistOptions: ["RAN", "HiVi!", "Maliq & D'Essentials", "HIVI!"], titleOptions: ["Dekat Di Hati", "Pandangan Pertama", "Selamat Pagi", "Hanya Untukmu"] },
    { artist: "Kunto Aji", title: "Terlalu Lama Sendiri", origin: "Indonesia", era: "2010-an", artistOptions: ["Kunto Aji", "Tulus", "Pamungkas", "Ardhito Pramono"], titleOptions: ["Terlalu Lama Sendiri", "Rehat", "Pilu Membiru", "Topik Semalam"] },
    { artist: "Yura Yunita", title: "Cinta Dan Rahasia", origin: "Indonesia", era: "2010-an", artistOptions: ["Yura Yunita", "Raisa", "Monita Tahalea", "Danilla"], titleOptions: ["Cinta Dan Rahasia", "Intuisi", "Berawal Dari Tatap", "Buktikan"] },
    { artist: "Armada", title: "Asal Kau Bahagia", origin: "Indonesia", era: "2010-an", artistOptions: ["Armada", "Repvblik", "Wali", "Setia Band"], titleOptions: ["Asal Kau Bahagia", "Pergi Pagi Pulang Pagi", "Harusnya Aku", "Buka Hatimu"] },
    { artist: "Anji", title: "Dia", origin: "Indonesia", era: "2010-an", artistOptions: ["Anji", "Virgoun", "Cakra Khan", "Judika"], titleOptions: ["Dia", "Bidadari Tak Bersayap", "Menunggu Kamu", "Kekasih Terhebat"] },

    // ==========================================
    // 5. INDONESIA - 2020-an
    // ==========================================
    { artist: "Mahalini", title: "Sisa Rasa", origin: "Indonesia", era: "2020-an", artistOptions: ["Mahalini", "Tiara Andini", "Lyodra", "Ziva Magnolya"], titleOptions: ["Sisa Rasa", "Melawan Restu", "Kisah Sempurna", "Sial"] },
    { artist: "Lyodra", title: "Pesan Terakhir", origin: "Indonesia", era: "2020-an", artistOptions: ["Lyodra", "Tiara Andini", "Mahalini", "Keisya Levronka"], titleOptions: ["Pesan Terakhir", "Sang Dewi", "Dibanding Dia", "Ego"] },
    { artist: "Tiara Andini", title: "Merasa Indah", origin: "Indonesia", era: "2020-an", artistOptions: ["Tiara Andini", "Lyodra", "Ziva Magnolya", "Brisia Jodie"], titleOptions: ["Merasa Indah", "Maafkan Aku", "Janji Setia", "Usai"] },
    { artist: "Nadin Amizah", title: "Bertaut", origin: "Indonesia", era: "2020-an", artistOptions: ["Nadin Amizah", "Danilla", "Yura Yunita", "Idgitaf"], titleOptions: ["Bertaut", "Sorai", "Taruh", "Rayuan Perempuan Gila"] },
    { artist: "Rizky Febian", title: "Makna Cinta", origin: "Indonesia", era: "2020-an", artistOptions: ["Rizky Febian", "Arsy Widianto", "Budi Doremi", "Andmesh"], titleOptions: ["Makna Cinta", "Cuek", "Kesempurnaan Cinta", "Penantian Berharga"] },
    { artist: "Hindia", title: "Evaluasi", origin: "Indonesia", era: "2020-an", artistOptions: ["Hindia", "Pamungkas", "Kunto Aji", "Sal Priadi"], titleOptions: ["Evaluasi", "Secukupnya", "Rumah Ke Rumah", "Cincin"] },
    { artist: "Keisya Levronka", title: "Tak Ingin Usai", origin: "Indonesia", era: "2020-an", artistOptions: ["Keisya Levronka", "Tiara Andini", "Mahalini", "Lyodra"], titleOptions: ["Tak Ingin Usai", "Hidup Tanpamu", "Mengejar Matahari", "Tergesa"] },
    { artist: "Ziva Magnolya", title: "Pilihan yang Terbaik", origin: "Indonesia", era: "2020-an", artistOptions: ["Ziva Magnolya", "Lyodra", "Tiara Andini", "Mahalini"], titleOptions: ["Pilihan yang Terbaik", "Terlukis Indah", "Tak Sanggup Melupa", "Menanti"] },
    { artist: "Bernadya", title: "Satu Bulan", origin: "Indonesia", era: "2020-an", artistOptions: ["Bernadya", "Idgitaf", "Nadin Amizah", "Raissa Anggiani"], titleOptions: ["Satu Bulan", "Kini Mereka Tahu", "Apa Mungkin", "Sialnya, Hidup Harus Tetap Berjalan"] },
    { artist: "Budi Doremi", title: "Mesin Waktu", origin: "Indonesia", era: "2020-an", artistOptions: ["Budi Doremi", "Andmesh", "Judika", "Virgoun"], titleOptions: ["Mesin Waktu", "Melukis Senja", "Tolong", "Tak Kan Hilang"] },

    // ==========================================
    // 6. BARAT - 80-an
    // ==========================================
    { artist: "Michael Jackson", title: "Billie Jean", origin: "Barat", era: "80-an", artistOptions: ["Michael Jackson", "Prince", "Stevie Wonder", "Lionel Richie"], titleOptions: ["Billie Jean", "Beat It", "Thriller", "Smooth Criminal"] },
    { artist: "Queen", title: "Another One Bites the Dust", origin: "Barat", era: "80-an", artistOptions: ["Queen", "AC/DC", "Aerosmith", "The Rolling Stones"], titleOptions: ["Another One Bites the Dust", "Bohemian Rhapsody", "We Will Rock You", "Radio Ga Ga"] },
    { artist: "Bon Jovi", title: "Livin' On A Prayer", origin: "Barat", era: "80-an", artistOptions: ["Bon Jovi", "Guns N' Roses", "Aerosmith", "Def Leppard"], titleOptions: ["Livin' On A Prayer", "Always", "It's My Life", "You Give Love A Bad Name"] },
    { artist: "Madonna", title: "Like a Virgin", origin: "Barat", era: "80-an", artistOptions: ["Madonna", "Cyndi Lauper", "Whitney Houston", "Cher"], titleOptions: ["Like a Virgin", "Material Girl", "Papa Don't Preach", "Vogue"] },
    { artist: "Whitney Houston", title: "I Wanna Dance with Somebody", origin: "Barat", era: "80-an", artistOptions: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Diana Ross"], titleOptions: ["I Wanna Dance with Somebody", "I Will Always Love You", "Greatest Love of All", "How Will I Know"] },
    { artist: "a-ha", title: "Take On Me", origin: "Barat", era: "80-an", artistOptions: ["a-ha", "Duran Duran", "Tears for Fears", "Depeche Mode"], titleOptions: ["Take On Me", "Hunting High and Low", "The Sun Always Shines", "Crying in the Rain"] },
    { artist: "Guns N' Roses", title: "Sweet Child O' Mine", origin: "Barat", era: "80-an", artistOptions: ["Guns N' Roses", "Bon Jovi", "Aerosmith", "Metallica"], titleOptions: ["Sweet Child O' Mine", "November Rain", "Welcome to the Jungle", "Paradise City"] },
    { artist: "George Michael", title: "Careless Whisper", origin: "Barat", era: "80-an", artistOptions: ["George Michael", "Elton John", "Phil Collins", "Richard Marx"], titleOptions: ["Careless Whisper", "Faith", "Freedom", "Wake Me Up Before You Go-Go"] },
    { artist: "U2", title: "With or Without You", origin: "Barat", era: "80-an", artistOptions: ["U2", "The Police", "R.E.M.", "The Cure"], titleOptions: ["With or Without You", "I Still Haven't Found", "Beautiful Day", "Sunday Bloody Sunday"] },
    { artist: "The Police", title: "Every Breath You Take", origin: "Barat", era: "80-an", artistOptions: ["The Police", "U2", "The Clash", "Dire Straits"], titleOptions: ["Every Breath You Take", "Roxanne", "Message in a Bottle", "Don't Stand So Close to Me"] },

    // ==========================================
    // 7. BARAT - 90-an
    // ==========================================
    { artist: "Nirvana", title: "Smells Like Teen Spirit", origin: "Barat", era: "90-an", artistOptions: ["Nirvana", "Pearl Jam", "Green Day", "Foo Fighters"], titleOptions: ["Smells Like Teen Spirit", "Come As You Are", "Lithium", "In Bloom"] },
    { artist: "Oasis", title: "Wonderwall", origin: "Barat", era: "90-an", artistOptions: ["Oasis", "Blur", "Radiohead", "Coldplay"], titleOptions: ["Wonderwall", "Don't Look Back In Anger", "Champagne Supernova", "Live Forever"] },
    { artist: "Backstreet Boys", title: "I Want It That Way", origin: "Barat", era: "90-an", artistOptions: ["Backstreet Boys", "NSYNC", "Boyzone", "Westlife"], titleOptions: ["I Want It That Way", "Everybody", "As Long As You Love Me", "Shape of My Heart"] },
    { artist: "Britney Spears", title: "...Baby One More Time", origin: "Barat", era: "90-an", artistOptions: ["Britney Spears", "Christina Aguilera", "Spice Girls", "Madonna"], titleOptions: ["...Baby One More Time", "Oops!... I Did It Again", "Toxic", "Lucky"] },
    { artist: "Radiohead", title: "Creep", origin: "Barat", era: "90-an", artistOptions: ["Radiohead", "Oasis", "Muse", "Coldplay"], titleOptions: ["Creep", "Karma Police", "High and Dry", "No Surprises"] },
    { artist: "TLC", title: "No Scrubs", origin: "Barat", era: "90-an", artistOptions: ["TLC", "Destiny's Child", "Spice Girls", "En Vogue"], titleOptions: ["No Scrubs", "Waterfalls", "Creep", "Unpretty"] },
    { artist: "Spice Girls", title: "Wannabe", origin: "Barat", era: "90-an", artistOptions: ["Spice Girls", "TLC", "Destiny's Child", "Aqua"], titleOptions: ["Wannabe", "Stop", "2 Become 1", "Spice Up Your Life"] },
    { artist: "Celine Dion", title: "My Heart Will Go On", origin: "Barat", era: "90-an", artistOptions: ["Celine Dion", "Whitney Houston", "Mariah Carey", "Shania Twain"], titleOptions: ["My Heart Will Go On", "The Power of Love", "Because You Loved Me", "All By Myself"] },
    { artist: "Red Hot Chili Peppers", title: "Under the Bridge", origin: "Barat", era: "90-an", artistOptions: ["Red Hot Chili Peppers", "Nirvana", "Green Day", "Foo Fighters"], titleOptions: ["Under the Bridge", "Californication", "Otherside", "Scar Tissue"] },
    { artist: "Green Day", title: "Basket Case", origin: "Barat", era: "90-an", artistOptions: ["Green Day", "Blink-182", "The Offspring", "Sum 41"], titleOptions: ["Basket Case", "American Idiot", "Boulevard of Broken Dreams", "Wake Me Up When September Ends"] },

    // ==========================================
    // 8. BARAT - 2000-an
    // ==========================================
    { artist: "Coldplay", title: "Yellow", origin: "Barat", era: "2000-an", artistOptions: ["Coldplay", "Muse", "Maroon 5", "Keane"], titleOptions: ["Yellow", "Fix You", "The Scientist", "Viva La Vida"] },
    { artist: "Linkin Park", title: "Numb", origin: "Barat", era: "2000-an", artistOptions: ["Linkin Park", "Limp Bizkit", "Evanescence", "Green Day"], titleOptions: ["Numb", "In The End", "Crawling", "Somewhere I Belong"] },
    { artist: "Eminem", title: "Lose Yourself", origin: "Barat", era: "2000-an", artistOptions: ["Eminem", "50 Cent", "Snoop Dogg", "Jay-Z"], titleOptions: ["Lose Yourself", "Without Me", "The Real Slim Shady", "Stan"] },
    { artist: "Beyonce", title: "Crazy In Love", origin: "Barat", era: "2000-an", artistOptions: ["Beyonce", "Rihanna", "Alicia Keys", "Shakira"], titleOptions: ["Crazy In Love", "Single Ladies", "Halo", "Irreplaceable"] },
    { artist: "The Killers", title: "Mr. Brightside", origin: "Barat", era: "2000-an", artistOptions: ["The Killers", "The Strokes", "Arctic Monkeys", "Franz Ferdinand"], titleOptions: ["Mr. Brightside", "Somebody Told Me", "When You Were Young", "Human"] },
    { artist: "Maroon 5", title: "This Love", origin: "Barat", era: "2000-an", artistOptions: ["Maroon 5", "Coldplay", "OneRepublic", "Train"], titleOptions: ["This Love", "She Will Be Loved", "Sunday Morning", "Payphone"] },
    { artist: "Avril Lavigne", title: "Complicated", origin: "Barat", era: "2000-an", artistOptions: ["Avril Lavigne", "Kelly Clarkson", "Pink", "Paramore"], titleOptions: ["Complicated", "Sk8er Boi", "My Happy Ending", "Girlfriend"] },
    { artist: "OutKast", title: "Hey Ya!", origin: "Barat", era: "2000-an", artistOptions: ["OutKast", "Gorillaz", "Black Eyed Peas", "Gnarls Barkley"], titleOptions: ["Hey Ya!", "Ms. Jackson", "Roses", "So Fresh, So Clean"] },
    { artist: "Rihanna", title: "Umbrella", origin: "Barat", era: "2000-an", artistOptions: ["Rihanna", "Beyonce", "Lady Gaga", "Katy Perry"], titleOptions: ["Umbrella", "Diamonds", "Don't Stop The Music", "We Found Love"] },
    { artist: "Black Eyed Peas", title: "I Gotta Feeling", origin: "Barat", era: "2000-an", artistOptions: ["Black Eyed Peas", "LMFAO", "David Guetta", "Pitbull"], titleOptions: ["I Gotta Feeling", "Where Is The Love?", "Boom Boom Pow", "Pump It"] },

    // ==========================================
    // 9. BARAT - 2010-an
    // ==========================================
    { artist: "Adele", title: "Rolling in the Deep", origin: "Barat", era: "2010-an", artistOptions: ["Adele", "Sam Smith", "Sia", "Amy Winehouse"], titleOptions: ["Rolling in the Deep", "Someone Like You", "Hello", "Set Fire to the Rain"] },
    { artist: "Ed Sheeran", title: "Shape of You", origin: "Barat", era: "2010-an", artistOptions: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Charlie Puth"], titleOptions: ["Shape of You", "Thinking Out Loud", "Perfect", "Photograph"] },
    { artist: "Bruno Mars", title: "Uptown Funk", origin: "Barat", era: "2010-an", artistOptions: ["Bruno Mars", "The Weeknd", "Maroon 5", "Justin Timberlake"], titleOptions: ["Uptown Funk", "That's What I Like", "Just the Way You Are", "Locked Out of Heaven"] },
    { artist: "Taylor Swift", title: "Blank Space", origin: "Barat", era: "2010-an", artistOptions: ["Taylor Swift", "Katy Perry", "Selena Gomez", "Ariana Grande"], titleOptions: ["Blank Space", "Shake It Off", "Love Story", "Bad Blood"] },
    { artist: "Justin Bieber", title: "Sorry", origin: "Barat", era: "2010-an", artistOptions: ["Justin Bieber", "Shawn Mendes", "Zayn", "Charlie Puth"], titleOptions: ["Sorry", "Love Yourself", "Baby", "What Do You Mean?"] },
    { artist: "Billie Eilish", title: "bad guy", origin: "Barat", era: "2010-an", artistOptions: ["Billie Eilish", "Lorde", "Halsey", "Melanie Martinez"], titleOptions: ["bad guy", "ocean eyes", "when the party's over", "everything i wanted"] },
    { artist: "Drake", title: "Hotline Bling", origin: "Barat", era: "2010-an", artistOptions: ["Drake", "Kendrick Lamar", "Post Malone", "Travis Scott"], titleOptions: ["Hotline Bling", "God's Plan", "In My Feelings", "One Dance"] },
    { artist: "Dua Lipa", title: "New Rules", origin: "Barat", era: "2010-an", artistOptions: ["Dua Lipa", "Ariana Grande", "Camila Cabello", "Bebe Rexha"], titleOptions: ["New Rules", "Don't Start Now", "Levitating", "IDGAF"] },
    { artist: "The Weeknd", title: "Starboy", origin: "Barat", era: "2010-an", artistOptions: ["The Weeknd", "Bruno Mars", "Drake", "Post Malone"], titleOptions: ["Starboy", "Blinding Lights", "The Hills", "Can't Feel My Face"] },
    { artist: "Ariana Grande", title: "thank u, next", origin: "Barat", era: "2010-an", artistOptions: ["Ariana Grande", "Selena Gomez", "Demi Lovato", "Miley Cyrus"], titleOptions: ["thank u, next", "7 rings", "Into You", "no tears left to cry"] },

    // ==========================================
    // 10. BARAT - 2020-an
    // ==========================================
    { artist: "The Weeknd", title: "Blinding Lights", origin: "Barat", era: "2020-an", artistOptions: ["The Weeknd", "Post Malone", "Harry Styles", "Bruno Mars"], titleOptions: ["Blinding Lights", "Save Your Tears", "Starboy", "Die For You"] },
    { artist: "Harry Styles", title: "As It Was", origin: "Barat", era: "2020-an", artistOptions: ["Harry Styles", "Shawn Mendes", "Justin Bieber", "Zayn"], titleOptions: ["As It Was", "Watermelon Sugar", "Sign of the Times", "Adore You"] },
    { artist: "Taylor Swift", title: "Anti-Hero", origin: "Barat", era: "2020-an", artistOptions: ["Taylor Swift", "Olivia Rodrigo", "Billie Eilish", "Sabrina Carpenter"], titleOptions: ["Anti-Hero", "Cruel Summer", "Blank Space", "Karma"] },
    { artist: "Olivia Rodrigo", title: "drivers license", origin: "Barat", era: "2020-an", artistOptions: ["Olivia Rodrigo", "Billie Eilish", "Tate McRae", "Sabrina Carpenter"], titleOptions: ["drivers license", "good 4 u", "deja vu", "vampire"] },
    { artist: "Miley Cyrus", title: "Flowers", origin: "Barat", era: "2020-an", artistOptions: ["Miley Cyrus", "Dua Lipa", "Katy Perry", "Lady Gaga"], titleOptions: ["Flowers", "Wrecking Ball", "Party In The U.S.A.", "Midnight Sky"] },
    { artist: "Doja Cat", title: "Say So", origin: "Barat", era: "2020-an", artistOptions: ["Doja Cat", "Megan Thee Stallion", "Cardi B", "Nicki Minaj"], titleOptions: ["Say So", "Kiss Me More", "Woman", "Paint The Town Red"] },
    { artist: "Dua Lipa", title: "Levitating", origin: "Barat", era: "2020-an", artistOptions: ["Dua Lipa", "Doja Cat", "Ariana Grande", "Miley Cyrus"], titleOptions: ["Levitating", "Don't Start Now", "Dance The Night", "Physical"] },
    { artist: "SZA", title: "Kill Bill", origin: "Barat", era: "2020-an", artistOptions: ["SZA", "Summer Walker", "Kehlani", "H.E.R."], titleOptions: ["Kill Bill", "Good Days", "Snooze", "The Weekend"] },
    { artist: "Benson Boone", title: "Beautiful Things", origin: "Barat", era: "2020-an", artistOptions: ["Benson Boone", "Stephen Sanchez", "Teddy Swims", "Conan Gray"], titleOptions: ["Beautiful Things", "In The Stars", "Ghost Town", "Slow It Down"] },
    { artist: "Sabrina Carpenter", title: "Espresso", origin: "Barat", era: "2020-an", artistOptions: ["Sabrina Carpenter", "Olivia Rodrigo", "Tate McRae", "Madison Beer"], titleOptions: ["Espresso", "Nonsense", "Feather", "Please Please Please"] }
];

