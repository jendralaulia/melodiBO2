const songBank = [
    // ==========================================
    // 1. INDONESIA - 80-an (10 Lagu)
    // ==========================================
    { artist: "Chrisye", title: "Pergilah Kasih", origin: "Indonesia", era: "80-an", artistOptions: ["Chrisye", "Iwan Fals", "Ebiet G. Ade", "Fariz RM"], titleOptions: ["Pergilah Kasih", "Anak Sekolah", "Kisah Kasih di Sekolah", "Cintaku"] },
    { artist: "Iwan Fals", title: "Bento", origin: "Indonesia", era: "80-an", artistOptions: ["Iwan Fals", "Slank", "God Bless", "Doel Sumbang"], titleOptions: ["Bento", "Bongkar", "Oemar Bakri", "Pesawat Tempurku"] },
    { artist: "God Bless", title: "Semut Hitam", origin: "Indonesia", era: "80-an", artistOptions: ["God Bless", "Slank", "Boomerang", "Edane"], titleOptions: ["Semut Hitam", "Kehidupan", "Rumah Kita", "Panggung Sandiwara"] },
    { artist: "Gombloh", title: "Kugadaikan Cintaku", origin: "Indonesia", era: "80-an", artistOptions: ["Gombloh", "Doel Sumbang", "Iwan Fals", "Fariz RM"], titleOptions: ["Kugadaikan Cintaku", "Kebyar Kebyar", "Lestari Alamku", "Berita Cuaca"] },
    { artist: "Vina Panduwinata", title: "Burung Camar", origin: "Indonesia", era: "80-an", artistOptions: ["Vina Panduwinata", "Ruth Sahanaya", "Titi DJ", "Nia Daniaty"], titleOptions: ["Burung Camar", "Surat Cinta", "Logika", "Aku Makin Cinta"] },
    { artist: "Ikang Fawzi", title: "Preman", origin: "Indonesia", era: "80-an", artistOptions: ["Ikang Fawzi", "Gito Rollies", "Hari Moekti", "Ahmad Albar"], titleOptions: ["Preman", "Selamat Malam", "Catatan Si Boy", "Randy & Cindy"] },
    { artist: "Nicky Astria", title: "Jarum Neraka", origin: "Indonesia", era: "80-an", artistOptions: ["Nicky Astria", "Anggun C. Sasmi", "Inka Christie", "Nike Ardilla"], titleOptions: ["Jarum Neraka", "Tangan Tangan Setan", "Biar Semua Hilang", "Panggung Sandiwara"] },
    { artist: "Dian Pramana Poetra", title: "Kau Seputih Melati", origin: "Indonesia", era: "80-an", artistOptions: ["Dian Pramana Poetra", "Fariz RM", "Harvey Malaihollo", "Broery Marantika"], titleOptions: ["Kau Seputih Melati", "Masih Ada", "Aku Cinta Padamu", "Biru"] },
    { artist: "Anggun C. Sasmi", title: "Mimpi", origin: "Indonesia", era: "80-an", artistOptions: ["Anggun C. Sasmi", "Nike Ardilla", "Nicky Astria", "Inka Christie"], titleOptions: ["Mimpi", "Tua Tua Keladi", "Bintang Kehidupan", "Nafas Cinta"] },
    { artist: "Titi DJ", title: "Ekspresi", origin: "Indonesia", era: "80-an", artistOptions: ["Titi DJ", "Vina Panduwinata", "Ruth Sahanaya", "Memes"], titleOptions: ["Ekspresi", "Burung Camar", "Astaga", "Pesawatku"] },

    // ==========================================
    // 2. INDONESIA - 90-an (10 Lagu)
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
    // 3. INDONESIA - 2000-an (10 Lagu)
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
    // 4. INDONESIA - 2010-an (10 Lagu)
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
    // 5. INDONESIA - 2020-an (10 Lagu - Baru & Aman)
    // ==========================================
    { artist: "Rizky Febian", title: "Makna Cinta", origin: "Indonesia", era: "2020-an", artistOptions: ["Rizky Febian", "Arsy Widianto", "Budi Doremi", "Andmesh"], titleOptions: ["Makna Cinta", "Cuek", "Kesempurnaan Cinta", "Penantian Berharga"] },
    { artist: "Hindia", title: "Evaluasi", origin: "Indonesia", era: "2020-an", artistOptions: ["Hindia", "Pamungkas", "Kunto Aji", "Sal Priadi"], titleOptions: ["Evaluasi", "Secukupnya", "Rumah Ke Rumah", "Cincin"] },
    { artist: "Tiara Andini", title: "Merasa Indah", origin: "Indonesia", era: "2020-an", artistOptions: ["Tiara Andini", "Lyodra", "Ziva Magnolya", "Brisia Jodie"], titleOptions: ["Merasa Indah", "Maafkan Aku", "Janji Setia", "Usai"] },
    { artist: "Budi Doremi", title: "Mesin Waktu", origin: "Indonesia", era: "2020-an", artistOptions: ["Budi Doremi", "Andmesh", "Judika", "Virgoun"], titleOptions: ["Mesin Waktu", "Melukis Senja", "Tolong", "Tak Kan Hilang"] },
    { artist: "Pamungkas", title: "To The Bone", origin: "Indonesia", era: "2020-an", artistOptions: ["Pamungkas", "Ardhito Pramono", "Hindia", "Kunto Aji"], titleOptions: ["To The Bone", "Kenangan Manis", "Flying Solo", "I Love You but I'm Letting Go"] },
    { artist: "Juicy Luicy", title: "Lantas", origin: "Indonesia", era: "2020-an", artistOptions: ["Juicy Luicy", "Kangen Band", "Armada", "Wali"], titleOptions: ["Lantas", "Tanpa Tergesa", "Mawar Jingga", "Terlalu Tinggi"] },
    { artist: "GANGGA", title: "Blue Jeans", origin: "Indonesia", era: "2020-an", artistOptions: ["GANGGA", "Pamungkas", "Ardhito Pramono", "Kaleb J"], titleOptions: ["Blue Jeans", "Forever", "Whiskey Bottle", "Don't"] },
    { artist: "Anneth", title: "Mungkin Hari Ini Esok Atau Nanti", origin: "Indonesia", era: "2020-an", artistOptions: ["Anneth", "Lyodra", "Tiara Andini", "Ziva Magnolya"], titleOptions: ["Mungkin Hari Ini Esok Atau Nanti", "Pesan Terakhir", "Sisa Rasa", "Maafkan Aku"] },
    { artist: "Ardhito Pramono", title: "Bitterlove", origin: "Indonesia", era: "2020-an", artistOptions: ["Ardhito Pramono", "Pamungkas", "Hindia", "Kunto Aji"], titleOptions: ["Bitterlove", "Fine Today", "Sudah", "Plastik"] },
    { artist: "Stevan Pasaribu", title: "Belum Siap Kehilangan", origin: "Indonesia", era: "2020-an", artistOptions: ["Stevan Pasaribu", "Budi Doremi", "Andmesh", "Judika"], titleOptions: ["Belum Siap Kehilangan", "Ternyata Hanya Kamu", "Tak Pernah Cukup", "Hanya Rindu"] },

    // ==========================================
    // 6. BARAT - 80-an (10 Lagu)
    // ==========================================
    { artist: "Survivor", title: "Eye of the Tiger", origin: "Barat", era: "80-an", artistOptions: ["Survivor", "Queen", "Journey", "Aerosmith"], titleOptions: ["Eye of the Tiger", "Don't Stop Believin'", "We Will Rock You", "Dream On"] },
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
    // 7. BARAT - 90-an (10 Lagu - Baru & Aman)
    // ==========================================
    { artist: "Nirvana", title: "Smells Like Teen Spirit", origin: "Barat", era: "90-an", artistOptions: ["Nirvana", "Pearl Jam", "Green Day", "Foo Fighters"], titleOptions: ["Smells Like Teen Spirit", "Come As You Are", "Lithium", "In Bloom"] },
    { artist: "Oasis", title: "Wonderwall", origin: "Barat", era: "90-an", artistOptions: ["Oasis", "Blur", "Radiohead", "Coldplay"], titleOptions: ["Wonderwall", "Don't Look Back In Anger", "Champagne Supernova", "Live Forever"] },
    { artist: "Backstreet Boys", title: "I Want It That Way", origin: "Barat", era: "90-an", artistOptions: ["Backstreet Boys", "NSYNC", "Boyzone", "Westlife"], titleOptions: ["I Want It That Way", "Everybody", "As Long As You Love Me", "Shape of My Heart"] },
    { artist: "Aerosmith", title: "I Don't Want to Miss a Thing", origin: "Barat", era: "90-an", artistOptions: ["Aerosmith", "Bon Jovi", "Guns N' Roses", "U2"], titleOptions: ["I Don't Want to Miss a Thing", "Crazy", "Dream On", "Cryin'"] },
    { artist: "Goo Goo Dolls", title: "Iris", origin: "Barat", era: "90-an", artistOptions: ["Goo Goo Dolls", "Radiohead", "Matchbox Twenty", "The Calling"], titleOptions: ["Iris", "Slide", "Name", "Black Balloon"] },
    { artist: "TLC", title: "No Scrubs", origin: "Barat", era: "90-an", artistOptions: ["TLC", "Destiny's Child", "Spice Girls", "En Vogue"], titleOptions: ["No Scrubs", "Waterfalls", "Creep", "Unpretty"] },
    { artist: "No Doubt", title: "Don't Speak", origin: "Barat", era: "90-an", artistOptions: ["No Doubt", "The Cranberries", "Garbage", "Paramore"], titleOptions: ["Don't Speak", "Just A Girl", "Spiderwebs", "It's My Life"] },
    { artist: "Ricky Martin", title: "Livin' la Vida Loca", origin: "Barat", era: "90-an", artistOptions: ["Ricky Martin", "Enrique Iglesias", "Marc Anthony", "Luis Fonsi"], titleOptions: ["Livin' la Vida Loca", "Maria", "She Bangs", "Bailamos"] },
    { artist: "Red Hot Chili Peppers", title: "Under the Bridge", origin: "Barat", era: "90-an", artistOptions: ["Red Hot Chili Peppers", "Nirvana", "Green Day", "Foo Fighters"], titleOptions: ["Under the Bridge", "Californication", "Otherside", "Scar Tissue"] },
    { artist: "Green Day", title: "Basket Case", origin: "Barat", era: "90-an", artistOptions: ["Green Day", "Blink-182", "The Offspring", "Sum 41"], titleOptions: ["Basket Case", "American Idiot", "Boulevard of Broken Dreams", "Wake Me Up When September Ends"] },

    // ==========================================
    // 8. BARAT - 2000-an (10 Lagu - Baru & Aman)
    // ==========================================
    { artist: "Coldplay", title: "Yellow", origin: "Barat", era: "2000-an", artistOptions: ["Coldplay", "Muse", "Maroon 5", "Keane"], titleOptions: ["Yellow", "Fix You", "The Scientist", "Viva La Vida"] },
    { artist: "Evanescence", title: "Bring Me To Life", origin: "Barat", era: "2000-an", artistOptions: ["Evanescence", "Linkin Park", "Paramore", "Nightwish"], titleOptions: ["Bring Me To Life", "My Immortal", "Going Under", "Call Me When You're Sober"] },
    { artist: "Eminem", title: "Lose Yourself", origin: "Barat", era: "2000-an", artistOptions: ["Eminem", "50 Cent", "Snoop Dogg", "Jay-Z"], titleOptions: ["Lose Yourself", "Without Me", "The Real Slim Shady", "Stan"] },
    { artist: "Beyonce", title: "Crazy In Love", origin: "Barat", era: "2000-an", artistOptions: ["Beyonce", "Rihanna", "Alicia Keys", "Shakira"], titleOptions: ["Crazy In Love", "Single Ladies", "Halo", "Irreplaceable"] },
    { artist: "Gwen Stefani", title: "Hollaback Girl", origin: "Barat", era: "2000-an", artistOptions: ["Gwen Stefani", "Fergie", "Nelly Furtado", "P!nk"], titleOptions: ["Hollaback Girl", "Sweet Escape", "Rich Girl", "Cool"] },
    { artist: "Maroon 5", title: "This Love", origin: "Barat", era: "2000-an", artistOptions: ["Maroon 5", "Coldplay", "OneRepublic", "Train"], titleOptions: ["This Love", "She Will Be Loved", "Sunday Morning", "Payphone"] },
    { artist: "Kelly Clarkson", title: "Since U Been Gone", origin: "Barat", era: "2000-an", artistOptions: ["Kelly Clarkson", "Avril Lavigne", "P!nk", "Carrie Underwood"], titleOptions: ["Since U Been Gone", "Because Of You", "Breakaway", "Stronger"] },
    { artist: "Jason Mraz", title: "I'm Yours", origin: "Barat", era: "2000-an", artistOptions: ["Jason Mraz", "Jack Johnson", "John Mayer", "Ed Sheeran"], titleOptions: ["I'm Yours", "Lucky", "I Won't Give Up", "Banana Pancakes"] },
    { artist: "Rihanna", title: "Umbrella", origin: "Barat", era: "2000-an", artistOptions: ["Rihanna", "Beyonce", "Lady Gaga", "Katy Perry"], titleOptions: ["Umbrella", "Diamonds", "Don't Stop The Music", "We Found Love"] },
    { artist: "Train", title: "Hey, Soul Sister", origin: "Barat", era: "2000-an", artistOptions: ["Train", "The Fray", "Plain White T's", "Owl City"], titleOptions: ["Hey, Soul Sister", "Drops of Jupiter", "Drive By", "Marry Me"] },

    // ==========================================
    // 9. BARAT - 2010-an (10 Lagu - Baru & Aman)
    // ==========================================
    { artist: "John Legend", title: "All of Me", origin: "Barat", era: "2010-an", artistOptions: ["John Legend", "Sam Smith", "Ed Sheeran", "Bruno Mars"], titleOptions: ["All of Me", "Ordinary People", "Love Me Now", "Stay With You"] },
    { artist: "Imagine Dragons", title: "Radioactive", origin: "Barat", era: "2010-an", artistOptions: ["Imagine Dragons", "OneRepublic", "Coldplay", "The Killers"], titleOptions: ["Radioactive", "Demons", "Believer", "Thunder"] },
    { artist: "Bruno Mars", title: "Uptown Funk", origin: "Barat", era: "2010-an", artistOptions: ["Bruno Mars", "The Weeknd", "Maroon 5", "Justin Timberlake"], titleOptions: ["Uptown Funk", "That's What I Like", "Just the Way You Are", "Locked Out of Heaven"] },
    { artist: "Katy Perry", title: "Roar", origin: "Barat", era: "2010-an", artistOptions: ["Katy Perry", "Taylor Swift", "Lady Gaga", "Rihanna"], titleOptions: ["Roar", "Firework", "Dark Horse", "California Gurls"] },
    { artist: "Justin Timberlake", title: "CAN'T STOP THE FEELING!", origin: "Barat", era: "2010-an", artistOptions: ["Justin Timberlake", "Bruno Mars", "Pharrell Williams", "Robin Thicke"], titleOptions: ["CAN'T STOP THE FEELING!", "Mirrors", "Cry Me a River", "SexyBack"] },
    { artist: "Billie Eilish", title: "bad guy", origin: "Barat", era: "2010-an", artistOptions: ["Billie Eilish", "Lorde", "Halsey", "Melanie Martinez"], titleOptions: ["bad guy", "ocean eyes", "when the party's over", "everything i wanted"] },
    { artist: "The Weeknd", title: "Starboy", origin: "Barat", era: "2010-an", artistOptions: ["The Weeknd", "Bruno Mars", "Drake", "Post Malone"], titleOptions: ["Starboy", "Blinding Lights", "The Hills", "Can't Feel My Face"] },
    { artist: "Dua Lipa", title: "New Rules", origin: "Barat", era: "2010-an", artistOptions: ["Dua Lipa", "Ariana Grande", "Camila Cabello", "Bebe Rexha"], titleOptions: ["New Rules", "Don't Start Now", "Levitating", "IDGAF"] },
    { artist: "Ariana Grande", title: "thank u, next", origin: "Barat", era: "2010-an", artistOptions: ["Ariana Grande", "Selena Gomez", "Demi Lovato", "Miley Cyrus"], titleOptions: ["thank u, next", "7 rings", "Into You", "no tears left to cry"] },
    { artist: "Justin Bieber", title: "Sorry", origin: "Barat", era: "2010-an", artistOptions: ["Justin Bieber", "Shawn Mendes", "Zayn", "Charlie Puth"], titleOptions: ["Sorry", "Love Yourself", "Baby", "What Do You Mean?"] },

    // ==========================================
    // 10. BARAT - 2020-an (10 Lagu - Baru & Aman)
    // ==========================================
    { artist: "Glass Animals", title: "Heat Waves", origin: "Barat", era: "2020-an", artistOptions: ["Glass Animals", "Arctic Monkeys", "Tame Impala", "The Neighbourhood"], titleOptions: ["Heat Waves", "Gooey", "Youth", "Space Ghost Coast To Coast"] },
    { artist: "The Weeknd", title: "Save Your Tears", origin: "Barat", era: "2020-an", artistOptions: ["The Weeknd", "Post Malone", "Harry Styles", "Bruno Mars"], titleOptions: ["Save Your Tears", "Blinding Lights", "Starboy", "Die For You"] },
    { artist: "Miley Cyrus", title: "Flowers", origin: "Barat", era: "2020-an", artistOptions: ["Miley Cyrus", "Dua Lipa", "Katy Perry", "Lady Gaga"], titleOptions: ["Flowers", "Wrecking Ball", "Party In The U.S.A.", "Midnight Sky"] },
    { artist: "The Kid LAROI", title: "STAY", origin: "Barat", era: "2020-an", artistOptions: ["The Kid LAROI", "Justin Bieber", "Post Malone", "Shawn Mendes"], titleOptions: ["STAY", "WITHOUT YOU", "Thousand Miles", "Love Again"] },
    { artist: "Lil Nas X", title: "INDUSTRY BABY", origin: "Barat", era: "2020-an", artistOptions: ["Lil Nas X", "Jack Harlow", "Post Malone", "Drake"], titleOptions: ["INDUSTRY BABY", "MONTERO", "Old Town Road", "THATS WHAT I WANT"] },
    { artist: "Ed Sheeran", title: "Bad Habits", origin: "Barat", era: "2020-an", artistOptions: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Charlie Puth"], titleOptions: ["Bad Habits", "Shivers", "Shape of You", "Perfect"] },
    { artist: "Post Malone", title: "Chemical", origin: "Barat", era: "2020-an", artistOptions: ["Post Malone", "The Weeknd", "Justin Bieber", "Ed Sheeran"], titleOptions: ["Chemical", "Circles", "Sunflower", "Rockstar"] },
    { artist: "Tate McRae", title: "greedy", origin: "Barat", era: "2020-an", artistOptions: ["Tate McRae", "Sabrina Carpenter", "Olivia Rodrigo", "Madison Beer"], titleOptions: ["greedy", "you broke me first", "exes", "run for the hills"] },
    { artist: "Måneskin", title: "Beggin'", origin: "Barat", era: "2020-an", artistOptions: ["Måneskin", "Arctic Monkeys", "Imagine Dragons", "The Killers"], titleOptions: ["Beggin'", "Supermodel", "I Wanna Be Your Slave", "ZITTI E BUONI"] },
    { artist: "Jack Harlow", title: "First Class", origin: "Barat", era: "2020-an", artistOptions: ["Jack Harlow", "Lil Nas X", "Drake", "Post Malone"], titleOptions: ["First Class", "WHATS POPPIN", "Tyler Herro", "Lovin On Me"] }
];
